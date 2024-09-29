import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href=""></a>Home</li>
                <li><a href=""></a>Skills</li>
                <li><a href=""></a>Works</li>
                <li><a href=""></a>Testimony</li>
                <li><a href=""></a>Contact</li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul{
        display: flex;
        gap: 30px;
    }

`

