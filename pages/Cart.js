import styled from "styled-components";
import { connect } from "react-redux";
import Layout from "../components/Layout";

const Cart = (props) => {
  return (
    <Layout>
      <div>
        <p>Title</p>
        <p>Description</p>
        <button>-</button>
        <span>33</span>
        <button>+</button>
        <button>Delete</button>
        <p>$300</p>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
