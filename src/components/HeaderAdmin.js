import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export default class Header extends Component {



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
                                                <li ><Link to="/dashboard">Home</Link></li>
                                              
                                                {/* <li><Link to="/sales">Sales</Link></li> */}
                                                <li><Link to="/route">Add new</Link></li>
                                                <li><Link to="/">Logout</Link></li>
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


                
            </div>
          
        )
    }
}
