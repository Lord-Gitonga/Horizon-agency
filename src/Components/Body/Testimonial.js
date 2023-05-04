import './testimonial.css'
import React from "react";
import Slider from "react-slick";
import ava01 from "../images/ava-1.jpg"
import ava02 from "../images/ava-2.jpg"
import ava03 from "../images/ava-3.jpg"

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
                                Quisque tristique leo nisi, non consectetur elit bibendum
                                sit amet. Ut porta leo sed semper feugiat. Proin vitae
                                sodales urna. Aenean lacinia semper turpis quis sagittis.
                                Suspendisse tempus purus eget sem venenatis varius
                                facilisis sed purus. Mauris in bibendum neque. Nulla eu
                                consequat mauris, ut ultrices turpis. Etiam ut risus sit
                                amet lorem pellentesque mattis ut id nunc.
                                In ultrices ultrices malesuada. Duis malesuada, purus non
                                lobortis sodales, arcu arcu pretium dui, at mattis purus
                                nunc nec erat. Fusce convallis ante quis orci rutrum.
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
                                Quisque tristique leo nisi, non consectetur elit bibendum
                                sit amet. Ut porta leo sed semper feugiat. Proin vitae
                                sodales urna. Aenean lacinia semper turpis quis sagittis.
                                Suspendisse tempus purus eget sem venenatis varius
                                facilisis sed purus. Mauris in bibendum neque. Nulla eu
                                consequat mauris, ut ultrices turpis. Etiam ut risus sit
                                amet lorem pellentesque mattis ut id nunc.
                                In ultrices ultrices malesuada. Duis malesuada, purus non
                                lobortis sodales, arcu arcu pretium dui, at mattis purus
                                nunc nec erat. Fusce convallis ante quis orci rutrum.
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
                                Quisque tristique leo nisi, non consectetur elit bibendum
                                sit amet. Ut porta leo sed semper feugiat. Proin vitae
                                sodales urna. Aenean lacinia semper turpis quis sagittis.
                                Suspendisse tempus purus eget sem venenatis varius
                                facilisis sed purus. Mauris in bibendum neque. Nulla eu
                                consequat mauris, ut ultrices turpis. Etiam ut risus sit
                                amet lorem pellentesque mattis ut id nunc.
                                In ultrices ultrices malesuada. Duis malesuada, purus non
                                lobortis sodales, arcu arcu pretium dui, at mattis purus
                                nunc nec erat. Fusce convallis ante quis orci rutrum.
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