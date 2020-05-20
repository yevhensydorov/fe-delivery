import styled from "styled-components";
import { connect } from "react-redux";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function CartStatus(props) {
  return (
    <StyledCartStatus>
      <ShoppingBasketIcon fontSize="small" />
      <p>{props.totalCart} item</p>
    </StyledCartStatus>
  );
}

const StyledCartStatus = styled.div`
  display: flex;
  align-items: center;
`;

const mapStateToProps = (state) => {
  return {
    totalCart: state.cart.total,
  };
};

export default connect(mapStateToProps)(CartStatus);
