import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as utils from '../../../../shared/utils';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  get formControls() {
    return this.signInForm.controls;
  }

  constructor(private fb: FormBuilder, public auth: AngularFireAuth, private router: Router) {
    this.signInForm = this.fb.group({
      email: new FormControl(
        '',
        [Validators.email, Validators.required]),
      password: new FormControl(
        '',
        Validators.compose([Validators.minLength(6), Validators.required])
      )
    });
  }

  submitForm(): void {
    utils.formValidationControls(this.signInForm);

    let email = this.signInForm.value.email;
    let password = this.signInForm.value.password;

    this.auth.signInWithEmailAndPassword(email, password).then((signInResult) => {
      console.log('Hello ', signInResult.user);

      this.router.navigate(['/']);

    });

  }


  ngOnInit(): void {
  }

}
