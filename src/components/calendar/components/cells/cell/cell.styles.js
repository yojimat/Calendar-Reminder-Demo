import styled from 'styled-components';
import { Col } from "../../../calendar.styles";

const setColors = (status) => {
    let statusColor = "";
    switch (status) {
        case "disabled":
            statusColor = "var(--color-lightGray)";
            break;
        case "selected":
            statusColor = "var(--color-cyanBlue)";
            break;
        default:
            statusColor = "initial";
            break;
    }

    return statusColor;
};

export const CellCol = styled(Col).attrs(props => ({
    statusColor: setColors(props.status),
}))`
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

    color: ${props => props.statusColor};
    background-color: ${props => props.status === "disabled"
        ? "var(--color-lightWhiteBlue)" : "initial"};
    pointer-events: ${props => props.status === "disabled"
        ? "none" : "initial"};

    border-left: ${props => props.status === "selected" ? "10px solid transparent" : "initial"};
    border-image: ${props => props.status === "selected"
        ? "linear-gradient(45deg, #1a8fff 0%,#53cbf1 40%)" : "initial"};
    border-image-slice: ${props => props.status === "selected" ? 1 : "initial"};
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
    font-size: 7em;
    position: absolute;
    top: -.15em;
    right: -.05em;
    letter-spacing: -.07em;

    :hover {
        opacity: 0.1;
        transition: .5s ease-in;
    }

    opacity: ${props => props.selected ? 0.1 : 0};
    transition: ${props => props.selected ? ".5s ease-in" : ".25s ease-out"};
`;