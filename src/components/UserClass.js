import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      userInfo : {
        name:"Dummy",
        location:"Default",
        avatar_url:"https://dummyimage.com",
      }
    }
   
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/YuvrajSin2003");
    const json = await data.json();
    

    this.setState({
        userInfo: json,
    });
    console.log(json);
  }

  render() {

    const {name ,location , avatar_url} = this.state.userInfo;
    
    return (
      <div className="user-card">
       <img src={avatar_url} alt="avatar" />
        <h2>Name:{name}</h2>
        <h3>location : {location}</h3>
        <h4>Contact:yuvi@gamil.com</h4>
      </div>
    );
  }
}

export default UserClass;
