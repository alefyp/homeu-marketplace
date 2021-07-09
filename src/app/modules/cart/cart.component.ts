import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '@shared/models/product';
import { Observable } from 'rxjs';
import { CartState, getShoppingList } from './state/cart.reducer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  order$: Observable<Product[]> | undefined;
  tableOrder: Product[] = [];

  constructor(private store: Store<CartState>) { }

  ngOnInit(): void {

    this.order$ = this.store.select(getShoppingList);
    this.order$.subscribe((data) => this.tableOrder = data);
  }

}
