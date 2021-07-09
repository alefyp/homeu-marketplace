import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '@shared/models/product';
import { ProductsState } from './state/products.reducer';

/* selectores */
import { getProducts } from './state/products.reducer';
import * as ProductsActions from './state/products.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> | undefined;

  constructor(private store: Store<ProductsState>) { }

  ngOnInit(): void {
    this.products$ = this.store.select(getProducts);

    this.store.dispatch(ProductsActions.loadProducts());
  }
}
