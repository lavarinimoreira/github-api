import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

export const Container = styled.main`
    display: flex;
    min-height: 100vh;
    color: ${(props) => props.theme.colors.text};

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
        flex-direction: column;
    }
`;

export const Sidebar = styled.aside`
    background: ${(props) => props.theme.colors.background};
    min-width: 20rem;
    max-height: 100%;
    overflow-y: hidden;
`;

export const Button = styled(Link)`
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.container};
    border: none;
    padding: 0.8rem 2rem;
    margin: 0 0 0 1em;
    border-radius: 0 32px 0 32px;
    text-decoration: none;
    font-size: ${(props) => props.theme.fontSizes.small};

    &:hover {
        cursor: pointer;
        color: rgba(255, 255, 255, 0.5)
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
        text-align: center;
        padding: 0 1rem;
    }
`;

export const Main = styled.section`
    background: ${(props) => props.theme.colors.container};
    width: 100%;
    height: 100%;
    padding: 40px;
    overflow-y: hidden;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
        height: 100%;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}){
        padding: 40px 20px;
    }
`;
