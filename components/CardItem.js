import styled from "styled-components";
import { connect } from "react-redux";
import { addToBasket } from "../redux/actions";

let CardItem = (props) => (
  <StyledCardItem>
    <h3>{props.title}</h3>
    <img src={props.image} alt={props.description} />
    <p>{props.description}</p>
    <p>£{props.price}</p>
    <button onClick={(e) => props.dispatch(addToBasket(props.id))}>
      Add to Basket
    </button>
  </StyledCardItem>
);

const StyledCardItem = styled.div`
  border: 1px solid black;
  text-align: center;
`;

CardItem = connect()(CardItem);

export default CardItem;
