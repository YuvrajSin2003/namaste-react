import { LOGO_URL } from "../utils/contants";

 const Header = () => {
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
                <li></li>
             </ul>
            </div>
        </div>
    );
};

export default Header;
