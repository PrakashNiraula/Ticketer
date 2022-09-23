import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import Axios from 'axios'
import { Redirect } from 'react-router-dom';


export default class Register extends Component {

constructor(props) {
    super(props)

    this.state = {
         property_name:'',
         price:'',
         bed:'',
         land:'',
         category_id:'',
         subcategory_id:'',
         city_id:'',
         isregistered:false
        
    }
}

handleChange=(e)=>this.setState({[e.target.name]:e.target.value})

gotoproperty=(e)=>{
    e.preventDefault();
    this.setState({gotoproperty:true});
   
}

handleSubmit=(e)=>{
    e.preventDefault();
   // console.log(this.state);
   Axios.post('http://140.238.204.76:3005/property/createproperty',this.state)
   .then(res=>{
     console.log(res)
   e.label = "You have registered property successfully."
  // this.setState({status:true});
     this.setState({isregistered:true});
   }).catch(err=>console.log(err))

}

    render() {

        if(this.state.gotoproperty){
            return <Redirect to='/property'/>
          }
      if(this.state.isregistered){
        return( <div>

            <label>Success</label>
            <Button block onClick={this.gotoproperty}>Go to property</Button>
        
        </div>
        
        )
      }
      else{
        return(

<div className="slider-area">
    <main className="login-body" data-vide-bg="assets/img/login-bg.mp4">
       
        <form className="form-default">
            
            <div className="login-form">
               
                <h2>Add Property</h2>

                <div className="form-input">
                    <label htmlFor="name">Property Name</label>
                    <Input type="text" name="name" id="property_name" placeholder="" value={this.state.property_name} onChange={this.handleChange} />
                </div>

                <div className="form-input">
                    <label htmlFor="price">Price</label>
                    <Input type="text" name="price" id="price" placeholder="" value={this.state.price} onChange={this.handleChange} />
                </div>

                <div className="form-input">
                    <label htmlFor="bed">Bed</label>
                    <Input type="text" name="bed" id="bed" placeholder="" value={this.state.bed} onChange={this.handleChange} />
                </div>

                <div className="form-input">
                    <label htmlFor="land">Land</label>
                    <Input type="text" name="land" id="land" placeholder="" value={this.state.land} onChange={this.handleChange} />
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