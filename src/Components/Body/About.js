import React, {useEffect,useState} from "react";
import './About.css'
import aboutImg from '../../images/about-us.jpg'
function About() {
const[items, setItems]=useState([])
    useEffect(() => (
        fetch(' http://localhost:3000/chooseData')
            .then((response) => response.json())
        .then((data)=>setItems(data))
), [])
    
    return (
        <section id="about">
            <div className="container">
                <div className="about_wrapper">
                    <div className="about_content">
                        <h6 className="subtitle">Why Choose Us</h6>
                        <h2>Specialists in providing clients with</h2>
                        <h2 className="highlight">financial solutions</h2>
                        <p className="description about_content-desc">
                           Digital-Wave has a team of experienced  developers who use the latest technology and best practices to build apps that are fast, reliable, and scalable. We work closely with their clients to understand their business needs, target audience, and marketing goals, and use that information to create customized app solutions that are tailored to their specific requirements.
                        </p>
                        
                        <div className="choose_item-wrapper">
                            {items.map((item,index) => (
                             <div className="choose_us-item" key={index}>
                                 <span className="choose_us-icon">
                                    <i class={item.icon}></i>
                                 </span>
                                  <div>
                                    <h4 className="choose_us-title">{item.title}</h4>
                                    <p className="description">{item.description}</p>
                                  </div>
                               </div>
                            ))}
                        </div>
                    </div>

                    <div className="about_img">
                        <img src={aboutImg} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;