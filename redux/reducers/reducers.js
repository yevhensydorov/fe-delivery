import { ADD_ITEM_TO_BASKET } from "../actions";

import { menu } from "../../constants/menu";

const cartInitState = {
  addedItems: [],
  total: 0,
};

export function cartReducer(state = cartInitState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_BASKET:
      let itemToAdd = menu.find((el) => el.id === action.id);

      let newState = Object.assign({}, state, {
        addedItems: [...state.addedItems, itemToAdd],
        total: (state.total += 1),
      });

      return newState;
    default:
      return state;
  }
}
