
import About from "./About";
import Blog from "./Blog";
import Counter from "./Counter";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import Services from "./Services";
import Team from "./Team";
import Testimonial from "./Testimonial";

function Body() {
    return (
        <>
            <Hero />
            <Counter />
            <Services />
            <About />
            <Blog />
            <Team />
            <Testimonial />
            <Newsletter/>
            
        </>
    ) 
}
export default Body;