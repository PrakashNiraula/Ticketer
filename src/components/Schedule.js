import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, ListGroup, ListGroupItem } from 'reactstrap'
import Axios from 'axios'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
//import { Button } from 'reactstrap'
import Footer from './Footer'
import AdminHeader from './HeaderAdmin'

export default class VehicleRoute extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            departuredate:'',
            departuretime:'',
            travel:'',
             config:{
                 headers:{'Authorization':localStorage.getItem('token')}
             }
        }
    }

    componentDidMount(){

    }

handleChange=(e)=>{
    this.setState({
     
      [e.target.name]:e.target.value

    })
  }



handleSubmit=(e)=>{

    e.preventDefault();
   
Axios.post('http://localhost:3000/schedule',{
vehicle_id:localStorage.getItem("vehicle_id"),
route_id:localStorage.getItem("route_id"),
departure_date:this.state.departuredate,
departure_time:this.state.departuretime,
status:'LeavingOnTime',
repitition:'Once'
},this.state.config).then(res=>{
    
   Axios.post(`http://localhost:3000/vehicle/${localStorage.getItem("vehicle_id")}/schedule`,{_id:res.data._id},this.state.config).then(res=>{
       this.setState({travel:'1'});
   })



})


}

    
    render() {
        if(this.state.travel=='1'){

            return <Redirect to='/dashboard'/>
            
        }
        return (

            <div>


<AdminHeader/>

{/* <VehicleRoute/> */}


                <main>
                <section class="slider-area slider-area2">
            <div class="slider-active">
               
                <div class="single-slider slider-height2">       
                </div>
            </div>
        </section>
 <div className='container'>
 <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-8">
                        <div class="section-tittle text-center mb-55">
                            <h2>Add schedule for new vehicle</h2>
                        </div>
                    </div>
                </div>

                <Form onSubmit={this.handleSubmit} encType='multipart/form-data' >
                <FormGroup>
        <Label for="start">Departure Date</Label>
        <Input type="date" name="departuredate" id="departuredate" placeholder="" value={this.state.departuredate} onChange={this.handleChange}/>
      </FormGroup>

      <FormGroup>
        <Label for="start">Departure Time</Label>
        <Input type="time" name="departuretime" id="departuretime"  value={this.state.departuretime} onChange={this.handleChange}/>
      </FormGroup>
      <Button color='primary'  onClick={this.handleSubmit}>Add Data</Button>
      </Form>
      <hr></hr>
            </div>

            </main>
<Footer/>
            </div>
           
        )
    }
}
