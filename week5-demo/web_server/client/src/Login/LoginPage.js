import LoginForm from './LoginForm';
import React from 'react';

class LoginPage extends React.Component{
  constructor(){
    super();

    //set the initial component state
    this.state={
      errors:{
        // summary:"ero",
        // email:"hi",
        // password:"hhh"
      },
      user:{
        email:'',
        password:''
      }
    };
  }

  processForm(event){
    event.preventDefault();

    const email = this.state.user.email;
    const password = this.state.user.password;

    console.log('email:', email);
    console.log('password', password);

    // TODO:
  }

  changeUser(event){
    const field =event.target.name;
    const user=this.state.user;
    user[field]=event.target.value;//map to the field

    this.setState({user});
  }

  render(){
    return(
      <LoginForm
        onSubmit={(e)=>this.processForm(e)}
        onChange={(e)=>this.changeUser(e)}
        errors={this.state.errors}
      />
    );
  }
}

export default LoginPage;
