import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { AppRoutingModule } from 'app/app-routing.module';



@NgModule({
  declarations: [
    LogoComponent,
    CartComponent,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    NzMenuModule,
    NzIconModule,
    NzGridModule,
    NzDividerModule,
    NzButtonModule,
    NzDropDownModule,
    NzBadgeModule,
  ],
  exports: [
    LogoComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
