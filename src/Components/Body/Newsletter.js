import './newsletter.css'
import React from "react";

const Newsletter = () => {
   

    function handleClick () {
        alert("Thank you for subscribing to Digital Wave")
    }

    return (
        <section className="newsletter">
           <div className="container">
                <div className="newsletter_wrapper">
                    <div className="newsletter_content">
                        <h6 className="subtitle">Let's Work</h6>
                        <h2> Explore the <span className="highlight"> hidden </span>
                         gems and subscribe!</h2>
                    </div>
                    <div className="newsletter_form">
                        <input type="email" placeholder="Email" />
                        <button onClick={handleClick} className=" btn btn-secondary">
                            Subscribe Now
                            </button>
                            
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default Newsletter