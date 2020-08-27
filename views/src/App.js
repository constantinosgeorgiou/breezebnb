// Based on this tutorial
// https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/

import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/home";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import SearchBar from "./components/searchbar";

class App extends React.Component {
    render() {
        return (
            <Router>
                <main>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/signin">Sign In</Link>
                            </li>
                        </ul>
                        <SearchBar />
                    </nav>
                    <Route exact path="/" component={Home} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                </main>
            </Router>
        );
    }
}
export default App;
