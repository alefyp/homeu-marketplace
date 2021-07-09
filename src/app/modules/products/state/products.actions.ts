import { createAction, props } from "@ngrx/store";
import { Product } from "@shared/models/product";


/* Load products from Firestore */

export const loadProducts = createAction(
  '[Products] Load products'
);

export const loadProductsSuccess = createAction(
  '[Products] Load products success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load products error',
  props<{ error: string }>()
);

/* Shopping list actions */

export const addProductToShoppingList = createAction(
  '[Products] Add product to shopping list',
  props<{ product: Product }>()
);

export const removeProductFromShoppingList = createAction(
  '[Products] Add product to shopping list',
  props<{ product: Product }>()
);