import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product;

  productAddedNotification(name: string) {
    this.notification.blank(
      'Producto agregado!',
      `Agregaste <strong>${name}</strong> a la lista de compras.`,
      {
        nzStyle: {
          marginTop: '68px'
        }
      }
    ).onClick.subscribe(() => console.log('clicked'));
  }

  constructor(private notification: NzNotificationService) { }

  ngOnInit(): void {
  }

}
