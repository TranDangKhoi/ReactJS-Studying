import React from "react";
import { Container, StyledButton } from "./Cart.style";

const Cart = () => {
  return (
    <Container>
      <StyledButton className="rounded-lg">Hello World</StyledButton>
    </Container>
  );
};

export function Button({ className, children }) {
  return <button className={`${className} button`}>{children}</button>;
}

export default Cart;
