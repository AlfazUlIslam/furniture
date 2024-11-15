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
        {/* py-[150px] justify-end */}
        <Container styles={`px-6 py-[50px] flex justify-center`}>
            {/* hero content */}
            {/* w-[700px] py-[40px] pl-[40px] */}
            <div className="w-[300px] rounded-[10px] 
            bg-mediumGray py-[40px] px-[40px]">
                {/* hero content title */}
                {/* mb-[20px] text-[16px] text-start */}
                <h6 className="mb-[10px] font-montserrat font-semibold 
                text-[12px] tracking-[3px] text-lightBlack text-center">
                    New Arrival
                </h6>
                {/* hero content heading */}
                {/* text-[52px] leading-[65px] text-start */}
                <h1 className="font-montserrat font-bold text-[30px] 
                leading-[45px] text-lightBlue text-center">
                    Discover Our New Collection
                </h1>
                {/* hero content description */}
                {/* mt-[20px] mb-[30px] text-[18px] leading-[40px] 
                    text-start */}
                <p className="mt-[10px] mb-[20px] font-montserrat 
                font-medium text-[14px] leading-[25px] text-lightBlack 
                text-center">
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