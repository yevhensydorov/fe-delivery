import { connect } from "react-redux";
import { removeFromBasket, addToBasket } from "../redux/actions";

let CartItemQuantitySelector = ({ quantity, dispatch, id }) => (
  <div>
    <button onClick={(e) => dispatch(removeFromBasket(id))}>-</button>
    <span>{quantity}</span>
    <button onClick={(e) => dispatch(addToBasket(id))}>+</button>
  </div>
);

CartItemQuantitySelector = connect()(CartItemQuantitySelector);

export default CartItemQuantitySelector;
