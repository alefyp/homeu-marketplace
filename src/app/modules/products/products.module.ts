import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSwitchModule } from 'ng-zorro-antd/switch';


import { ProductCardComponent } from './components/product-card/product-card.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NzIconModule } from 'ng-zorro-antd/icon';


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
    NzIconModule,
    NzSwitchModule,
    AngularFirestoreModule
  ]
})
export class ProductsModule { }
