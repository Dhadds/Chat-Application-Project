import { Button, Chip, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import UserDetailsLayout from '../../components/Layouts/UserDetailsLayout';

const CreateAccountRoute: React.FC = () => {
    return (
        <UserDetailsLayout>
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
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="First Name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Last Name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Username"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Password"
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
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </UserDetailsLayout>
    );
};

export default CreateAccountRoute