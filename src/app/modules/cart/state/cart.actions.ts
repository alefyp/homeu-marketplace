
import { createAction, props } from "@ngrx/store";
import { Product } from "@shared/models/product";

/* Post shopping list order */

export const sendOrder = createAction(
  '[Cart] Send order',
  props<{ products: Product[] }>()
);

export const sendOrderSuccess = createAction(
  '[Cart] Send order success',
  props<{ message: any }>()
);

export const sendOrderFailure = createAction(
  '[Cart] Send order failure',
  props<{ error: any }>()
);