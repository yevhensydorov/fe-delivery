/*
 * action types
 */

export const ADD_ITEM_TO_BASKET = "ADD_ITEM_TO_BASKET";

/*
 * action creators
 */

export function addToBasket(id) {
  return { type: ADD_ITEM_TO_BASKET, id };
}
