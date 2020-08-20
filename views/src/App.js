import React from "react";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import HomePage from "./components/homepage";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navigation />
            <HomePage />
            <Footer />
        </div>
    );
}

export default App;
