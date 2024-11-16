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
        <Container styles={`px-6 py-[50px] flex justify-center 
            md:justify-end md:py-[100px] xl:py-[150px]`}>
            {/* hero content */}
            <div className="w-[300px] rounded-[10px] 
            bg-mediumGray py-[40px] px-[40px] md:w-[400px] 
            md:px-[20px] md:py-[20px] lg:px-[40px] lg:py-[40px] 
            xl:w-[700px]">
                {/* hero content title */}
                <h6 className="mb-[10px] font-montserrat font-semibold 
                text-[12px] tracking-[3px] text-lightBlack text-center 
                xl:mb-[20px] xl:text-[16px] xl:text-start">
                    New Arrival
                </h6>
                {/* hero content heading */}
                <h1 className="font-montserrat font-bold text-[30px] 
                leading-[45px] text-lightBlue text-center xl:text-[52px] 
                xl:leading-[65px] xl:text-start">
                    Discover Our New Collection
                </h1>
                {/* hero content description */}
                <p className="mt-[10px] mb-[20px] font-montserrat 
                font-medium text-[14px] leading-[25px] text-lightBlack 
                text-center xl:mt-[20px] xl:mb-[30px] xl:text-[18px] 
                xl:leading-[40px] xl:text-start">
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