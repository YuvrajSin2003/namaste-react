import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <User name={"Yuvi in functional"} location={"Varanasi in functional"} />
        <UserClass name={"Yuvi in class"} location={"Varanasi in class"} />
      </div>
    );
  }
}

export default About;