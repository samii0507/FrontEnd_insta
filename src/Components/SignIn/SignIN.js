import React, { Component } from "react";

class SignIN extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div>
             <input className="logipage__text" onChange={(event)=>{this.state.emailId=event.currentTarget.value}} type="text" placeholder="Phone number, username, or email" />
             <input className="logipage__text" onChange={(event)=>{this.state.password=event.currentTarget.value}}  type="password" placeholder="Password" />
             <button className="login__button" onClick={this.login}>Log In</button>
        </div>  
        );
    }
}
 
export default SignIN;