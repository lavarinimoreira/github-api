import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
    margin: 2rem 0 0 0;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}){
        grid-template-columns: auto;
    }
`;