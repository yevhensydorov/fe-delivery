import styled from "styled-components";
import { menu } from "../constants/menu";
import CardItem from "../components/CardItem";

export default function CardsSection() {
  const renderCards = menu.map((element) => (
    <CardItem
      id={element.id}
      image={element.image}
      title={element.title}
      description={element.description}
      price={element.price}
      key={element.id}
    />
  ));

  return <StyledCartStatus>{renderCards}</StyledCartStatus>;
}

const StyledCartStatus = styled.section`
  display: flex;
  justify-content: space-between;
`;
