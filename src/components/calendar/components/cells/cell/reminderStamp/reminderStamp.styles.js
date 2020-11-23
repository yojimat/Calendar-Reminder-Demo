import styled from 'styled-components';

const middleValueHex = Math.round(parseInt("ffffff", 16)/2);

export const Reminder = styled.div`
    border-radius: 10px;
    font-size: 10px;
    text-align: center;
    color: ${({color}) => {
        if(parseInt(color.split("#")[1], 16) >= middleValueHex)
            return "black";
        else
            return "white";
    }};
    background-color: ${props => props.color};
    width: 50%;
`;