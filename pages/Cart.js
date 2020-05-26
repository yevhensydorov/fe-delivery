import styled from "styled-components";
import Link from "next/link";
import { connect } from "react-redux";
import Layout from "../components/Layout";
import CartItem from "../components/CartItem";

const Cart = ({ cart }) => {
  const { addedItems, totalPrice, totalQuantity } = cart;

  const renderCartItems = (addedItems) => {
    if (addedItems.length === 0 || !addedItems) {
      return <p>There is no items added to the Cart</p>;
    } else {
      return addedItems.map((el) => {
        return (
          <CartItem
            title={el.title}
            description={el.description}
            price={el.price}
            quantity={el.quantity}
            key={el.id}
            id={el.id}
          />
        );
      });
    }
  };

  return (
    <Layout>
      <StyledCartItemsWrapper>
        {renderCartItems(addedItems)}
      </StyledCartItemsWrapper>
      <p>Total: £{totalPrice}</p>
      <Link href="/confirm" passHref>
        <button>Order now</button>
      </Link>
      <Link href="/" passHref>
        <button>Back to the menu</button>
      </Link>
    </Layout>
  );
};

const StyledCartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
