import React from 'react';

import { Container, Name, Description, Footer, Lang, Link } from './styles'

const Repository = function() {
  return (
    <Container color='#2f7272'>
        <Name>Repository Name</Name>
        <Description>Description</Description>
        <Footer color='#f37272'>
            <Lang>Language</Lang>
            <Link href='https://lavarinimoreira.me' target='_blank'>See</Link>
        </Footer>
    </Container>
  )
}

export default Repository;
