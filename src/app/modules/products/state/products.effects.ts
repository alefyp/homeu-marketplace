import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { Product } from '@shared/models/product';

/* ngrx */
import { AngularFirestore } from '@angular/fire/firestore';
import * as ProductsActions from './products.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private firestore: AngularFirestore) { }

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      mergeMap(() =>
        (
          this.firestore.collection('products').valueChanges() as Observable<
            Product[]
          >
        ).pipe(
          map((products: Product[]) => {
            return ProductsActions.loadProductsSuccess({ products });
          }),
          catchError((error) => {
            return of(ProductsActions.loadProductsFailure({ error }));
          })
        )
      )
    );
  });
}
