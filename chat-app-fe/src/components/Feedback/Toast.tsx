import { Snackbar } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToastState } from '../../app/Store/features/Feedback/FeedbackState';
import { RootState } from '../../app/Store/store';

const Toast = () => {
    
    const dispatch = useDispatch();
    const {
        open,
        message,
    } = useSelector((state: RootState) => state.feedbackReducer.toastState)

    return (
        <Snackbar 
            open={open}
            message={message}
            autoHideDuration={3000}
            onClose={() => {
                dispatch(setToastState({
                    open: false,
                    message,
                }))
            }}
        />
    )
}

export default Toast;