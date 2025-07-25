import { useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";


 const Header = () => {

    const [btnNameReact , setbtnNameReact] = useState("Login")
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
             <ul>
                <li> <Link to="/">Home </Link></li>
                <li> <Link to="/about">About </Link></li>
                <li> <Link to="/contact">Contact </Link></li>
                <li> <Link to="/cart">Cart </Link></li>
                <button className="LogIn" onClick={() => {
                    btnNameReact === "LogIn" ? setbtnNameReact("LogOut") : setbtnNameReact("LogIn");

                }}>{btnNameReact}</button>
             </ul>
            </div>
        </div>
    );
};

export default Header;
