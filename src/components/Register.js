import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import Axios from 'axios'
import { Redirect } from 'react-router-dom';


export default class Register extends Component {

constructor(props) {
    super(props)

    this.state = {
         name:'',
         address:'',
         phone:'',
         email:'',
         username:'',
         password:'',
         role:'',
         gotologin: false,
         isregistered:false
        
    }
}

handleChange=(e)=>this.setState({[e.target.name]:e.target.value})

gotologin=(e)=>{
    e.preventDefault();
    this.setState({gotologin:true});
   
}

handleSubmit=(e)=>{
    e.preventDefault();
   // console.log(this.state);
   Axios.post('http://140.238.204.76:3005/user/createuser',this.state)
   .then(res=>{
     console.log(res)
   e.label = "You are registered successfully."
  // this.setState({status:true});
     this.setState({isregistered:true});
   }).catch(err=>console.log(err))

}

    render() {

        if(this.state.gotologin){
            return <Redirect to='/login'/>
          }
      if(this.state.isregistered){
        return( <div>

            <label>Success</label>
            <Button block onClick={this.gotologin}>Go to login</Button>
        
        </div>
        
        )
      }
      else{
        return(

<div className="slider-area">
    <main className="login-body" data-vide-bg="assets/img/login-bg.mp4">
       
        <form className="form-default">
            
            <div className="login-form">
               
                <h2>Register</h2>

                <div className="form-input">
                    <label htmlFor="name">Name</label>
                    <Input type="text" name="name" id="name" placeholder="" value={this.state.name} onChange={this.handleChange} />
                </div>

                <div className="form-input">
                    <label htmlFor="address">Address</label>
                    <Input type="text" name="address" id="address" placeholder="" value={this.state.address} onChange={this.handleChange} />
                </div>

                <div className="form-input">
                    <label htmlFor="phone">Phone</label>
                    <Input type="text" name="phone" id="phone" placeholder="" value={this.state.phone} onChange={this.handleChange} />
                </div>

                <div className="form-input">
                    <label htmlFor="email">Email</label>
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
             
                {/* <label name="label" id="status" placeholder="" value={this.state.status} onChange={this.handleChange} />
         */}
<Button color='primary' block onClick={this.handleSubmit}>Submit</Button>

                
                
            
            </div>
        </form>
       
    </main>

            </div>

        )

      }







        
        
    }
}