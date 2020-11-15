import React, { useState } from "react";

import { Link as RouterLink } from "react-router-dom";

import {
    Avatar,
    Button,
    Container,
    Grid,
    Link,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    makeStyles,
} from "@material-ui/core";

import { Visibility, VisibilityOff } from "@material-ui/icons";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },

    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

// TODO: Validation
// TODO:   - Username:
// TODO:       - ADD helperText = "Username is taken".
// TODO:       - error
const SignIn = (props) => {
    const classes = useStyles();

    const [values, setValues] = useState({ username: "", password: "", showPassword: false });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Username: " + values.username + "\nPassword: " + values.password);
    };

    return (
        <Container component="main" maxWidth="xs">
            <div elevation={0} className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    {/* Username */}
                    <TextField
                        variant="outlined"
                        color="black"
                        margin="normal"
                        required
                        fullWidth
                        autoFocus
                        id="username"
                        label="Username"
                        onChange={handleChange("username")}
                        autoComplete="username" // What is?
                    />

                    {/* Password */}
                    <FormControl variant="outlined" margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={values.showPassword ? "text" : "password"}
                            value={values.password}
                            onChange={handleChange("password")}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign in
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link
                                component={RouterLink}
                                to="/forgot-password"
                                variant="body2"
                                color="grey"
                            >
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link component={RouterLink} to="/sign-up" variant="body2">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default SignIn;
