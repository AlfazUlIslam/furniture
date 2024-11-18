import { Container } from "../../containers"
import { Feature } from "../../components"
import { truck, twentyFourSeven, shield } from "../../assets"

const Features = () => {
  return (
    // features
    <section 
        id="features"
        className="bg-lightGray"
    >
        <Container styles={`px-6 py-[30px] flex flex-col 
        items-center gap-[50px] sm:py-[50px] sm:gap-[80px]  
        md:py-[30px] md:flex-row md:justify-between md:gap-0 
        xl:py-[50px]`}>
            <Feature 
                image={truck}
                altText={"Truck"}
                title={"Free Delivery"}
                desc={"Lorem ipsum dolor sit amet"}
            />
            <Feature 
                image={twentyFourSeven}
                altText={"24/7 Image"}
                title={"Support 24/7"}
                desc={"Lorem ipsum dolor sit amet"}
            />
            <Feature 
                image={shield}
                altText={"Shield"}
                title={"100% Authentic"}
                desc={"Lorem ipsum dolor sit amet"}
            />
        </Container>
    </section>
  )
}
export default Features