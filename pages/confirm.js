import Link from "next/link";
import { connect } from "react-redux";
import Layout from "../components/Layout";

const Confirm = ({ totalPrice }) => {
  return (
    <Layout>
      {totalPrice ? (
        <p>
          Your order for ${totalPrice} has been received and will arrive in 30
          mins
        </p>
      ) : (
        <p>There is no items in the basket</p>
      )}

      <Link href="/" passHref>
        <button>Back to the menu</button>
      </Link>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    totalPrice: state.cart.totalPrice,
  };
};

export default connect(mapStateToProps)(Confirm);
