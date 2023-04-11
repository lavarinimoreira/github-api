import React from 'react';

import { Container, Sidebar, Main } from './styles';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { getLangsFrom } from '../../services/api';

function RepositoriesPage() {
  const user = {
    login: 'lavarinimoreira',
    name: 'Gabriel Lavarini Moreira',
    avatar_url: 'https://avatars.githubusercontent.com/u/89891764?s=400&u=843c1548b562d9f28fd9c365b9232ea29c8a6752&v=4',
    followers: 0,
    following: 0,
    company: null,
    blog: 'https://lavarinimoreira.me',
    location: 'Brazil',
  }

  const repositories = [
    {
      id: '1',
      name: 'Repo 1',
      description: 'Description',
      html_url: 'https://lavarinimoreira.me',
      language: 'JavaScript',
    },
    {
      id: '2',
      name: 'Repo 2',
      description: 'Description',
      html_url: 'https://lavarinimoreira.me',
      language: 'TypeScript',
    },
  ];

  const languages = getLangsFrom(repositories)

  return (
    <Container>
      <Sidebar>
       <Profile user={user} />
       <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories}/>
      </Main>
    </Container>
  )
};

export default RepositoriesPage;