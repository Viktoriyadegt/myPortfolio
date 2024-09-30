import React from 'react';
import Icon from "../../../../components/icon/Icon";
import styled from "styled-components";

export type SkillPropsType = {
    iconId: string
    title: string
    descriptions: string
}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <StyledSkillTitle>{props.title}</StyledSkillTitle>
            <StyledText>{props.descriptions}</StyledText>
        </StyledSkill>


    );
};
const StyledSkill = styled.div`
    width: 30%;
    background-color: rgba(222, 203, 251, 0.79);
    margin: 10px;
`

const StyledSkillTitle = styled.h3``

const StyledText = styled.p``

