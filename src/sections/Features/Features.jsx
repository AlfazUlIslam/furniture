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
        <Container styles={`px-6 py-[50px] flex justify-between 
        items-center`}>
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