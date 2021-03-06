import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom'
import home_icon from '../image/home_icon.png';
import BuyBook_icon from '../image/BuyBook_icon.png';
import SellBook_icon from '../image/SellBook_icon.png';
import feedback_icon from '../image/feedback_icon.png';
import Login_icon from '../image/Login_icon.png';
const NavBar = () =>{
    return(
        <div id="NavBar_container">
            <ul>
                <li className="NavBar_li">
                    <Link to="/Home">
                        <img src={home_icon} alt="home_icon"/>
                        <p style={{color:"#FFB8BA"}}>Home</p>
                    </Link>
                </li>
                <li className="NavBar_li">
                    <Link to="/BuyBook">
                        <img src={BuyBook_icon} alt="buybook_icon"/>
                        <p style={{color:"#E8B77B"}}>BuyBook</p>
                    </Link>
                </li>
                <li className="NavBar_li">
                    <Link to="/SellBook">
                        <img src={SellBook_icon} alt="SellBook_icon"/>
                        <p style={{color:"#FFFA94"}}>SellBook</p>
                    </Link>
                </li>
                <li className="NavBar_li">
                    <Link to="/FeedBack">
                        <img src={feedback_icon} alt="Feedback_icon"/>
                        <p style={{color:"#7BE88A"}}>FeedBack</p>
                    </Link>
                </li>
                <li className="NavBar_li">
                    <Link to="/Login">
                        <img src={Login_icon} alt="Login_icon"/>
                        <p style={{color:"#9CEAFF"}}>Login</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;