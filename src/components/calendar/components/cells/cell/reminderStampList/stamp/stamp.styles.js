import styled from 'styled-components';

const middleValueInt = Math.round(parseInt("ff", 16) / 2) * 3;

const setColor = ({ backgroundColor }) => {
    const hex = backgroundColor.split("#")[1],
        redHex = hex.slice(0, 2),
        greenHex = hex.slice(2, 4),
        blueHex = hex.slice(4, 6),
        redInt = parseInt(redHex, 16),
        greenInt = parseInt(greenHex, 16),
        blueInt = parseInt(blueHex, 16),
        totalInt = blueInt + greenInt + redInt;

    if (totalInt >= middleValueInt)
        return "black";
    else
        return "white";
}

export const Stamp = styled.div`
    border-radius: 10px;
    font-size: ${({fullStamp }) => fullStamp ? "15px" : "10px" };
    text-align: center;
    background-color: ${({ backgroundColor }) => backgroundColor};
    width: 50%;
    color: ${setColor};
    z-index: 1;
    transition: all .2s ease-in-out; 


    :hover {
        transform: scale(1.1); 
    }
`;
