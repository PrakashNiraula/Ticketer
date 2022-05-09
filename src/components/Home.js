import React, { Component } from 'react'
import {NavDropdown,NavLink,Button } from 'react-bootstrap'
import Login from './Login'
// import {BrowserRouter} from ReactDOM;
import Header from './Header'
import Footer from './Footer'
import MainIndex from './MainIndex'
import Register from './Register'
import Vehicle from './Vehicle'
import Schedule from './Schedule'
import SearchBuses from './SearchBuses'
import ShowBusDetails from './ShowBusDetails'
import VehicleRoute from './VehicleRoute'
import TestComponent from './TestComponents'
import { Link } from 'react-router-dom'



export default class Home extends Component {
    render() {
        return (

            <div>

<div className="header-area header-transparent">
            <div className="main-header ">
                <div className="header-bottom  header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                          
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo">
                                    <Link to="/"><img src="assets/img/logo/logo.png" alt=""/></Link>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10">
                                <div className="menu-wrapper d-flex align-items-center justify-content-end">
                                    
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">                                                                                          
                                                <li className="active" ><Link to={{pathname: '/'}}>Welcome</Link></li>
                                                {/* <li><a href="courses.html">Courses</a></li>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="#">Blog</a>
                                                    <ul className="submenu">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog_details.html">Blog Details</a></li>
                                                        <li><a href="elements.html">Element</a></li>
                                                    </ul>
                                                </li> */}
                                                {/* <li><Link to='/contactus'>Contact</Link></li> */}
                                               
                                                <li className="button-header margin-left " >
                                                    
                                                    <Link to="/register" className="btn btn3"  id="register">Join</Link>
                                                    
                                                    

                                                {/* <Link to="/login" replace >Join</Link> */}
                                                    </li>
                                                <li className="button-header"><Link to='/login' className="btn btn3" id="login" >Log in</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div> 
                           
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <MainIndex/>
    
            </div>
        )
    }
}
