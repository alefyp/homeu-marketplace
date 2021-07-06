import { Component, OnInit } from '@angular/core';
import demoProducts from '../../../assets/productsData.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = demoProducts; 

  constructor() { }

  ngOnInit(): void {

  }

}
