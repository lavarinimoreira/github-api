import React, { useEffect, useState } from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main, Loading } from './styles';

import { getLangsFrom, getUser, getRepos } from '../../services/api';

const RepositoriesPage = function() {
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
        const [userResponse, repositoriesResponse] = await Promise.all([
          getUser('lavarinimoreira'),
          getRepos('lavarinimoreira')
        ]);

        setUser(userResponse.data);
        setRepositories(repositoriesResponse.data);
        setLanguages(getLangsFrom(repositoriesResponse.data))
        
        setLoading(false);
    };

    loadData();
  }, []);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if(loading) {
    return <Loading>Loading...</Loading>
  }

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
