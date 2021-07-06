import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NzMenuModule,
    NzIconModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
