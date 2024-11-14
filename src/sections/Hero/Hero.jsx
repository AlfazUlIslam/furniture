import { Container } from "../../containers"
import { SectionButton } from "../../components"
import { heroImage } from "../../assets"

const Hero = () => {
  return (
    // hero
    <section 
        id="hero"
        style={{backgroundImage: `url(${heroImage})`}}
        className="bg-center bg-cover bg-no-repeat"
    >
        <Container styles={`px-6 py-[150px] flex justify-end`}>
            {/* hero content */}
            <div className="w-[700px] rounded-[10px] 
            bg-mediumGray py-[40px] pl-[40px]">
                {/* hero content title */}
                <h6 className="mb-[20px] font-montserrat font-semibold 
                text-[16px] tracking-[3px] text-lightBlack">
                    New Arrival
                </h6>
                {/* hero content heading */}
                <h1 className="font-montserrat font-bold text-[52px] 
                leading-[65px] text-lightBlue">
                    Discover Our New Collection
                </h1>
                {/* hero content description */}
                <p className="mt-[20px] mb-[30px] font-montserrat 
                font-medium text-[18px] leading-[40px] text-lightBlack">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </p>
                {/* hero content button */}
                <SectionButton 
                    content={"BUY NOW"}
                />
            </div>
        </Container>
    </section>
  )
}
export default Hero