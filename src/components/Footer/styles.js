import styled from "styled-components";

export const FooterContainer = styled.footer`
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
`;

export const Content = styled.p`
    font-size: ${(props) => props.theme.fontSizes.normal};
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
`;