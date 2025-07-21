import { useState } from "react";
import { LOGO_URL } from "../utils/contants";

 const Header = () => {

    const [btnNameReact , setbtnNameReact] = useState("Login")
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Me</li>
                <li>Cart</li>
                <button className="LogIn" onClick={() => {
                    btnNameReact === "LogIn" ? setbtnNameReact("LogOut") : setbtnNameReact("LogIn");

                }}>{btnNameReact}</button>
             </ul>
            </div>
        </div>
    );
};

export default Header;
