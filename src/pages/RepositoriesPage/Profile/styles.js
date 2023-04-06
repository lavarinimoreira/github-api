import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 70%;
  margin-bottom: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

export const Login = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.title};
  margin: 0;
`;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.subtitle};
  font-weight: normal;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Inner = styled.div`
  padding: 1rem 0;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
  }

  span {
    color: ${(props) => props.theme.colors.gray600};
    margin: 0 4px 0 4px;
  }
  
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Data = styled.p`
  display: flex;
  align-items: center;
  margin: 0 0 6px 0;
  font-size: ${(props) => props.theme.fontSizes.small};
  
  svg {
    margin-right: 10px;
    color: ${(props) => props.theme.colors.gray600};
  }
`;