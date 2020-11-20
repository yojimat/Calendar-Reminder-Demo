import styled from 'styled-components';

export const Footer = styled.footer`
    display: block;
    padding-bottom: 2rem;
    padding-top: 1rem;
    text-align: center;

    @media screen and (min-width: 30em){
        padding-left: 4rem;
        padding-right: 4rem;
    }
`;

export const A = styled.a`
    display: inline-block;
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
    color: var(--color-lightBlue);
    background-color: initial;
    text-decoration: none;
    transition: color .15s ease-in;
    
    :hover, :focus-visible {
        color: black;
    }
`;
