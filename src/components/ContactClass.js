import React from "react";

class ContactClass extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const {Ph_no , email} = this.props;

        return (
            <div className="contact-card">
                <h2>Phone : {Ph_no}</h2>
                <h2>EmailId:{email}</h2>
            </div>
        )
    }

}
export default ContactClass;