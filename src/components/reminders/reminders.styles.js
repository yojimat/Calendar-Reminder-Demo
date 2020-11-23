import styled from 'styled-components';

export const Panel = styled.div`
    border-radius: 5px;
    box-shadow: 0px 12px 12px 11px rgba(47,116,181,0.17);
    margin: 0 auto;
    margin-top: .5rem;
    margin-bottom: .5rem;
    @media (min-width: 1000px) {
        max-width: 40%;
        max-height: 90%
    }

    padding: .5rem;
    font-size: 16px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;
    border: 2px solid var(--color-lightGray);
    background-color: #fff;
    min-height: 20%;

    h1 {
        font-size: 1.5em;
        font-weight: 300;
    }

    button {
        margin-top: 1em;
    }
    
    .textDescription {
        overflow-wrap: break-word;
        font-weight: 400;
    }

    .borderItemReminder {
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-image: linear-gradient(45deg, #1a8fff 0%,#53cbf1 40%);
        border-image-slice: 1;
        cursor: pointer;
        transition: 0.25s ease-out;

        :hover {
            background-color: var(--cell-hover-color);
            transition: 0.5s ease-out;
        }
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

    #gridListReminder {       
        height: 75vh;
        padding: 1em;
    }
`;
