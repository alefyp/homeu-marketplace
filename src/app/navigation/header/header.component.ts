import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Product } from '@shared/models/product';
import { State } from 'app/state/app.state';
import { Observable } from 'rxjs';

import * as AppState from '../../state/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentOrder$: Observable<Product[]> | undefined;
  itemCount = 0;

  openCheckout() {
    this.router.navigate(['/cart']);
  }

  constructor(public auth: AngularFireAuth, private store: Store<State>, private router: Router,) { }

  ngOnInit(): void {
    this.currentOrder$ = this.store.select(AppState.getShoppingList);

    this.currentOrder$.subscribe((res: Product[]) => {
      if (res != null) {
        let count = 0;
        this.itemCount = res.reduce((prev, curr) => prev + curr.quantity, 0);
      }
    });
  }

  logout() {
    this.auth.signOut();
  }
}
