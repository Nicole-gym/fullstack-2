import SignUpForm from './SignUpForm';
import React from 'react';

class SignUpPage extends React.Component{
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
        password:'',
        confirm_password:''
      }
    };
  }

  processForm(event){
    event.preventDefault();

    const email = this.state.user.email;
    const password = this.state.user.password;
    const confirm_password=this.state.user.confirm_password;

    console.log('email:', email);
    console.log('password', password);
    console.log('confirm_password', confirm_password);


    // TODO:
  }

  changeUser(event){
    const field =event.target.name;
    const user=this.state.user;
    user[field]=event.target.value;//map to the field

    this.setState({user});
    const errors=this.state.errors;
    if(this.state.user.password!==this.state.user.confirm_password){
      // const errors=this.state.errors;
      errors.password="they are not equal";
    }else{
      errors.password='';
    }

    this.setState({errors});
  }

  render(){
    return(
      <SignUpForm
        onSubmit={(e)=>this.processForm(e)}
        onChange={(e)=>this.changeUser(e)}
        errors={this.state.errors}
      />
    );
  }
}

export default SignUpPage;
