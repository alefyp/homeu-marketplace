import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '@shared/models/product';
import * as ProductsState from '../../products/state/products.reducer';

export interface CartState extends ProductsState.ProductsState { }

export interface CheckoutState {
  order: Product[],
  message: '',
  error: ''
}

const initialState: CheckoutState = {
  order: [],
  message: '',
  error: '',
}

const getProductsFeatureState = createFeatureSelector<CartState>('products');
export const getShoppingList = createSelector(getProductsFeatureState, state => state.shoppingList);