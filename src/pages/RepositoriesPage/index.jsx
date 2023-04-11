import React, { useState } from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

import { getLangsFrom } from '../../services/api';

const RepositoriesPage = function() {
  const [currentLanguage, setCurrentLanguage] = useState();

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

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}  
        />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
