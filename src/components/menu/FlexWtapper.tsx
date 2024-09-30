import styled from "styled-components";


export type FlexWtapperPropsType = {
    direction?: string
    align?: string
    justify?: string
    wrap?: string
}


export const FlexWrapper = styled.div<FlexWtapperPropsType>`
    display: flex;
    flex-direction: ${props=>props.direction || 'row'}
    align-items: ${props=>props.align || 'stretch'};
    justify-content: ${props=>props.justify || 'flex-start'};
    flex-wrap : ${props=>props.wrap || 'nowrap'};
`