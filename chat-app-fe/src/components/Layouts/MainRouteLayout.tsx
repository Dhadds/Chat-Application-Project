import styled from '@emotion/styled';
import React from 'react'

const StyledMainRouteLayout = styled('div')`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
`;

const MainRouteLayout: React.FC = ({children}) => {
    return (
        <StyledMainRouteLayout>
            {children}
        </StyledMainRouteLayout>
    )
}

export default MainRouteLayout;