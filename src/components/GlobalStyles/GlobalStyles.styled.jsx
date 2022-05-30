import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
    width: 768px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: tomato;
`;
export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #000;
    font-weight: bolder;
    &.active {
        color: #FFF;
    }
`;