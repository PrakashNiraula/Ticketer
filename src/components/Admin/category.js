import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {Table} from 'reactstrap'
import Axios from 'axios'
import { Redirect } from 'react-router-dom';

export default class  extends Component {
     
        constructor(props) {
            super(props)
        
            this.state = {
                 category_name:'',
                 categories: [],
                 isregistered:false
                
            }
        }

            //to bring all the data from api can be call only once
    componentDidMount() {
        Axios.get('http://140.238.204.76:3005/category/getcategory',this.state.config)
            .then((res) => {

                this.setState({
                    categories: res.data
                })
            }).catch((err) => console.log(err.response));

    }
    handleChange = (e) =>
    this.setState({ [e.target.name]: e.target.value })
        
        handleChange=(e)=>this.setState({[e.target.category_name]:e.target.value})
        
        gotodash=(e)=>{
            e.preventDefault();
            this.setState({gotodash:true});
           
        }
        
        handleSubmit=(e)=>{
            e.preventDefault();
           // console.log(this.state);
           Axios.post('http://140.238.204.76:3005/category/createcategory',this.state)
           .then(res=>{
             console.log(res)
           e.label = "You aaded category successfully."
          // this.setState({status:true});
             this.setState({isregistered:true});
           }).catch(err=>console.log(err))
        
        }
        
            render() {
        
                if(this.state.gotologin){
                    return <Redirect to='/category'/>
                  }
              if(this.state.isregistered){
                return( <div>
        
                    <label>Success</label>
                    <Button block onClick={this.gotodash}>Go to Category</Button>
                
                </div>
                
                )
              }
              else{
                return(
     
     
     
     <div>

<nav class="navbar navbar-expand-md navbar-dark bg-primary text-white" />
      
      <i class="fa fa-gear fa-2x d-md-block d-none"></i><a href="index.html" class="text-white mt-1 ml-1"><h3> CMS</h3></a>
        
          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item px-2">
                <a href="adminhome.php" class="nav-link">Dashboard</a>
              </li>
              <li class="nav-item px-2"> 
                <a href="content.php" class="nav-link">Dash Contents</a>
              </li>
              <li class="active nav-item px-2">
                <a href="product.php" class="nav-link">Products</a>
              </li>
              <li class=" nav-item px-2">
                <a href="booking.php" class="nav-link">Bookings</a>
              </li>
              <li class="nav-item px-2">
                <a href="users.php" class="nav-link">Users</a>
              </li>
            </ul>
  
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown mr-3">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                  <i class="fa fa-user"></i> Welcome Admin
                </a>
                <div class="dropdown-menu">
                  <a href="profile.php" class="dropdown-item">
                    <i class="fa fa-user-circle"></i> Profile
                  </a>
                  <a href="settings.php" class="dropdown-item">
                    <i class="fa fa-gear"></i> Profile Settings
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a href="logout.php" class="nav-link">
                  <i class="fa fa-user-times"></i> Logout
                </a>
              </li>
            </ul>
          </div>
   
     <form method="post" enctype="multipart/form-data" />
  
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
                                    {this.state.categories.map(categories => (
                                        <tr>
                                          
                                            <td ><h3>{categories.category_id}</h3></td>
                                            <td ><h3>{categories.category_name}</h3></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>

                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

    )
  }
}
}
