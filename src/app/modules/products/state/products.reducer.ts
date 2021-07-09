import { on, createReducer, createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "@shared/models/product";
import * as ProductsActions from './products.actions';

export interface ProductsState {
  products: Product[],
  shoppingList: Product[],
  error: string,
}

const initialState: ProductsState = {
  products: [],
  shoppingList: [],
  error: '',
}

const getProductsFeatureState = createFeatureSelector<ProductsState>('products');

export const getProducts = createSelector(getProductsFeatureState, state => state.products);

export const getShoppingList = createSelector(getProductsFeatureState, state => state.shoppingList);

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProductsSuccess, (state, action): ProductsState => {
    return {
      ...state,
      products: action.products,
      error: ''
    }
  }),
  on(ProductsActions.loadProductsFailure, (state, action): ProductsState => {
    return {
      ...state,
      products: [],
      error: action.error
    };
  }),
  on(ProductsActions.addProductToShoppingList, (state, action): ProductsState => {


    let currentShoppingList = [...state.shoppingList];
    let addedProduct = action.product;

    let existingItemIndex = currentShoppingList.findIndex(item => item.sku === addedProduct.sku);

    if (existingItemIndex > -1) {
      let existingItem = currentShoppingList[existingItemIndex];
      currentShoppingList.splice(existingItemIndex, 1);
      currentShoppingList.push({ ...existingItem, quantity: existingItem.quantity + 1 });
    } else {
      currentShoppingList = [...currentShoppingList, { ...addedProduct, quantity: 1 } as Product];
    }

    return {
      ...state,
      shoppingList: currentShoppingList
    }
  }),
);