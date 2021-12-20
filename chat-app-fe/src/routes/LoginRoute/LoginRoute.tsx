import { Button, Chip, Grid, InputAdornment, TextField, Typography } from '@material-ui/core';
import { MailOutline, Security } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import UserDetailsLayout from '../../components/Layouts/UserDetailsLayout';
import { Stack, StackGrow, StackGrowIgnore } from '../../components/Templating/Stack';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../app/Store/features/Forms/loginForm';
import { generateFormikArgs } from '../../utils/formikUtils';
interface FormState {
    email: string,
    password: string,
}

const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
})

const LoginRoute: React.FC = () => {

    const dispatch = useDispatch();

    const initialValues: FormState = {
        email: '',
        password: '',
    }

    const handleSubmit = (values: FormState) => {
        dispatch(loginThunk(values));   
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
                    height: '100%',
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            >
                <Stack>
                    <StackGrowIgnore>
                        <Typography>
                            Login
                        </Typography>
                    </StackGrowIgnore>
                    <StackGrow>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField 
                                    fullWidth
                                    variant="outlined"
                                    label="Email"
                                    {...generateFormikArgs("email", formik)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <MailOutline />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    fullWidth
                                    variant="outlined"
                                    label="Password"
                                    {...generateFormikArgs("password", formik)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Security />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </StackGrow>
                    <StackGrowIgnore>
                        <Grid 
                            container 
                            justifyContent="space-between" 
                            alignItems="center"
                        >
                            <Grid item>
                                <Chip 
                                    component={Link} 
                                    label="Create Account"
                                    to="/createAccount" 
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </StackGrowIgnore>
                </Stack>
            </form>
        </UserDetailsLayout>
    )
}

export default LoginRoute;