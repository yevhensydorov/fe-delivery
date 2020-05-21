import styled from "styled-components";
import { connect } from "react-redux";
import Link from "next/link";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function CartStatus(props) {
  return (
    <StyledCartStatus>
      <Link href="/cart" passHref>
        <a>
          <p>
            <ShoppingBasketIcon fontSize="small" /> {props.totalCartQuantity}{" "}
            item
          </p>
        </a>
      </Link>
    </StyledCartStatus>
  );
}

const StyledCartStatus = styled.div`
  display: flex;
  align-items: center;
`;

const mapStateToProps = (state) => ({
  totalCartQuantity: state.cart.totalQuantity,
});

export default connect(mapStateToProps)(CartStatus);
