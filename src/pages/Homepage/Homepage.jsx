import React from "react";
import HomePageHeader from "../../components/Headers/HomePageHeader/HomePageHeader";
import "./homepage.css";
const Homepage = () => {
    return (
        <div className="home-container">
            <HomePageHeader title={"El Seguro Que conviene"} subtitle={"Protección instantánea. Unidos por tus intereses."}/>
        </div>
    );
}

export default Homepage;
