import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Redirect,Link } from 'react-router-dom';

export default class MainIndex extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
             travel:null
        }
    }



    render() {
        return (
            <div>
               
        
                <section className="slider-area ">
            <div className="slider-active">
               
                <div className="single-slider slider-height d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 col-md-12">
                                <div className="hero__caption">
                                    <h1 data-animation="fadeInLeft" data-delay="0.2s">Online booking<br/> platform</h1>
                                    <p data-animation="fadeInLeft" data-delay="0.4s">Nationwide bus ticket booking app</p>
                                    <Link to="/register" className="btn hero-btn" data-animation="fadeInLeft" data-delay="0.7s">Join for Free and sell with us</Link>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>
            </div>
        </section>
        <div className="services-area">
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services mb-30">
                            <div className="features-icon">
                                <img src="assets/img/icon/icon1.svg" alt=""/>
                            </div>
                            <div className="features-caption">
                                <h3>60+ Cities</h3>
                                <p>Our buses travel to more than 60 cities around the country.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services mb-30">
                            <div className="features-icon">
                                <img src="assets/img/icon/icon2.svg" alt=""/>
                            </div>
                            <div className="features-caption">
                                <h3>1000+ buses</h3>
                                <p>Around 1000+ buses are departed everyday from 60+ cities serving infinite </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services mb-30">
                            <div className="features-icon">
                                <img src="assets/img/icon/icon3.svg" alt=""/>
                            </div>
                            <div className="features-caption">
                                <h3>Easy booking</h3>
                                <p>Book on the go and travel with ease</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>


        <div className="courses-area section-padding40 fix">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-tittle text-center mb-55">
                            <h2>Our featured buses</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="properties properties2 mb-30">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="assets/img/gallery/featured1.jpg" alt=""/></a>
                                </div>
                                <div className="properties__caption">
                                    <p>Super Deluxe</p>
                                    <h3><a href="#">Kathmandu-Pokhara</a></h3>
                                    <p>Women crew available to help from serving to drinks to managing the seats for passengers. Come and enjoy along with drinks.
                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="restaurant-name">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half"></i>
                                            </div>
                                            <p><span>(4.5)</span> based on 120</p>
                                        </div>
                                        <div className="price">
                                            <span>Rs 3500</span>
                                        </div>
                                    </div>
                                    <a href="#" className="border-btn border-btn2">Find out more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="properties properties2 mb-30">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="assets/img/gallery/featured2.jpg" alt=""/></a>
                                </div>
                                <div className="properties__caption">
                                    <p>AC/Deluxe</p>
                                    <h3><a href="#">To different cities</a></h3>
                                    <p>Feel the comfort of travel with along with the air conditioning service available along with the great view with individiual passenger lights. 
                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="restaurant-name">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half"></i>
                                            </div>
                                            <p><span>(4.5)</span> based on 120</p>
                                        </div>
                                        <div className="price">
                                            <span>Rs 2000</span>
                                        </div>
                                    </div>
                                    <a href="#" className="border-btn border-btn2">Find out more</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="properties properties2 mb-30">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="assets/img/gallery/featured3.jpg" alt=""/></a>
                                </div>
                                <div className="properties__caption">
                                    <p>Deluxe</p>
                                    <h3><a href="#">All around the nation</a></h3>
                                    <p>Super cozy seats and the service of wifi with tv and music stream 24/7 by driver. Driver likes dohori songs and plays continuously. 
                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="restaurant-name">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half"></i>
                                            </div>
                                            <p><span>(4.5)</span> based on 120</p>
                                        </div>
                                        <div className="price">
                                            <span>From Rs 800</span>
                                        </div>
                                    </div>
                                    <a href="#" className="border-btn border-btn2">Find out more</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                  
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-tittle text-center mt-40">
                            <a href="#" className="border-btn">Load More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


<Footer/>
            </div>
        )
    }
}
