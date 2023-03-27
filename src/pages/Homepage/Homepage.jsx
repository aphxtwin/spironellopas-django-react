import React from "react";
import Header from "../../components/Headers/Header";
import "./homepage.css";

const Homepage = () => {
    return (
        <div className="home-container">
            <Header headerClass='homepage' title={"El Seguro Que conviene"} subtitle={"Protección instantánea. Unidos por tus intereses."}/>
        </div>
    );
}

export default Homepage;
