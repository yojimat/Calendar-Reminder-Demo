import styled from 'styled-components';

export const Panel = styled.div`
    border-radius: 2px;
    box-shadow: 0px 12px 12px 11px rgba(47,116,181,0.17);
    margin: 0 auto;
    margin-top: .5rem;
    margin-bottom: .5rem;
    @media (min-width: 1000px) {
        max-width: 40%;
    }

    padding: .5rem;
    font-size: 16px;
    text-align: center;
    display: 'flex';
    flex-direction: 'column';
    align-items: 'center';
    flex-grow: 1;

    h1 {
        font-size: 1.5em;
        font-weight: 300;
    }

    button {
        margin-top: 1em;
    }
    
    #time {
        margin-top: .3em;
    }

    #boxColorPicker {
        padding-top: 1.5em;
    }

    #labelColorPickr {
        opacity: 0.54;
    }
`;
