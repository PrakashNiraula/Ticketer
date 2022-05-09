import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, ListGroup, ListGroupItem } from 'reactstrap'
import Axios from 'axios'
import { Route,Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { Redirect } from 'react-router-dom';
//import { Button } from 'reactstrap'

export default class VehicleRoute extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            start:'',
            destination:'',
            departuredate:'',
             config:{
                 headers:{'Authorization':localStorage.getItem('token')}
             },
             travel:'',
             schedule:[],
             route:[],
             vehicle:[]
        }
    }

    componentDidMount(){

    }

handleChange=(e)=>{
    this.setState({
     
      [e.target.name]:e.target.value

    })
  }

  handleSelection=(id)=>{
    localStorage.setItem("schedule_id",id);
    this.setState({travel:'1'});
  }


  


handleSubmit=(e)=>{

    e.preventDefault();

const date=this.state.departuredate;

Axios.get('http://localhost:3000/schedule/search/'+date,this.state.config).then(res=>{



// res.data.forEach(schedule => {
// const v_id=schedule.vehicle_id;
// Axios.get('http://localhost:3000/vehicle'+v_id,this.state.config).then(vehicle=>{
// console.log(vehicle);



// })


    
// });


    this.setState({schedule:res.data});






    
//     res.data.map(schedule=>{

//         Axios.get('http://localhost:3000/vehicle/'+schedule.vehicle_id,this.state.config).then(res=>{
//     this.setState({ vehicle: [...this.state.vehicle, res.data] })
    
// })

// Axios.get('http://localhost:3000/route/'+schedule.route_id,this.state.config).then(res=>{
    
//     this.setState({ route: [...this.state.route, res.data] })
//   //  console.log(this.state.route);


// })

//  })

})





}
    
    render() {

        if(this.state.travel=='1'){
            return <Redirect to='/show'/>
        }


        return (
            <div>
                  <Header/>
                    
      

<main>
     
<section class="slider-area slider-area2">
           <div class="slider-active">
              
               <div class="single-slider slider-height2">    

               
                           
      </div>
            </div>

              
       </section>
       <div class="topic-area">
           <div class="container">
               <div class="row justify-content-center">
                   <div class="col-xl-7 col-lg-8">
                       <div class="section-tittle text-center mb-55">
                           <h2>Explore top routes</h2>
                            <div class="col-lg-12">
                        <div class="blog_right_sidebar">
                            <div class="single_sidebar_widget search_widget">
                                <form action="#">
                                    <div class="form-group">
                                        <div class="input-group mb-3">
                                            <input type="date" class="form-control" name="departuredate" placeholder='Ticket For'
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Search Keyword'"
                                            value={this.state.departuredate} onChange={this.handleChange}/>


                                            <input type="text" class="form-control" name="start" placeholder='Start'
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Start from'"
                                            value={this.state.start} onChange={this.handleChange}/>




                                            <input type="text" class="form-control" name="destination" placeholder='Destination'
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Destination'"
                                            value={this.state.destination} onChange={this.handleChange}/>
                                           
                                        </div>
                                    </div>
                                   
                                    <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                    type="submit" onClick={this.handleSubmit}>Search</button>
                                </form>
                            </div></div></div>
                       </div>
                   </div>
               </div>
               
               <div class="row justify-content-center">
                   <div class="col-xl-12">
                       <div class="section-tittle text-center mt-20">
                           <Link to="#" class="border-btn">View More</Link>
                       </div>
                   </div>
               </div>
           </div>
       </div>

       <div >
          {
     this.state.schedule.map((schedule,index)=>{
         console.log(this.state)

       

 return <div key={schedule._id}class="container"  onClick={() => this.handleSelection(schedule._id)}>
         

                <div class="col-lg-3" >
                        <div class="properties properties2 mb-30">
                            <div class="properties__card"  >
                                
                                <div class="properties__caption">
                                    {/* <p>{this.state.schedule[index]._id}</p> */}
                                    <h3><a href="#">{"For "+this.state.schedule[index].departure_date.split("T")[0]}</a></h3>
                                    <p >
                                        {
                                            "Leaving at "+this.state.schedule[index].departure_time
                                        }
                                    </p>
                                    <div class="properties__footer d-flex justify-content-between align-items-center">
                                        {/* <div class="restaurant-name">
                                            <div class="rating">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star-half"></i>
                                            </div>
                                            <p><span>(4.5)</span> based on 120</p>
                                        </div> */}
                                        {/* <div class="price">
                                            <span>$135</span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



     </div>










        
    

     })
    }
    </div>

      
       
       <div class="services-area services-area2 section-padding40">
           <div class="container">
               <div class="row justify-content-sm-center">
                   <div class="col-lg-4 col-md-6 col-sm-8">
                       <div class="single-services mb-30">
                           <div class="features-icon">
                               <img src="assets/img/icon/icon1.svg" alt=""/>
                           </div>
                           <div class="features-caption">
                               <h3>Easy Booking</h3>
                               <p>Book ticket from anywhere at anytime</p>
                           </div>
                       </div>
                   </div>
                   <div class="col-lg-4 col-md-6 col-sm-8">
                       <div class="single-services mb-30">
                           <div class="features-icon">
                               <img src="assets/img/icon/icon2.svg" alt=""/>
                           </div>
                           <div class="features-caption">
                               <h3>Cancel Anytime</h3>
                               <p>Tickets can be cancelled at anytime from anywhere</p>
                           </div>
                       </div>
                   </div>
                   <div class="col-lg-4 col-md-6 col-sm-8">
                       <div class="single-services mb-30">
                           <div class="features-icon">
                               <img src="assets/img/icon/icon3.svg" alt=""/>
                           </div>
                           <div class="features-caption">
                               <h3>Easy payment</h3>
                               <p>Pay online via E-sewa or pay cash on travel</p>
                           </div>
                       </div>
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
