import React, { Fragment, useState } from "react";

import { Link as RouterLink } from "react-router-dom";

import ListItemLink from "components/ListItemLink";

import {
    AppBar,
    Box,
    Button,
    Divider,
    Hidden,
    Link,
    IconButton,
    List,
    Menu,
    MenuItem,
    SwipeableDrawer,
    Toolbar,
    Typography,
} from "@material-ui/core";

import { UserContextConsumer } from "context/userContext";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import HouseOutlinedIcon from "@material-ui/icons/HouseOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";

const Navigation = (props) => {
    const [isBurgerMenuOpen, toggleBurgerMenu] = useState(false);
    const burgerAnchor = "right";

    const [profileAnchor, setProfileAnchor] = useState(null);

    const openProfileMenu = (event) => {
        setProfileAnchor(event.currentTarget);
    };

    const closeProfileMenu = () => {
        setProfileAnchor(null);
    };

    return (
        <UserContextConsumer>
            {(context) => (
                <Fragment>
                    <AppBar position="sticky" color="transparent">
                        <Toolbar>
                            {/* Left side */}
                            <Box display="flex" flexGrow={1}>
                                <Link
                                    component={RouterLink}
                                    to="/"
                                    color="inherit"
                                    underline="none"
                                >
                                    <Typography variant="h6" noWrap color="primary">
                                        breezebnb
                                    </Typography>
                                </Link>
                            </Box>

                            {/* Right side */}
                            <Box>
                                {/* Menu */}
                                <Hidden smUp>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open menu"
                                        edge="end"
                                        onClick={toggleBurgerMenu}
                                    >
                                        <MenuOutlinedIcon />
                                    </IconButton>
                                </Hidden>

                                {/* Navigation */}
                                <Hidden xsDown>
                                    <Button color="inherit">
                                        <Link
                                            component={RouterLink}
                                            to="/apply-for-hosting"
                                            color="inherit"
                                        >
                                            Become a host
                                        </Link>
                                    </Button>

                                    {context.user ? (
                                        <Fragment>
                                            <IconButton
                                                aria-label="profile"
                                                aria-controls="profileMenu"
                                                aria-haspopup="true"
                                                onClick={openProfileMenu}
                                                color="inherit"
                                            >
                                                <AccountCircleOutlinedIcon />
                                            </IconButton>
                                        </Fragment>
                                    ) : (
                                        <Fragment>
                                            <Button color="inherit">
                                                <Link
                                                    component={RouterLink}
                                                    to="/sign-in"
                                                    color="inherit"
                                                >
                                                    Sign in
                                                </Link>
                                            </Button>
                                            <Button color="inherit">
                                                <Link
                                                    component={RouterLink}
                                                    to="/sign-up"
                                                    color="inherit"
                                                >
                                                    Sign up
                                                </Link>
                                            </Button>
                                        </Fragment>
                                    )}
                                </Hidden>
                            </Box>
                        </Toolbar>
                    </AppBar>

                    {/* Profile menu */}
                    <Menu
                        id="profileMenu"
                        anchorEl={profileAnchor}
                        keepMounted
                        elevation={0}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}
                        open={Boolean(profileAnchor)}
                        onClose={closeProfileMenu}
                    >
                        <MenuItem onClick={closeProfileMenu}>Profile</MenuItem>
                        <MenuItem onClick={closeProfileMenu}>Logout</MenuItem>
                    </Menu>

                    {/* Burger menu */}
                    <SwipeableDrawer
                        anchor={burgerAnchor}
                        open={isBurgerMenuOpen}
                        onClose={() => toggleBurgerMenu(false)}
                        onOpen={() => toggleBurgerMenu(true)}
                    >
                        <List>
                            <ListItemLink
                                to="/apply-for-hosting"
                                primary="Become a hsot"
                                icon={<HouseOutlinedIcon />}
                            />
                        </List>
                        <Divider />
                        <List>
                            {context.user ? (
                                <Fragment>
                                    <ListItemLink to="/profile" primary="Profile" />
                                    <ListItemLink to="/sign-out" primary="Sign out" />
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <ListItemLink to="/sign-in" primary="Sign in" />
                                    <ListItemLink to="/sign-up" primary="Sign up" />
                                </Fragment>
                            )}
                        </List>
                    </SwipeableDrawer>
                </Fragment>
            )}
        </UserContextConsumer>

        // {renderProfileMenu}
        // {renderBurgerMenu}
    );
};

export default Navigation;
