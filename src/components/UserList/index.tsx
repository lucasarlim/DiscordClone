import React from 'react';

import { Container, Role, User, Avatar } from "./styles"

export interface Props{
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<Props> = ({
  nickname,
  isBot,
}) => {
  return(
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
}


const UserList: React.FC = () => {
  return(
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Lucas Lima" />
      <UserRow nickname="Carlos Fernandes" />
      <UserRow nickname="Diego Fernandes" />

      <Role>Bots - 2</Role>
      <UserRow nickname="Rythm" isBot />
      <UserRow nickname="BCOIN" isBot />

      <Role>Offline - 15</Role>
      <UserRow nickname="Aleatório" />
      <UserRow nickname="Aleatório" />
      <UserRow nickname="Aleatório" />
      <UserRow nickname="Aleatório" />
      <UserRow nickname="Aleatório" />
      <UserRow nickname="Aleatório" />
      <UserRow nickname="Aleatório" />
      <UserRow nickname="Aleatório" />
      <UserRow nickname="Aleatório" />
      <UserRow nickname="Aleatório" />
      <UserRow nickname="Aleatório" />
      <UserRow nickname="Aleatório" />
      <UserRow nickname="Aleatório" />
      <UserRow nickname="Aleatório" />
      <UserRow nickname="Aleatório" />
    </Container>
  )
}

export default UserList