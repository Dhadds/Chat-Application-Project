import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import API_CONFIG from '../../../../config/APICONFIG';
import { setBackdropState, setToastState } from '../Feedback/FeedbackState';

// dto = data transfer object
interface CreateUserDTO {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
}

interface InitialState {
    accountCreated: boolean,
}

const initialState = {
    accountCreated: false
};

export const createAccountThunk = createAsyncThunk(
    'create-account-thunk',
    async (args: CreateUserDTO, { rejectWithValue, dispatch }) => {
        try {
            dispatch(setBackdropState(true));
            const response = await fetch(
                `${API_CONFIG.USER_CONFIG_ROUTE}/create`,
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(args),
                }
            );
            if (!response.ok) {
                throw new Error();
            }
            dispatch(setToastState({
                open: true,
                message: 'Account Created, Please login',
            }))
            return;
        } catch (error) {
            dispatch(setToastState({
                open: true,
                message: 'Error creating account',
            }))
            rejectWithValue('Error Create Account');
        } finally {
            dispatch(setBackdropState(false));
        }
    }
);

const createAccountFormSlice = createSlice({
    name: 'create-account-form-state',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createAccountThunk.pending, () => {
            console.log()
        });
        builder.addCase(createAccountThunk.rejected, (state, {meta, payload}) => {
            console.log()
        });
        builder.addCase(createAccountThunk.fulfilled, () => {
            console.log()
        })
    },
})

export default createAccountFormSlice.reducer;