import React from 'react';
import styled from "styled-components";
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWtapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'} >
                <Name>Svetlana</Name>
                <StyledList>
                    <StyledItems>
                        < StyledLink>
                            <Icon iconId={'instagram'} height={'21px'} width={'21px'} viewBox={'0 0 21 21'}/>
                        </StyledLink>
                    </StyledItems>
                    <StyledItems>
                        < StyledLink>
                            <Icon iconId={'telegram'} height={'21px'} width={'21px'} viewBox={'0 0 21 21'}/>
                        </StyledLink>
                    </StyledItems>
                    <StyledItems>
                        < StyledLink>
                            <Icon iconId={'vk'} height={'21px'} width={'21px'} viewBox={'0 0 21 21'}/>
                        </StyledLink>
                    </StyledItems>
                    <StyledItems>
                        < StyledLink>
                            <Icon iconId={'in'} height={'21px'} width={'21px'} viewBox={'0 0 21 21'}/>
                        </StyledLink>
                    </StyledItems>
                </StyledList>

            <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #ffd18e;
    min-height: 30vh;
`
const Name = styled.span`

`
const StyledList = styled.ul`
    display: flex;
    gap: 10px;
`
const StyledItems = styled.li`
 

`
const StyledLink = styled.a`

`

const Copyright = styled.small`

`
