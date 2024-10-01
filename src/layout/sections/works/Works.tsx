import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWtapper";
import {Menu} from "../../../components/menu/Menu";
import {Work} from "./work/Work";
import work1 from '../../../assets/images/progimg.webp'
import work2 from '../../../assets/images/progimg2.webp'

const MyWorks = ['All', 'landing page', 'react', 'SPA']

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menu={MyWorks}/>
            <FlexWrapper justify={'space-around'}>
                <Work src={work1} title={'Social Network'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                <Work src={work2} title={'Timer'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    background-color: #87d6f1;
    min-height: 100vh;

`