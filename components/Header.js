import styled from "styled-components";

import Logo from "./Logo";
import CartStatus from "./CartStatus.js";

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <CartStatus />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 48px;
  align-items: center;
  background-color: palegreen;
`;
