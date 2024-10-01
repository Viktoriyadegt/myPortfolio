import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const MyMenu = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header = () => {
    return (
        <SuperHeader>
            <Logo/>
            <Menu menu={MyMenu}/>
        </SuperHeader>
    );
};

const SuperHeader = styled.header`
    display: flex;
    background-color: rgba(151, 237, 208, 0.78);
    justify-content: space-between;
`



