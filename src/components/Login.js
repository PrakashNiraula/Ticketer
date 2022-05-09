import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import jwt_decode from "jwt-decode";

export default class Login extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:'',
             loggedStatus:false,
             role:''
        }
    }

    handleChange=(e)=>this.setState({[e.target.name]:e.target.value});

    handleSubmit=(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:3000/users/login',{username:this.state.username,password:this.state.password})
        .then(res=>{
            localStorage.setItem('token',res.data.token);
             var token = res.data.token.split(" ")[1];
            var decoded = jwt_decode(token);
            localStorage.setItem('id',decoded.id);
            localStorage.setItem('fname',decoded.fname);
            localStorage.setItem('role',decoded.role); 
            this.setState({loggedStatus:true});
            this.setState({role:decoded.role});
        }).catch(err=>console.log(err))
    }
    
    render() {
        if(this.state.role==="admin" || this.state.role==="owner"){
            return <Redirect to='/dashboard'/>
        }
        if(this.state.role==="user"){
            return <Redirect to='/user'/>
        }
        return (
            <div class="slider-area">
    <main className="login-body" data-vide-bg="assets/img/login-bg.mp4">
       
        <form className="form-default">
            
            <div className="login-form">
               
                <div className="logo-login">
                    <a href="/"><img src="assets/img/logo/loder.png" alt=""/></a>
                </div>
                <h2>Login Here</h2>
                <div className="form-input">
                    <label htmlFor="username">Username</label>
                    <Input type="text" name="username" id="username" placeholder="" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <Input type="password" name="password" id="password" placeholder="" value={this.state.password} onChange={this.handleChange}/>
                </div>
                <div className="form-input pt-30">
                    
                    <Button color='primary'type="submit" block onClick={this.handleSubmit}>Login</Button>
                </div>
                
            
            </div>
        </form>
       
    </main>

            </div>
        )
    }
}
