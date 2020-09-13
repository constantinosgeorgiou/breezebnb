import React from "react";
import { Route, Redirect } from "react-router-dom";

import { authenticationService } from "@/_services";

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            const currentUser = authenticationService.currentUserValue;
            if (!currentUser) {
                // not logged in so redirect to login page with the return url
                return (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location },
                        }}
                    />
                );
            }

            // authorised so return component
            return <Component {...props} />;
        }}
    />
);

// // A wrapper for <Route> that redirects to the login
// // screen if you're not yet authenticated.
// function PrivateRoute({ children, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 fakeAuth.isAuthenticated ? (
//                     children
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: "/login",
//                             state: { from: location },
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// }
