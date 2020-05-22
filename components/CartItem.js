import styled from "styled-components";
import CartItemQuantitySelector from "./CartItemQuantitySelector";

const CartItem = ({ title, description, price, quantity, id }) => {
  return (
    <StyledCartItem>
      <p>{title}</p>
      <p>{description}</p>
      <CartItemQuantitySelector quantity={quantity} id={id} />
      <button>Delete</button>
      <p>£{price}</p>
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

export default CartItem;
