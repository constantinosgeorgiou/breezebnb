// Based on this tutorial
// https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import NavBar from "./components/NavBar";

import Home from "./components/home";
import SignUp from "./components/signup";
import SignIn from "./components/signin";

class App extends Component {
    render() {
        return (
            <Router></Router>
            //     <main>
            //         <nav>
            //             <ul>
            //                 <li>
            //                     <Link to="/">Home</Link>
            //                 </li>
            //                 <li>
            //                     <Link to="/signup">Sign Up</Link>
            //                 </li>
            //                 <li>
            //                     <Link to="/signin">Sign In</Link>
            //                 </li>
            //             </ul>
            //         </nav>
            //         <Route exact path="/" component={Home} />
            //         <Route path="/signup" component={SignUp} />
            //         <Route path="/signin" component={SignIn} />
            //     </main>
        );
    }
}

export default App;
