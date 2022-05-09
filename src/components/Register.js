import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import Axios from 'axios'
import { Redirect } from 'react-router-dom';


export default class Register extends Component {

constructor(props) {
    super(props)

    this.state = {
         fname:'',
         lname:'',
         email:'',
         phone:'',
         username:'',
         password:'',
         isregistered:false
        
    }
}

handleChange=(e)=>this.setState({[e.target.name]:e.target.value})

handleSubmit=(e)=>{
    e.preventDefault();
   // console.log(this.state);
   Axios.post('http://localhost:3000/users/register',this.state)
   .then(res=>{
     console.log(res)
     this.setState({isregistered:true});
   }).catch(err=>console.log(err))

}

    render() {
      if(this.state.isregistered){
        return <Redirect to='/login'/>
      }
        return (

<div class="slider-area">
    <main className="login-body" data-vide-bg="assets/img/login-bg.mp4">
       
        <form className="form-default">
            
            <div className="login-form">
               
                <h2>Register</h2>

                <div className="form-input">
                    <label htmlFor="username">First Name</label>
                    <Input type="text" name="fname" id="fname" placeholder="" value={this.state.fname} onChange={this.handleChange} />
                </div>

                <div className="form-input">
                    <label htmlFor="username">Last name</label>
                    <Input type="text" name="lname" id="lname" placeholder="" value={this.state.lname} onChange={this.handleChange} />
                </div>

                <div className="form-input">
                    <label htmlFor="username">Phone</label>
                    <Input type="text" name="phone" id="phone" placeholder="" value={this.state.phone} onChange={this.handleChange} />
                </div>

                <div className="form-input">
                    <label htmlFor="username">Email</label>
                    <Input type="text" name="email" id="email" placeholder="" value={this.state.email} onChange={this.handleChange} />
                </div>

                <div className="form-input">
                    <label htmlFor="username">Username</label>
                    <Input type="text" name="username" id="username" placeholder="" value={this.state.username} onChange={this.handleChange} />
                </div>


                <div className="form-input">
                    <label htmlFor="username">Password</label>
                    <Input type="password" name="password" id="password" placeholder="" value={this.state.password} onChange={this.handleChange} />
                </div>
<Button color='primary' block onClick={this.handleSubmit}>Submit</Button>

                
                
            
            </div>
        </form>
       
    </main>

            </div>


        )








                {/* <h1>Registration</h1>
                <Form onSubmit={this.handleSubmit}>
                <FormGroup>
        <Label for="fname">First Name</Label>
        <Input type="text" name="fname" id="fname" placeholder="" value={this.state.fname} onChange={this.handleChange}/>
      </FormGroup>

      <FormGroup>
        <Label for="lname">Last Name</Label>
        <Input type="text" name="lname" id="lname" placeholder="" value={this.state.lname} onChange={this.handleChange}/>
      </FormGroup>

      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="" value={this.state.email} onChange={this.handleChange} />
      </FormGroup>

      <FormGroup>
        <Label for="phone">Phone</Label>
        <Input type="text" name="phone" id="phone" placeholder="" value={this.state.phone} onChange={this.handleChange}/>
      </FormGroup>


      <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" placeholder="" value={this.state.username} onChange={this.handleChange} />
      </FormGroup>


      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="" value={this.state.password} onChange={this.handleChange}/>
      </FormGroup>
<Button color='primary' block onClick={this.handleSubmit}>Submit</Button>


                </Form> */}



            // </div>
        
    }
}
