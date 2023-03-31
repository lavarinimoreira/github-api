import React, { useState } from "react";

import { MdSearch } from "react-icons/md";

import { Container, Logo, Title, Form, Input, Button } from "./styles";

import githubLogo from "../../assets/images/github-logo.svg";

const Main = function () {
  const [login, setLogin] = useState("");

  return (
    <Container>
      <Logo src={githubLogo} alt="Github Logo" />
      <Title>Github API</Title>
      <Form>
        <Input
          placeholder="user"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
};

export default Main;
