import {createReducer, createAsyncThunk, combineReducers} from '@reduxjs/toolkit';
import API_CONFIG from '../../../../config/APICONFIG';
import { setBackdropState, setToastState } from '../Feedback/FeedbackState';

interface LoginDTO {
    email: string,
    password: string,
}

export const loginThunk = createAsyncThunk(
    'login/userthunk',
    async (args: LoginDTO, {dispatch, rejectWithValue}) => {
        try {
            dispatch(setBackdropState(true));
            const response = await fetch(`${API_CONFIG.AUTH_CONFIG_ROUTE}/login`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(args),
            })

            if (!response.ok) {
                throw new Error();
            }
            dispatch(setToastState({
                message: 'Welcome!',
                open: true,
            }))
        } catch (error) {
            dispatch(setToastState({
                open: true,
                message: 'Error logging in',
            }))
        } finally {
            dispatch(setBackdropState(false));
        }
    }
)

const handleLoginReducer = createReducer({},
        (builder) => {
            builder.addCase(loginThunk.fulfilled, () => {

            });
            builder.addCase(loginThunk.pending, () => {

            });
            builder.addCase(loginThunk.rejected, () => {

            });
        }
)

const reducer = combineReducers({
    handleLoginReducer,
})

export default reducer;