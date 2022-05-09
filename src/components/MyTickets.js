import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {Table,Button } from 'reactstrap'
import Header from './Header'
import Footer from './Footer'


import Axios from 'axios'


export default class MyTickets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            customername:'',
            location:'',

            tickets: [],
            config:{
                headers:{'Authorization':localStorage.getItem('token')}
            }
           
        }
    }
    //to bring all the data from api can be call only once
    componentDidMount() {
        Axios.get('http://localhost:3000/ticket',this.state.config)
            .then((res) => {

                this.setState({
                    tickets: res.data
                })
            }).catch((err) => console.log(err.response));

    }
    handleChange = (e) =>
    this.setState({ [e.target.name]: e.target.value })

    
   deletebooking=(bookingId)=>{
        console.log(bookingId);
        Axios.delete(`http://localhost:3000/ticket/${bookingId}`,this.state.config)
        .then((res) => {
            console.log(res.data);
            const filteredbooking= this.state.tickets.filter((ticket)=>{
               return ticket._id !== bookingId
                
             });
             this.setState({
                 tickets: filteredbooking
           
             })
            
        }).catch((err) => console.log(err.response));
    
    }

    render() {
        return (
            <div>
              
              
<Header/>

{/* <VehicleRoute/> */}


                <main>
                <section class="slider-area slider-area2">
            <div class="slider-active">
               
                <div class="single-slider slider-height2">       
                </div>
            </div>
        </section>
                        

                 <section className="page-section" id="booking">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">My tickets</h2>
                                <h3 className="section-subheading text-muted">Deleting will cause cancellation of tickets</h3>
                            </div>
                        </div>
                        <div style={{ height: "55vh" }}>
                            
                            <hr />

                            <Table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Seats</th>
                                      
                                        <th>Payment</th>
                                        <th>Modify</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.tickets.map(ticket => (
                                        <tr>
                                          
                                            <td ><h3>{ticket._id}</h3></td>
                                             <td ><h3>{ticket.seat_id}</h3></td>
                                            <td ><h3>{ticket.payment}</h3></td> 

                                            <td>
                                              <div href="#" class="genric-btn danger circle" onClick={() =>this.deletebooking(ticket._id)}>Delete</div>
                                           
                                                </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            
                        </div>
                    </div>
                </section> 
                </main>
                <Footer/>
                </div>
        );
    }
}