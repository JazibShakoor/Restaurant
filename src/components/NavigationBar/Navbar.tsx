import React from "react";
import { Link } from 'react-router-dom'
import classes from "./Navbar.module.css";

const Navbar: React.FC = () => {
    return <nav className={classes.Navbar}>
        <div className={classes.Heading}>
            <h1>YE</h1>
            <p>Yukihira Eatery</p>
        </div>
        <ul className={classes.Sub_Heading}>
            <input type="checkbox" id="checkbox_toggle" />
            <label htmlFor="checkbox_toggle" className={classes.hamburger}>
              &#9776;
            </label>
            <div className={classes.BullteList}>
               <Link to='/'><li className={classes.Buttondesgin}><button>Home</button></li></Link>
               <Link to='/MuneItem'><li className={classes.Buttondesgin}><button>More</button></li></Link>
               <Link to='/Form'><li className={classes.Buttondesgin}><button>Form</button></li></Link>
            </div>
        </ul>
    </nav>
};

export default Navbar;