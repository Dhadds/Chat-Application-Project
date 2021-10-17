import styled from '@emotion/styled';
import React from 'react';

export const Stack = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    & > *:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const StackGrow = styled('div')`
    width: 100%;
    flex-grow: 1;
`;

export const StackGrowIgnore = styled('div')`
    width: 100%;
    flex-grow: 0;
`;