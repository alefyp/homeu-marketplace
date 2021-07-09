import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as ProductsState from '../../app/modules/products/state/products.reducer';

/* Avoiding break lazy loading */

export interface State extends ProductsState.ProductsState { }

const getProductsFeatureState = createFeatureSelector<State>('products');

export const getShoppingList = createSelector(getProductsFeatureState, state => state.shoppingList);

