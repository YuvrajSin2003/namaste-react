import { useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineState from "../utils/useOnlineState";


 const Header = () => {

    const [btnNameReact , setbtnNameReact] = useState("Login")

    const onLineStatus = useOnlineState();
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg p-4  ">
            <div className="border-2 border-black">
                <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
               
             <ul className="flex p-4 m-4">
                <li className="px-5 rounded border border-black"> online State : {onLineStatus ? "✅" : "❌" } </li>
                <li className="px-4 rounded border border-black"> <Link to="/">Home </Link></li>
                <li className="px-4 rounded border border-black"> <Link to="/about">About </Link></li>
                <li className="px-4 rounded border border-black"> <Link to="/contact">Contact </Link></li>
                <li className="px-4 rounded border border-black"> <Link to="/cart">Cart </Link></li>
                <li className="px-4 rounded border border-black"> <Link to="/grocery">Grocery </Link></li>
                <button className="flex rounded border border-black" onClick={() => {
                    btnNameReact === "LogIn" ? setbtnNameReact("LogOut") : setbtnNameReact("LogIn");

                }}>{btnNameReact}</button>
             </ul>
            </div>
        </div>
    );
};

export default Header;
