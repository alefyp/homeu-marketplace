import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

/* routing */
import { AppRoutingModule } from './app-routing.module';

/* components */
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './login/components/sign-in/sign-in.component';
import { SignUpComponent } from './login/components/sign-up/sign-up.component';

/* ngrx */
import { StoreModule } from '@ngrx/store';

/* ngzorro */
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';


/* firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

/* enviroments */
import { environment } from '@env/environment';
import { ProductCardComponent } from './products/components/product-card/product-card.component';





registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent,
    ProductsComponent,
    ProductCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,



    NzLayoutModule,
    NzGridModule,
    NzTypographyModule,
    NzButtonModule,
    NzDropDownModule,
    NzBadgeModule,
    NzCarouselModule,
    NzTabsModule,
    NzResultModule,
    NzFormModule,
    NzCardModule,
    NzIconModule,
    NzInputModule,



    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule { }
