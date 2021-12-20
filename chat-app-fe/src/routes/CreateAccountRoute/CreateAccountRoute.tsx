import { Button, Chip, Grid, TextField, TextFieldProps, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import UserDetailsLayout from '../../components/Layouts/UserDetailsLayout';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { createAccountThunk } from '../../app/Store/features/Forms/createAccountForm';
import { generateFormikArgs } from '../../utils/formikUtils';
interface FormState {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    confirmPassword: string,
}

const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    password: Yup.string().oneOf([Yup.ref('confirmPassword'), null], 'Passwords must match').required("Please enter a password"),
    confirmPassword: Yup.string().required("Please confirm your password"),
})

const CreateAccountRoute: React.FC = () => {
    const initialValues: FormState = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
    }

    const dispatch = useDispatch();

    const handleSubmit = (values: FormState) => {
        console.log('handling submit');
        dispatch(createAccountThunk({
            firstName: values.firstName,
            lastName: values.lastName,
            password: values.password,
            email: values.email,
        }));
    }

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema,
    })
    
    return (
        <UserDetailsLayout>
            <form 
            onSubmit={formik.handleSubmit}
            style={{
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
            }}>
                <Grid container
                    style={{
                        height: '100%'
                    }}
                    direction="column"
                    spacing={3}
                >
                    <Grid container xs={false} item>
                        <Typography>
                            Create Account
                        </Typography>
                    </Grid>
                    <Grid container item xs>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Email"
                                {...generateFormikArgs('email', formik)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="First Name"
                                {...generateFormikArgs('firstName', formik)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Last Name"
                                {...generateFormikArgs('lastName', formik)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Password"
                                {...generateFormikArgs('password', formik)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Confirm Password"
                                {...generateFormikArgs('confirmPassword', formik)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container xs={false} justifyContent="space-between">
                        <Grid item>
                            <Chip
                                component={Link}
                                label="Login"
                                to="/login"
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                color="primary"
                                variant="contained"
                                type="submit"
                                onClick={() => {
                                    console.log('clicked');
                                    console.log(formik.values);
                                }}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </UserDetailsLayout>
    );
};

export default CreateAccountRoute