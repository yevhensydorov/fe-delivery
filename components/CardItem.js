import styled from "styled-components";
import { connect } from "react-redux";
import { addToBasket } from "../redux/actions";

let CardItem = ({ title, image, description, price, id, dispatch }) => (
  <StyledCardItem>
    <h3>{title}</h3>
    <img src={image} alt={description} />
    <p>{description}</p>
    <p>£{price}</p>
    <button onClick={(e) => dispatch(addToBasket(id))}>Add to Basket</button>
  </StyledCardItem>
);

const StyledCardItem = styled.div`
  border: 1px solid black;
  text-align: center;
`;

CardItem = connect()(CardItem);

export default CardItem;
