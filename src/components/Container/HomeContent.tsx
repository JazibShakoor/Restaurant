import React, { Fragment } from 'react';
import Card from '../../Ui/Card';
import classes from '../../Pages/Home/Home.module.css';

const HomeContent: React.FC = () => {
    return (<Fragment>
        <video width="60%" height="30%" className={classes.VideoSize} controls loop>
            <source src='Video/video1.mp4' type="video/mp4"></source>
        </video>
        <div className={classes.MiddleContainer}>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Minima autem ad sint porro vel repudiandae sit aliquam, 
               adipisci quas odit aut vitae! Laborum in tempora quia ab quo? 
               Non, sunt.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Minima autem ad sint porro vel repudiandae sit aliquam, 
               adipisci quas odit aut vitae! Laborum in tempora quia ab quo? 
               Non, sunt.
            </p>
        </div>
        <div className={classes.CardContainer}>
        <Card>
            <h3 style={{textAlign: "center"}}>Special Dishesh</h3>
            <table>
                <tr>
                    <th>Main Deshies</th>
                    <th>Price per plate</th>
                </tr>
                <tr>
                    <td>Liduid Squid</td>
                    <td>20.45</td>
                </tr>
                <tr>
                    <td>Sushi</td>
                    <td>12.56</td>
                </tr>
                <tr>
                    <td>Okonomiyaki</td>
                    <td>23.04</td>
                </tr>
            </table>
        </Card>
        </div>
    </Fragment>)
};

export default HomeContent;