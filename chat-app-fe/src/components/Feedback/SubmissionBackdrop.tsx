import { Backdrop, CircularProgress } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/Store/store';

const SubmissionBackdrop: React.FC = () => {

    const open = useSelector((state: RootState) => state.feedbackReducer.submissionBackdrop)

    return (
        <Backdrop open={open}>
            <CircularProgress />
        </Backdrop>
    )

}

export default SubmissionBackdrop;