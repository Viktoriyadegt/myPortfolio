import React from 'react';
import styled from "styled-components";
import {Logo} from "../components/logo/Logo";
import {Menu} from "../components/menu/Menu";

export const Header = () => {
    return (
        <SuperHeader>
            <Logo/>
            <Menu/>
        </SuperHeader>
    );
};

const SuperHeader = styled.header`
    display: flex;
    background-color: rgba(151, 237, 208, 0.78);
    justify-content: space-between;
`



