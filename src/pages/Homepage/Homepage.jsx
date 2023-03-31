import React from "react";  
import HomePageHeader from "../../components/Headers/HomePageHeader";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./homepage.css";

const Homepage = () => {
    return (
        <div className="home-container">
            <Navbar/>
            <HomePageHeader 
                title={"El Seguro Que conviene"} 
                subtitle={"Protección instantánea. Unidos por tus intereses."}
            />
            <Footer/>
        </div>
    );
}

export default Homepage;
