import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import VehicleRoute from './components/VehicleRoute';
import Schedule from './components/Schedule';
import Vehicle from './components/Vehicle';

import MyTickets from './components/MyTickets';
import PrivateRoute from './components/PrivateRoute';
import UserDashboard from './components/UserDashboard'
import SearchBuses from './components/SearchBuses';
import AdminHeader from './components/HeaderAdmin';
import ShowBusDetails from './components/ShowBusDetails'
//import {Jumbotron,Button} from 'reactstrap'



function App() {
  return (
<div>

  <BrowserRouter>
<Switch>
<Route path='/' exact component={Home}/>
  <Route path='/register' component={Register}/> 
  <Route path='/login' component={Login}/> 
  <PrivateRoute path='/schedule' component={Schedule}/> 
  <PrivateRoute path='/dashboard' component={Dashboard}/> 
  <PrivateRoute path='/route' component={VehicleRoute}/> 
  <PrivateRoute path='/vehicle' component={Vehicle}/>
  {/* <PrivateRoute path='/mybuses' component={Buses}/>  */}
  <PrivateRoute path='/mytickets' component={MyTickets}/>
  <PrivateRoute path='/user' component={UserDashboard}/>
  <PrivateRoute path='/search' component={SearchBuses}/>
  <PrivateRoute path='/show' component={ShowBusDetails}/>

</Switch>
 </BrowserRouter>
</div>


  );
}

export default App;
