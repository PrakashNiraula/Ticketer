import React from 'react';
// import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import Register from './components/register';
import Admindash from './components/Admin/admindash'
import Category from './components/Admin/category'
import Subcategory from './components/Admin/subcategory'
import City from './components/Admin/city'
import Property from './components/Admin/property'
//import {Jumbotron,Button} from 'reactstrap'



function App() {
  return (
<div>

  <BrowserRouter>
<Switch>
{/* <Route path='/' exact component={Home}/> */}
 
  <Route path='/login' component={Login}/> 
  <Route path='/adminlogin' component={AdminLogin}/> 
  <Route path='/register' component={Register}/>
  <Route path='/admindash' component={Admindash}/>
  <Route path='/category' component={Category}/>
  <Route path='/subcategory' component={Subcategory}/>
  <Route path='/city' component={City}/>
  <Route path='/property' component={Property}/>
  {/* <PrivateRoute path='/schedule' component={Schedule}/> 
  <PrivateRoute path='/dashboard' component={Dashboard}/> 
  <PrivateRoute path='/route' component={VehicleRoute}/> 
  <PrivateRoute path='/vehicle' component={Vehicle}/> */}
  {/* <PrivateRoute path='/mybuses' component={Buses}/>  */}
  {/* <PrivateRoute path='/mytickets' component={MyTickets}/>
  <PrivateRoute path='/user' component={UserDashboard}/>
  <PrivateRoute path='/search' component={SearchBuses}/>
  <PrivateRoute path='/show' component={ShowBusDetails}/> */}

</Switch>
 </BrowserRouter>
</div>


  );
}

export default App;
