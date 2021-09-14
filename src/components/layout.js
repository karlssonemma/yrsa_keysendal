import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import theme from '../utils/theme';

const List = styled.ul`
    list-style: none;
`;

const StyledLink = styled(Link)`
    width: 80px;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: orange;
    color: white;
    border: 1px solid orange;
    border-radius: 50%;
    cursor: pointer;
    font-family: 'Times New Roman', Times, serif;
    text-decoration: none;

    &:hover {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
`

const Layout = ({ children }) => {

    return(
        <div>
            <Navigation>
                <List>
                    <li>
                        <StyledLink to='/yrsa'>Yrsa</StyledLink>
                    </li>
                    <li>
                        <StyledLink to='/tjanster'>Tjänster</StyledLink>
                    </li>
                    <li>
                        <StyledLink to='/texter'>Texter</StyledLink>
                    </li>
                    <li>
                        <StyledLink to='/boken'>Boken</StyledLink>
                    </li>
                </List>
            </Navigation>
        </div>
    )
}

export default Layout;