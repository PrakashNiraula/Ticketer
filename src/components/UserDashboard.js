import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default class UserDashboard extends Component {
    render() {
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
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src="assets/img/gallery/topic1.jpg" alt=""/>
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3><a href="#">Kathmandu to Pokhara</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src="assets/img/gallery/topic2.jpg" alt=""/>
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3><a href="#">Pokhara to Butwal</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src="assets/img/gallery/topic3.jpg" alt=""/>
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3><a href="#">Birjung to Bhairawa</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src="assets/img/gallery/topic4.jpg" alt=""/>
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3><a href="#">Jhapa to Kathmandu</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src="assets/img/gallery/topic5.jpg" alt=""/>
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3><a href="#">Mahendranagar to Palpa</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src="assets/img/gallery/topic6.jpg" alt=""/>
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3><a href="#">Dharan to Diktel</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src="assets/img/gallery/topic7.jpg" alt=""/>
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3><a href="#">Katari to Kathmandu</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-topic text-center mb-30">
                            <div class="topic-img">
                                <img src="assets/img/gallery/topic8.jpg" alt=""/>
                                <div class="topic-content-box">
                                    <div class="topic-content">
                                        <h3><a href="#">Salyan to Khaptad</a></h3>
                                    </div>
                                </div>
                            </div>
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
