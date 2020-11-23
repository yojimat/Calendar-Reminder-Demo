import styled from 'styled-components';
import { Row } from "../../calendar.styles";

export const Body = styled.div`
    font-size: 0.8rem;
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