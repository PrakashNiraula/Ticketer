import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {Table} from 'reactstrap'
import Axios from 'axios'
import { Redirect } from 'react-router-dom';

export default class  extends Component {
     
        constructor(props) {
            super(props)
        
            this.state = {
                 subcategory_name:'',
                 subcategories: [],
                 isregistered:false
                
            }
        }

            //to bring all the data from api can be call only once
    componentDidMount() {
        Axios.get('http://140.238.204.76:3005/subcategory/getsubcategory',this.state.config)
            .then((res) => {

                this.setState({
                    subcategories: res.data
                })
            }).catch((err) => console.log(err.response));

    }
    handleChange = (e) =>
    this.setState({ [e.target.name]: e.target.value })
        
        handleChange=(e)=>this.setState({[e.target.subcategory_name]:e.target.value})
        
        gotodash=(e)=>{
            e.preventDefault();
            this.setState({gotodash:true});
           
        }
        
        handleSubmit=(e)=>{
            e.preventDefault();
           // console.log(this.state);
           Axios.post('http://140.238.204.76:3005/subcategory/createsubcategory',this.state)
           .then(res=>{
             console.log(res)
           e.label = "You aaded subcategory successfully."
          // this.setState({status:true});
             this.setState({isregistered:true});
           }).catch(err=>console.log(err))
        
        }
        
            render() {
        
                if(this.state.gotodash){
                    return <Redirect to='/subcategory'/>
                  }
              if(this.state.isregistered){
                return( <div>
        
                    <label>Success</label>
                    <Button block onClick={this.gotodash}>Go to Subcategory</Button>
                
                </div>
                
                )
              }
              else{
                return(
     
     
     
     <div>

   
     {/* <form method="post" enctype="multipart/form-data" />
  
                  <div class="container">
                  <h4> Add Category </h4>
                  <div class="form-group">
                    <label for="name">Category Name</label>
                    <input type="text" class="form-control" name="product_name" id="category_name" placeholder="" value={this.state.category_name} onChange={this.handleChange}/>
                  </div>
                  {/* <div className="form-group">
                    <label for="name">Category Name</label>
                    <Input type="text" class="form-control" name="category_name" id="category_name" placeholder="" value={this.state.category_name} onChange={this.handleChange} />
                </div> */}

<form>
  <div class="form-group">
    <label for="name">subcategory Name</label>
    <input type="text" class="form-control" id="subcategory_name" placeholder="Enter subcategory name" value={this.state.category_name} onChange={this.handleChange} />
  </div>
  </form>
               
<Button color='primary' block onClick={this.handleSubmit}>Submit</Button> 
    

        <section id="posts" />
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <div class="card">
                  <div class="card-header">
                    <h4>All categories</h4>
                  </div>
                  
                  <Table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Category Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.subcategories.map(subcategories => (
                                        <tr>
                                          
                                            <td ><h3>{subcategories.subcategory_id}</h3></td>
                                            <td ><h3>{subcategories.subcategory_name}</h3></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>

                  </div>
                  </div>
              </div>
            </div>
          </div>


    )
  }
}
}
