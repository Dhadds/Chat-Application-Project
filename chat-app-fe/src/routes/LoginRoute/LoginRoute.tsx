import { Button, Chip, Grid, InputAdornment, TextField, Typography } from '@material-ui/core';
import { MailOutline, Security } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import UserDetailsLayout from '../../components/Layouts/UserDetailsLayout';
import { Stack, StackGrow, StackGrowIgnore } from '../../components/Templating/Stack';


const LoginRoute: React.FC = () => {
    return (
        <UserDetailsLayout>
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
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </StackGrowIgnore>
            </Stack>
        </UserDetailsLayout>
    )
}

export default LoginRoute;