import {useState} from 'react';


const User =({name , location}) => {

    const [count , setCount] = useState(0);
    return (
    <div className="user-card">
        <h2>Count : {count}</h2>
        <h2>Name:{name}</h2>
        <h3>{location}</h3>
        <h4>Contact:yuvi@gamil.com</h4>
    </div>
    );
}
export default User;