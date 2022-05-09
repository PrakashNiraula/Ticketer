import React, { Component } from 'react'
import VehicleRoute from './VehicleRoute'
import AdminHeader from './HeaderAdmin'
import Footer from './Footer'
import Axios from 'axios'
import {Table,Button } from 'reactstrap'

export default class Dashboard extends Component {


    state={
        mydetails:'',
        buses:[],
        vehicles:[],
        config:{
            headers:{'Authorization':localStorage.getItem('token')}
        }

    }

    deletebooking=(id)=>{

        Axios.delete('http://localhost:3000/vehicle/'+id,this.state.config)
        .then((res) => {
           
            const filteredbooking= this.state.vehicles.filter((vehicle)=>{
               return vehicle._id !== id
                
             });
             this.setState({
                 vehicles: filteredbooking
           
             })
            
        }).catch((err) => console.log(err.response));
    }

    componentDidMount(){
        Axios.get('http://localhost:3000/vehicle',this.state.config)
        .then(res=>this.setState({vehicles:res.data})).catch(err=>console.log(err))
    }
    render() {
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

        <div class="section-top-border container">
											<h3 class="mb-30">My Buses</h3>
											<div class="progress-table-wrap">
												<div class="progress-table">
                                                
                                                        <div>


                                                        <Table className="container">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>ID</th>
                                        <th>Type</th>
                                        <th>Image</th>

                                    
                                        <th>Number</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.vehicles.map((vehicle,i) => (
                                       


                                                
                                        <tr>
                                          
                                    <td key={vehicle._id}><h3>{i+1}</h3></td>
                                   
                                    <td key={vehicle._id}><h3>{vehicle._id}</h3></td>
                                    <td key={vehicle._id}><h3>Bus</h3></td> 
                                    
                                        <td key={vehicle._id}><h3><img className="img-fluid" width="150" height="150" src={'http://localhost:3000/uploads/myfile-'+vehicle.image.split("-")[1]}/></h3></td>
                                    <td key={vehicle._id}><h3>{vehicle.vehicle_number}</h3></td> 

                                            <td>

                                            <div href="#" class="genric-btn danger circle" onClick={() =>this.deletebooking(vehicle._id)}>Delete</div>
                                            
                                           
                                                </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            </div>
                            </div>
                            </div>
                              </div>
                </main>
                <Footer/>
                
            </div>
        )
    }
}
