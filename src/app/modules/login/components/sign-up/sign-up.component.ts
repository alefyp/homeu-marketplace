import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as utils from '../../../../shared/utils';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  returnPath = '';

  get formControls() {
    return this.signupForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    public auth: AngularFireAuth,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.signupForm = this.fb.group({
      name: new FormControl('', [Validators.minLength(3)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(
        '',
        Validators.compose([Validators.minLength(6), Validators.required])
      ),
    });
  }

  submitForm(): void {
    utils.formValidationControls(this.signupForm);

    let email = this.signupForm.value.email;
    let password = this.signupForm.value.password;
    let name = this.signupForm.value.name;

    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((signUpResult) => {
        signUpResult.user?.updateProfile({
          displayName: name,
        });

        this.router.navigate([`/${this.returnPath}`]);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  changeTab() { }

  ngOnInit(): void {
    const returnPath =
      this.activatedRoute.snapshot.queryParamMap.get('continueTo');
    if (returnPath !== null) {
      this.returnPath = returnPath;
    }
  }
}
