/*
 * action types
 */

export const ADD_ITEM_TO_BASKET = "ADD_ITEM_TO_BASKET";
export const REMOVE_ITEM_FROM_BASKET = "REMOVE_ITEM_FROM_BASKET";

/*
 * action creators
 */

export function addToBasket(id) {
  return { type: ADD_ITEM_TO_BASKET, id };
}

export function removeFromBasket(id) {
  return { type: REMOVE_ITEM_FROM_BASKET, id };
}
