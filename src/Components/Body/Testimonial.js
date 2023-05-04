import './testimonial.css'
import React from "react";
import Slider from "react-slick";
import ava01 from "../../images/ava-1.jpg"
import ava02 from "../../images/ava-2.jpg"
import ava03 from "../../images/ava-3.jpg"

const Testimonial = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    }

    return (
        <section>
            <div className="container">
                <div className="slider_content-top">
                    <h6 className="subtitle">Testimonials</h6>
                    <h2>
                        Trusted by more than
                        <span className="highlight"> 5,000 customers </span>
                    </h2>
                </div>

                <div className="slider_wrapper">
                    <Slider {...settings}>
                        <div className="slider_item">
                            <p className="description">
                                "I've been working with this digital agency for over a year now, and I have to say, their marketing team has truly exceeded my expectations. They helped me build a strong online presence for my business by developing a comprehensive marketing strategy that included social media marketing, search engine optimization, and pay-per-click advertising. Their team is knowledgeable, creative, and always willing to go the extra mile to ensure that my business is successful. Thanks to their efforts, I've seen a significant increase in website traffic, leads, and conversions. I highly recommend this digital agency to any business looking to take their online marketing to the next level."
                            </p>
                            <div className="customer_details">
                                <div className="customer_img">
                                    <img src={ava01} alt="" />
                                </div>

                                <div>
                                    <h5 className="customer_name">John Doe</h5>
                                    <p className="description">CEO, Workcreation</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="slider_item">
                            <p className="description">
                                "I've been working with this digital agency for over a year now, and I have to say, their marketing team has truly exceeded my expectations. They helped me build a strong online presence for my business by developing a comprehensive marketing strategy that included social media marketing, search engine optimization, and pay-per-click advertising. Their team is knowledgeable, creative, and always willing to go the extra mile to ensure that my business is successful. Thanks to their efforts, I've seen a significant increase in website traffic, leads, and conversions. I highly recommend this digital agency to any business looking to take their online marketing to the next level."
                            </p>
                            <div className="customer_details">
                                <div className="customer_img">
                                    <img src={ava02} alt="" />
                                </div>

                                <div>
                                    <h5 className="customer_name">Ann White</h5>
                                    <p className="description">Sr. Software Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="slider_item">
                            <p className="description">
                                "I've been working with this digital agency for over a year now, and I have to say, their marketing team has truly exceeded my expectations. They helped me build a strong online presence for my business by developing a comprehensive marketing strategy that included social media marketing, search engine optimization, and pay-per-click advertising. Their team is knowledgeable, creative, and always willing to go the extra mile to ensure that my business is successful. Thanks to their efforts, I've seen a significant increase in website traffic, leads, and conversions. I highly recommend this digital agency to any business looking to take their online marketing to the next level."
                            </p>
                            <div className="customer_details">
                                <div className="customer_img">
                                    <img src={ava03} alt="" />
                                </div>

                                <div>
                                    <h5 className="customer_name">Gary Cahill</h5>
                                    <p className="description">Sr. Product Designer</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Testimonial