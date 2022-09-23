import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import Axios from 'axios'
import { Redirect } from 'react-router-dom';
import {Table} from 'reactstrap'

export default class Register extends Component {

constructor(props) {
    super(props)

    this.state = {
        city_name:'',
        cities: [],
        isregistered:false
        
    }
}

            //to bring all the data from api can be call only once
            componentDidMount() {
                Axios.get('http://140.238.204.76:3005/city/getcity',this.state.config)
                    .then((res) => {
        
                        this.setState({
                            cities: res.data
                        })
                    }).catch((err) => console.log(err.response));
        
            }

handleChange=(e)=>this.setState({[e.target.name]:e.target.value})

gotocity=(e)=>{
    e.preventDefault();
    this.setState({gotocity:true});
   
}

handleSubmit=(e)=>{
    e.preventDefault();
   // console.log(this.state);
   Axios.post('http://140.238.204.76:3005/city/createcity',this.state)
   .then(res=>{
     console.log(res)
   e.label = "You have registered city successfully."
  // this.setState({status:true});
     this.setState({isregistered:true});
   }).catch(err=>console.log(err))

}

    render() {

        if(this.state.gotocity){
            return <Redirect to='/city'/>
          }
      if(this.state.isregistered){
        return( <div>

            <label>Success</label>
            <Button block onClick={this.gotocity}>Go to City</Button>
        
        </div>
        
        )
      }
      else{
        return(

<div className="slider-area">
    <main className="login-body" data-vide-bg="assets/img/login-bg.mp4">
       
        <form className="form-default">
            
            <div className="login-form">
               
                <h2>Add city</h2>

                <div className="form-input">
                    <label htmlFor="city">City</label>
                    <Input type="text" name="name" id="name" placeholder="" value={this.state.city} onChange={this.handleChange} />
                </div>

                {/* <label name="label" id="status" placeholder="" value={this.state.status} onChange={this.handleChange} />
         */}
<Button color='primary' block onClick={this.handleSubmit}>Submit</Button>

                          
            </div>

        </form>

       
    </main>
    
    <Table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>City </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.cities.map(cities => (
                                        <tr>
                                          
                                            <td ><h3>{cities.city_id}</h3></td>
                                            <td ><h3>{cities.city_name}</h3></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table> 
   
            </div>

        )

      }
  
        
    }
}