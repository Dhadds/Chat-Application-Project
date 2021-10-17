import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface InitialState {
    toastState: {
        message: string,
        open: boolean,
    },
    submissionBackdrop: boolean,
}

const initialState: InitialState = {
    toastState: {
        message: '',
        open: false,
    },
    submissionBackdrop: false,
}

const FeedBackSlice = createSlice({
    name: 'feedback-state',
    initialState,
    reducers: {
        setToastState: (state, payload: PayloadAction<{message: string, open: boolean}>) => {
            state.toastState = payload.payload;
        },
        setBackdropState: (state, payload: PayloadAction<boolean>) => {
            state.submissionBackdrop = payload.payload;
        }
    }
})

export const {
    setToastState,
    setBackdropState,
} = FeedBackSlice.actions;


export default FeedBackSlice.reducer;