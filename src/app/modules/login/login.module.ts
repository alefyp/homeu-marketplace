import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { StoreModule } from '@ngrx/store';

import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, SignInComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NzTabsModule,
    NzGridModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule,
    FormsModule,
    NzFormModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginModule { }
