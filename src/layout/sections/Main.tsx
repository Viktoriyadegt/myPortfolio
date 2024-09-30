import React from 'react';
import styled from "styled-components";
import myPhotoo from '../../assets/images/photojpg.webp'
import {FlexWrapper} from "../../components/menu/FlexWtapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align='center' justify={'space-around'}>
                <StyledMain>
                    <span>Hi There</span>
                    <Text>I am Svetlana Dyablo</Text>
                    <MainText>A Web Developer. </MainText>
                </StyledMain>

                <Photo src={myPhotoo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #ecdec9;

`
const MainText = styled.h1`
`
const Text = styled.h2`
`
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
