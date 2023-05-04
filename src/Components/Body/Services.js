import React from "react";
import './Services.css'

const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'App Development',
        description: 'Digital-Wave specializes in creating mobile applications that are designed to promote products and services for businesses. We provide end-to-end app development services, including ideation, design, development, testing, and deployment. Our primary goal is to create engaging and user-friendly apps that can help businesses attract and retain customers, increase brand awareness, and drive sales.'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Design',
        description: 'Digital-Wave specializes in creating visually appealing and user-friendly websites that are designed to promote products and services for businesses. We provide end-to-end web design services, including web development, web hosting, and website maintenance. Our primary goal is to create websites that can help businesses attract and retain customers, increase brand awareness, and drive sales.'
    }, 
    {
        icon: 'ri-landscape-line',
        title: 'Graphics Design',
        description: 'Digital-wave specializes in creating visually stunning and effective designs that are designed to promote products and services for businesses. We provide a range of graphics design services, including logo design, brand identity design, marketing materials design, packaging design, and more. Our primary goal is to create designs that can help businesses stand out from the competition, communicate their brand message effectively, and drive sales.'
    }, 
    {
        icon: 'ri-rocket-line',
        title: 'Digital Marketing',
        description: 'Digital-Wave specializes in creating and implementing online marketing strategies that are designed to promote products and services for businesses. We provide a range of digital marketing services, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, content marketing, and more. Our primary goal is to create marketing campaigns that can help businesses attract and retain customers, increase brand awareness, and drive sales.'
    }
]

function Services() {
    return (
       <section id="service">
            <div className="container">
                <div className="services_top-content">
                    <h6 className="subtitle">Our Services</h6>
                    <h2>Save time managing your business</h2>
                    <h2 className="highlight">with our best services</h2>
                </div>

                <div className="service_item-wrapper">
                    {
                        serviceData.map((item, index) => (
                            <div className="services_item" key={index}>
                        <span className="service_icon">
                            <i class={item.icon}></i>
                        </span>
                                <h3 className="service_title">{item.title}</h3>
                                <p className="description">{item.description}</p>
                    </div>
                        ))
                    }
                    
                </div>
            </div>
       </section> 
    )
}
export default Services;