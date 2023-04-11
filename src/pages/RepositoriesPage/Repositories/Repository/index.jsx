import React from 'react';
import PropTypes from 'prop-types';

import { Container, Name, Description, Footer, Lang, Link } from './styles'

const Repository = function({ repository }) {
  return (
    <Container color='#2f7272'>
        <Name>{repository.name}</Name>
        <Description>{repository.description}</Description>
        <Footer color='#f37272'>
            <Lang>{repository.language}</Lang>
            <Link href={repository.html_url} target='_blank' rel='noreferrer'>See</Link>
        </Footer>
    </Container>
  )
}

Repository.propType = {
  repository: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired
}

export default Repository;
