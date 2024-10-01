import React from 'react';
import styled from "styled-components";


type MenuPropsType = {
    menu: Array<string>
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.menu.map((el, index) => {
                    return <li key={index}>
                        <a href="">{el}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

`

