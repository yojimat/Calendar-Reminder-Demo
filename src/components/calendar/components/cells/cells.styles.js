import styled from 'styled-components';
import { Row, Col } from "../../calendar.styles";

export const Body = styled.div`
    font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    position: relative;
    border-bottom: 1px solid var(--border-color);
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
`;

export const CellRow = styled(Row)`
    border-bottom: 1px solid var(--border-color);

    :last-child {
        border-bottom: none;
    }
`;

export const CellCol = styled(Col)`
    flex-grow: 0;
    flex-basis: calc(100%/7);
    width: calc(100%/7);
    
    position: relative;
    height: 5rem;
    border-right: 1px solid var(--border-color);
    overflow: hidden;
    cursor: pointer;
    transition: 0.25s ease-out;

    :hover {
        background-color: var(--cell-hover-color);
        transition: 0.5s ease-out;
    }

    :last-child {
        border-right: none;
    }
`;

export const Number = styled.span`
    position: absolute;
    font-size: 72.5%;
    line-height: 1;
    top: .75em;
    left: .75em;
    font-weight: 700;
`;

export const Bg = styled.span`
    font-weight: 700;
    line-height: 1;
    opacity: 0;
    font-size: 8em;
    position: absolute;
    top: -.2em;
    right: -.05em;
    transition: .25s ease-out;
    letter-spacing: -.07em;

    :hover {
        opacity: 0.1;
        transition: .5s ease-in;
    }
`;