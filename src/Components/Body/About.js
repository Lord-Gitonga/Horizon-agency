import React from "react";
import './About.css'
import aboutImg from '../../images/about-us.jpg'

const chooseData = [
    {
        icon: 'ri-wifi-line',
        title: 'First working process',
        description: 'Digital-Wave agency specializes in creating and implementing marketing strategies to promote brands across various digital channels. We provide a range of services, including social media management, search engine optimization (SEO), pay-per-click (PPC) advertising, content marketing, email marketing, and web design. Our main goal is to increase brand visibility, attract and retain customers, and ultimately drive sales and revenue growth for our clients.We work closely with our clients to understand their brand, target audience, and business goals, and use data-driven insights to develop effective marketing campaigns that deliver measurable results.'
    },
    {
        icon: 'ri-team-line',
        title: 'Dedicated Team',
        description: 'Digital-Wave agency specializes in creating and implementing marketing strategies to promote brands across various digital channels. We provide a range of services, including social media management, search engine optimization (SEO), pay-per-click (PPC) advertising, content marketing, email marketing, and web design. Our main goal is to increase brand visibility, attract and retain customers, and ultimately drive sales and revenue growth for our clients.We work closely with our clients to understand their brand, target audience, and business goals, and use data-driven insights to develop effective marketing campaigns that deliver measurable results.'
    },
    {
        icon: 'ri-customer-service-2-line',
        title: 'Around the clock support',
        description: 'Digital-Wave agency specializes in creating and implementing marketing strategies to promote brands across various digital channels. We provide a range of services, including social media management, search engine optimization (SEO), pay-per-click (PPC) advertising, content marketing, email marketing, and web design. Our main goal is to increase brand visibility, attract and retain customers, and ultimately drive sales and revenue growth for our clients.We work closely with our clients to understand their brand, target audience, and business goals, and use data-driven insights to develop effective marketing campaigns that deliver measurable results.'
    },
    
]

function About() {
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
                            {chooseData.map((item,index) => (
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