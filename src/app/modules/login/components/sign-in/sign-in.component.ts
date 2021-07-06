import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as utils from '../../../../shared/utils';

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

  constructor(private fb: FormBuilder) {
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
    console.log(this.signInForm.status);
    console.log(this.signInForm);
    utils.formValidationControls(this.signInForm);
  }


  ngOnInit(): void {
  }

}
