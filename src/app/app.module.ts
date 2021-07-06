import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* ngrx */
import { StoreModule } from '@ngrx/store';

/* NGZORRO */
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Features */
import { CoreModule } from './core/core.module';
import { LoginModule } from './modules/login/login.module';
import { ProductsModule } from './modules/products/products.module';
import { ContactModule } from './modules/contact/contact.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    NzLayoutModule,
    NzGridModule,
    NzTypographyModule,
    LoginModule,
    ProductsModule,
    ContactModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule { }
