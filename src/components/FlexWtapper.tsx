import styled from "styled-components";


export type FlexWrapperPropsType = {
    direction?: string
    align?: string
    justify?: string
    wrap?: string
}


export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    align-items: ${props=>props.align || 'stretch'};
    flex-direction: ${props=>props.direction || 'row'};
    justify-content: ${props=>props.justify || 'flex-start'};
    flex-wrap : ${props=>props.wrap || 'nowrap'};
`