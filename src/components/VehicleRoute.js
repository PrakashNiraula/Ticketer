import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, ListGroup, ListGroupItem } from 'reactstrap'
import Axios from 'axios'
import { Redirect } from 'react-router-dom';
import AdminHeader from './HeaderAdmin'
import Footer from './Footer'

//import { Button } from 'reactstrap'
import {Link} from 'react-router-dom';

export default class VehicleRoute extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             start:'',
             destination:'',
             vechicleroute:[],
             travel:'',
             config:{
                 headers:{'Authorization':localStorage.getItem('token')}
             }

        }
    }

    componentDidMount(){
        Axios.get('http://localhost:3000/route',this.state.config)
        .then(res=>this.setState({vechicleroute:res.data})).catch(err=>console.log(err))
    }

 handleChange=(e)=>this.setState({[e.target.name]:e.target.value})

handleSubmit=(e)=>{
    e.preventDefault();
    Axios.post('http://localhost:3000/route',{start:this.state.start,destination:this.state.destination},this.state.config)
.then(res=>{
    
    this.setState({
        vechicleroute: this.state.vechicleroute.concat(res.data) 

    })

}).catch(err=>console.log(err))
}

handleSelection=(objectId)=>{
   localStorage.setItem("route_id",objectId);
   this.setState({travel:1});
    
}
    render() {
        if(this.state.travel==1){
            return <Redirect to='/vehicle'/>
        }
        return (
<div>


<AdminHeader/>
<main>
                <section class="slider-area slider-area2">
            <div class="slider-active">
               
                <div class="single-slider slider-height2">       
                </div>
            </div>
        </section>


        <div class="container">



        <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-8">
                        <div class="section-tittle text-center mb-55">
                            <h2>Add route for your new vehicle</h2>
                        </div>
                    </div>
                </div>






<div className='container'>
                <Form onSubmit={this.handleSubmit} class="form-default">

                    <div class="form">



                <div className="form-input">
                    <label htmlFor="start"><h3>Start</h3></label>
                    {/* <Input type="text" name="start" id="start" placeholder="" value={this.state.start} onChange={this.handleChange}/> */}
                    <input type="text" name="start" placeholder="Start" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Start'" required="" class="single-input"  value={this.state.start} onChange={this.handleChange}></input>
      </div>
               
      <div className="form-input">
                    <label htmlFor="destination"><h3>Destination</h3></label>
                    {/* <Input type="text" name="start" id="start" placeholder="" value={this.state.start} onChange={this.handleChange}/> */}
                    <input type="text" name="destination" placeholder="Destination" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Destinaton'" required="" class="single-input"  value={this.state.destination} onChange={this.handleChange}></input>
      </div>
      <div className="form-input pt-30">
      <div href="#" class="genric-btn primary circle arrow col-lg-2" block onClick={this.handleSubmit}>Add route<span class="lnr lnr-arrow-right"></span></div>
                    
      {/* <Button color='primary' block >Add Data</Button> */}
    </div>

    </div>
      </Form>
      <hr></hr>

      <ListGroup>
          {
     this.state.vechicleroute.map(route=>{
        return <ListGroupItem key={route._id} onClick={() => this.handleSelection(route._id)}><h3>{route.start +' to ' +route.destination}</h3></ListGroupItem>
     })
    }
    </ListGroup>


            </div>



        </div>
        </main>




<Footer/>





</div>


        )
    }
}
