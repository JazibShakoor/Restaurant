import React, { Fragment } from "react";
import classes from "./Home.module.css";
import HomeContent from "../../components/Container/HomeContent";
import Navbar from "../../components/NavigationBar/Navbar";

const Home: React.FC = () => {
    return (
    <Fragment>
        <Navbar />
        <div className={classes.Container}>
           <h1>Yukihira Eatery</h1>
           <p>Japanese best place for dinning</p>
        </div>
        <HomeContent />
    </Fragment>)
};

export default Home;