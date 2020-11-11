import React from "react";
import { Redirect } from "react-router-dom";
import { UserContextConsumer } from "context/userContext";

const ProtectedRoute = (props) => {
    const Component = props.component;

    return (
        <UserContextConsumer>
            {(context) =>
                context.user ? <Component /> : <Redirect to={{ pathname: "/sign-in" }} />
            }
        </UserContextConsumer>
    );
};

export default ProtectedRoute;
