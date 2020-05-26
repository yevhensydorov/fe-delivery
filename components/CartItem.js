import styled from "styled-components";
import CartItemQuantitySelector from "./CartItemQuantitySelector";
import { removeFromBasket } from "../redux/actions";
import { connect } from "react-redux";

let CartItem = ({ title, description, price, quantity, id, dispatch }) => {
  return (
    <StyledCartItem>
      <p>{title}</p>
      <p>{description}</p>
      <CartItemQuantitySelector quantity={quantity} id={id} />
      <button onClick={(e) => dispatch(removeFromBasket(id))}>Delete</button>
      <p>Price per item: £{price}</p>
    </StyledCartItem>
  );
};

const StyledCartItem = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
`;

CartItem = connect()(CartItem);

export default CartItem;
