import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface InitialState {
    rawToken: string;
    username: string;
    firstName: string;
    lastName: string;
}

const initialState: InitialState = {
    rawToken: '',
    username: '',
    firstName: '',
    lastName: '',
}

const authState = createSlice(
    {
        name: 'user-auth-state',
        initialState,
        reducers: {
            setRawToken: (state, payload: PayloadAction<string>) => {
                state.rawToken = payload.payload;
            }
        }
    }
)

export const {
    setRawToken,
} = authState.actions;

export default authState.reducer;