import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as utils from '../../../../shared/utils';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  get formControls() {
    return this.signupForm.controls;
  }

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: new FormControl('', [Validators.minLength(3)]),
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
    console.log(this.signupForm.status);
    console.log(this.signupForm);
    utils.formValidationControls(this.signupForm);
  }

  changeTab() {
    console.log('working button')
  }


  ngOnInit(): void {
  }

}
