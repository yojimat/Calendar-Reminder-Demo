import styled from 'styled-components';

export const CalendarDiv = styled.div`
    display: block;
    margin: 0 auto;
    margin-top: 1rem;
    max-width: 75%;
    background-color: white;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

export const Col = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
`;

export const ColCenter = styled(Col)`
    justify-content: center;
    text-align: center;
`;