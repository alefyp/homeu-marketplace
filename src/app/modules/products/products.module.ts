import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';


import { ProductCardComponent } from './components/product-card/product-card.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NzGridModule,
    NzCardModule,
  ]
})
export class ProductsModule { }
