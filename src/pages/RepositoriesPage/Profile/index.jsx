import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

const Profile = function() {
  return (
    <Container>
      <Header>
        <Avatar src='https://avatars.githubusercontent.com/u/89891764?s=400&u=56b285316f054caa9aafbbaf34aaa5b2fa498fc8&v=4' />
        <Login>lavarinimorira</Login>
        <Name>Gabriel Lavarini</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          30 <span>followers</span> 10 <span>following</span>
        </Data>
        <Data>
          <MdWork size={20}/>
          Software eng
        </Data>
        <Data>
          <MdLocationCity size={20}/>Brazil
        </Data>
        <Data>
          <MdLink size={20} />
          <a href='https://lavarinimoreira.me'>site</a>
        </Data>
      </Inner>
    </Container>
  )
}

export default Profile;
