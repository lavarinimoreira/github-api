import React from 'react'

import { Container, Selector, Cleaner } from './styles'

const Filter = function() {
  const langs = [
    {name: 'JavaScript', count: 5, color: '#f1c40f'},
    {name: 'ShellScript', count: 2, color: '#0f5'},
    {name: 'GLSL', count: 1, color: '#05f'},
  ];

  const selectors = langs.map(({name, count, color}) => (
    <Selector
      key={name.toLowerCase()}
      color={color}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner>
        Clean
      </Cleaner>
    </Container>
  )
}

export default Filter;