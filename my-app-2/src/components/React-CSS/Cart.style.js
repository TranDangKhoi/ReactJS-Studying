import styled from "styled-components";
import { Button } from "./Cart";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  color: white;
  padding: 12px;
  background: black;
`;
