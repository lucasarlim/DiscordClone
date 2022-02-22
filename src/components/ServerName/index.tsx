import React from 'react';

import { Container, Title, ExpandIcon } from "./styles"

interface Props{
  label: string;
  description: string;
}

const ServerName: React.FC = () => {
  return(
    <Container>
      <Title>Server Name</Title>
      <ExpandIcon />
    </Container>
  )
}

export default ServerName