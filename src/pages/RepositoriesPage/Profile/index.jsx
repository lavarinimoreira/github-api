import React from 'react'

import { Container, Header, Avatar, Login, Name } from './styles';

const Profile = function() {
  return (
    <Container>
      <Header>
        <Avatar src='https://avatars.githubusercontent.com/u/89891764?s=400&u=56b285316f054caa9aafbbaf34aaa5b2fa498fc8&v=4' />
        <Login>lavarinimorira</Login>
        <Name>Gabriel Lavarini</Name>
      </Header>
    </Container>
  )
}

export default Profile;
