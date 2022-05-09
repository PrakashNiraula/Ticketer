import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, ListGroup, ListGroupItem } from 'reactstrap'
import Axios from 'axios'
import { Route,Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';
//import { Button } from 'reactstrap'
import SeatPicker from "react-seat-picker";
import Footer from './Footer'
import Header from './Header'


export default class VehicleRoute extends Component {
    constructor(props)
    {       super(props);
       this. state = {
            loading: false,
            selected:[],
            start:'Ilam',
                destination:'Jhapa',
                travel:'',
                date:'2020/02/22',
                busnumber:'AAA-333',
                editable:props.editable,
                 config:{
                 headers:{'Authorization':localStorage.getItem('token')}
                 }
          };
    
    }

    handleSubmit=(e)=>{

      Axios.post('http://localhost:3000/ticket',
      
      {
        schedule_id:localStorage.getItem("schedule_id"),
        buyer:localStorage.getItem("id"),
        seat_id:this.state.selected,
      

      }
      ,this.state.config)
      .then((res) => {
        console.log(res)
        

          this.setState({
            travel:'1'
          })
      }).catch((err) => console.log(err.response));






    }

   
    
      addSeatCallback = ({ row, number, id }, addCb) => {
        this.setState(
          {
            loading: true
          },
          async () => {
            await new Promise((resolve) => setTimeout(resolve, 100));
           // console.log(`Added seat ${number}, row ${row}, id ${id}`);
            // const newTooltip = `tooltip for id-${id} added by callback`;
            addCb(row, number, id);
            this.setState({ selected: [...this.state.selected, number] })
            this.setState({ loading: false });
            console.log(this.state.selected);
          }
        );
      };
    
    
      removeSeatCallback = ({ row, number, id }, removeCb) => {
        this.setState(
          {
            loading: true
          },
          async () => {
            await new Promise((resolve) => setTimeout(resolve, 100));
          //  console.log(`Removed seat ${number}, row ${row}, id ${id}`);
            // A value of null will reset the tooltip to the original while '' will hide the tooltip
            // const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
            removeCb(row, number);
            this.setState({selected: this.state.selected.filter(item => item !==number)});
          console.log(this.state.selected);
            this.setState({ loading: false });
          }
        );
      };
    
      render() {

        if(this.state.travel==1){
          return <Redirect to='/mytickets'/>
      }


        const rows = [
          [
            { id: 1, number: "a1" },
            { id: 2, number: "a2" },
            null,
            { id: 3, number: "b1" },
            { id: 4, number: "b2" }
          ],
          [
            { id: 5, number: "a3" },
            { id: 6, number: "a4" },
            null,
            { id: 7, number: "b3" },
            { id: 8, number: "b4" }
          ],
          [
            { id: 9, number: "a5" },
            { id: 10, number: "a6" },
            null,
            { id: 11, number: "b5" },
            { id: 12, number: "b6" }
          ],
          [
            { id: 13, number: "a7" },
            { id: 14, number: "a8" },
            null,
            { id: 15, number: "b7" },
            { id: 16, number: "b8" }
          ],
          [
            { id: 17, number: "a9" },
            { id: 18, number: "a10" },
            null,
            { id: 19, number: "b9" },
            { id: 20, number: "b10" }
          ],
          [
            { id: 21, number: "a11" },
            { id: 22, number: "a12" },
            null,
            { id: 23, number: "b11" },
            { id: 24, number: "b12" }
          ],
          [
            { id: 25, number: "a13" },
            { id: 26, number: "a14" },
            { id: 27, number: "a15" },
            { id: 28, number: "b13" },
            { id: 29, number: "b14" }
          ]
        ];
        const { loading } = this.state;
        return (
          <div>
  <Header/>
                    
      

                    <main>
                         
                    <section class="slider-area slider-area2">
                               <div class="slider-active">
                                  
                                   <div class="single-slider slider-height2">    
                    
                                   
                                               
                          </div>
                                </div>
                    

 <div className="container">
             <h3>Select seat you want to book</h3>
            <div style={{ marginTop: "20px" }}>

            <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-tittle text-center mt-40">
                        <SeatPicker
              
              addSeatCallback={this.addSeatCallback}
              removeSeatCallback={this.removeSeatCallback}
              rows={rows}
              maxReservableSeats={20}
              alpha
              visible
              selectedByDefault
              loading={loading}
              tooltipProps={{ multiline: true }}
            />

<div className="form-input pt-30">
      <div href="#" class="genric-btn primary circle arrow col-lg-2" block onClick={this.handleSubmit}>Book<span class="lnr lnr-arrow-right"></span></div>
                  
    </div>
                        </div>
                    </div>
                </div>
             




            </div>
            
          </div>

</section>
</main>

<Footer/>
          </div>
         
        );
      }
}
