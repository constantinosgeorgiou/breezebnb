import React, { Component } from "react";
import SearchBar from "./../searchbar";

class Home extends Component {
    render() {

        return (
            <div>
                <h1>Welcome home</h1>
                <SearchBar/>
            </div>
        );
    }
}

export default Home;
