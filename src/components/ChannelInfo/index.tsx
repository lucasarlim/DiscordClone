import React from 'react';

import { HashtagIcon, Title, Separator, Description, Container } from "./styles"

const ChaanelInfo: React.FC = () => {
  return (
    <Container>

      <HashtagIcon />
      
      <Title>chat-livre</Title>

      <Separator />

      <Description>Canal aberto para conversas</Description>
      
    </Container>      
  )
}

export default ChaanelInfo