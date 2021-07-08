import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.products$ = firestore.collection('products').valueChanges();
  }

  ngOnInit(): void {

  }
}
