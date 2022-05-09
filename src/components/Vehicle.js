
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import AdminHeader from './HeaderAdmin'
import Footer from './Footer'


export default class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: '',
            vehicle_number:'',
            travel:'',
            config:{
               headers:{'Authorization':localStorage.getItem('token')}
                }
            
        }
    }

    handleChange=(e)=>this.setState({[e.target.name]:e.target.value});

    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('myfile', this.state.profileImg)
        axios.post("http://localhost:3000/upload", formData, this.state.config).then(res => {
        axios.post("http://localhost:3000/vehicle", {
            vehicle_type:'Bus',
            vehicle_number:this.state.vehicle_number,
            image:res.data.path,
            owner:localStorage.getItem('id')
        }, this.state.config).then((res)=>{
            localStorage.setItem('vehicle_id',res.data._id);
            axios.post(`http://localhost:3000/users/${localStorage.getItem('id')}/vehicles`,{_id:res.data._id},this.state.config).then(res=>{

                this.setState({travel:1});
            })
        })
            
        })
    }


    render() {
        if(this.state.travel==1){
            return <Redirect to='/schedule'/> 
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

<div className="container">
<div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-8">
                        <div class="section-tittle text-center mb-55">
                            <h2>Add details for new vehicle</h2>
                        </div>
                    </div>
                </div>


<Form onSubmit={this.onSubmit} >

<div className="form-input">
                    <label htmlFor="start"><h3>Bus number</h3></label>
                    {/* <Input type="text" name="start" id="start" placeholder="" value={this.state.start} onChange={this.handleChange}/> */}
                    <input type="text" name="vehicle_number" placeholder="vehicle number" onfocus="this.placeholder = ''" onblur="this.placeholder = 'vehicle number'" required="" class="single-input"  value={this.state.vehicle_number} onChange={this.handleChange}></input>
      </div>
    
{/* <FormGroup>
<Label for="start">Enter Bus Number</Label>
<Input type="text" name="vehicle_number" id="vehicle_number"  value={this.state.vehicle_number} onChange={this.handleChange}/>
</FormGroup> */}


<div className="form-input">
                    <label htmlFor="start"><h3>Choose a picture</h3></label>
                    {/* <Input type="text" name="start" id="start" placeholder="" value={this.state.start} onChange={this.handleChange}/> */}
                    <input type="file" name="vehicle_number"  class="single-input"   onChange={this.onFileChange}></input>
      </div>
      <br/>
      <br/>


{/* <FormGroup>
<Label for="start">Chosse a picture mage</Label>
<Input type="file" onChange={this.onFileChange}/>
</FormGroup> */}

<button className="btn btn-primary" type="submit">Add data</button>
{/* <div type="submit" class="genric-btn primary circle arrow col-lg-2" block >Add data<span class="lnr lnr-arrow-right"></span></div> */}
                    
  
</Form>
</div>
</main>
<Footer/>

            </div>
            
           
        )
    }
}









