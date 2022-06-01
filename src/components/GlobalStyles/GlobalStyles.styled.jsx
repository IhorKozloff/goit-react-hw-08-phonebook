import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
    width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
   
`;
export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: #000;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    &.active {
        color: #FFF;
    }
`;