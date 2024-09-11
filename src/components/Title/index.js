import React from "react";

import { Container, H1 } from "./styles";

function Title({ children }) {
  return (
    <Container>
      <H1>{children}</H1>
    </Container>
  );
}

export default Title;
