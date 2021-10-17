import styled from '@emotion/styled';
import { Card } from '@material-ui/core';
import React from 'react';

const StyledUserDetailsWrapper = styled('div')`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContainerWrapper = styled(Card)`
    padding: 20px;
    max-width: 100%;
    max-height: 100%;
    height: 500px;
    width: 300px;

`

const UserDetailsLayout: React.FC = ({children}) => {
    return (
        <StyledUserDetailsWrapper>
            <ContainerWrapper elevation={5}>
                {children}
            </ContainerWrapper>
        </StyledUserDetailsWrapper>
    )
}

export default UserDetailsLayout;