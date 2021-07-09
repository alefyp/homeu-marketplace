import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Store } from '@ngrx/store';
import { ProductsState } from '@modules/products/state/products.reducer';
import * as ProductsActions from '../../state/products.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product;

  addItem(product: Product) {

    // action
    this.store.dispatch(ProductsActions.addProductToShoppingList({ product }));

    // notification
    this.notification.blank(
      'Producto agregado!',
      `Agregaste <strong>${product.name}</strong> a la lista de compras.`,
      {
        nzStyle: {
          marginTop: '68px'
        }
      }
    ).onClick.subscribe();

  }

  constructor(private notification: NzNotificationService, private store: Store<ProductsState>) { }

  ngOnInit(): void {
  }

}
