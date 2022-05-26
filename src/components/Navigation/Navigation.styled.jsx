import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const LinksList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: end;
`;
export const LinksListItem = styled.li`
    margin-left: 15px;
`;
export const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-weight: bolder;
    &.active {
        color: #FFF;
    }
`;

