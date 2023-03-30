import React from "react";
import { MdSearch } from "react-icons/md";

import { Container, Logo, Title, Form, Input, Button } from "./styles";

import githubLogo from "../../assets/images/github-logo.svg";

export default function Main() {
  return (
    <Container>
      <Logo src={githubLogo} alt="Github Logo" />
      <Title>Github API</Title>
      <Form>
        <Input placeholder="user" />
        <Button>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}
