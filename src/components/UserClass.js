import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
      count2:0,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count} = this.state;
     const { count2} = this.state;
    return (
      <div className="user-card">
        <h3>Count: {count} </h3>
        <h3>Count2: {count2} </h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count + 4
            });
          }}
        >
          {" "}
          Count Increase
        </button>
        <h2>Name:{name}</h2>
        <h3>location : {location}</h3>
        <h4>Contact:yuvi@gamil.com</h4>
      </div>
    );
  }
}

export default UserClass;
