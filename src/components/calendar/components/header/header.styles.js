import styled from 'styled-components';
import { Row, Col } from "../../calendar.styles";

export const Header = styled(Row)`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 115%;
    padding: 0.9rem 0;
    color: #656464;
    border-top: 1px solid var(--border-color);
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    align-items: center;
`;

export const ColStart = styled(Col)`
    justify-content: flex-start;
    text-align: left;
`;

export const ColEnd = styled(Col)`
    justify-content: flex-end;
    text-align: right;
`;

export const Icon = styled.div`
    font-family: 'Material Icons', serif;
    font-style: normal;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    text-rendering: optimizeLegibility;
    font-feature-settings: 'liga';

    //IconHeader    
    transition: .15s ease-out;
    cursor: pointer;

    :hover {
        transform: scale(1.75);
        transition: .25s ease-out;
        color: var(--color-lightBlue);
    }

    :first-of-type {
        margin-left: 1rem;
    }

    :last-of-type {
        margin-right: 1rem;
    }
`;