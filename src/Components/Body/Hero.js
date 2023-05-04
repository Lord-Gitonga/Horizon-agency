import React,{useState} from "react";
import './Hero.css'
import heroDarkimg from '../../images/hero-img.png'

function Hero() {

    const [showForm, setShowForm]= useState(false);
    const [email, setEmail] = useState("")
    function handleform(){
       return setShowForm(true);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlesubmit= (e) =>{
        e.preventDefault();
        console.log('Email:', email)
    }
    return (
         <section className="hero_section">
            <div className="container">
                <div className="hero_wrapper">
                    <div className="hero_content">
                        <div>
                            <h2>We Create Perfect</h2>
                            <h2>Digital Products To</h2>
                             <h2 className="highlight">Promote Your Brand</h2> 
                        </div>
                        <p className="description">
                            Digital-Wave agency specializes in creating and implementing marketing strategies to promote brands across various digital channels. We provide a range of services, including social media management, search engine optimization (SEO), pay-per-click (PPC) advertising, content marketing, email marketing, and web design. Our main goal is to increase brand visibility, attract and retain customers, and ultimately drive sales and revenue growth for our clients.We work closely with our clients to understand their brand, target audience, and business goals, and use data-driven insights to develop effective marketing campaigns that deliver measurable results.
                        </p> 
                        <div className="hero_btns">
                            <button className="primary_btn" onClick={handleform}>Get Started Now</button>
                            {showForm && (<form>
                                <div className="form">
                                <label>Email</label>
                                <input placeholder="add email" value={email} onChange={handleEmailChange}></input>
                                </div>
                                <button onSubmit={handlesubmit}>submit</button>
                            </form>)}
                            <button className="secondary_btn">Discover More</button>
                        </div>
                    </div>

                    <div className="hero_img">
                        <img src={heroDarkimg} alt="hero-img"/>
                    </div>
                </div> 
            </div>
        </section>
    )
}
export default Hero;