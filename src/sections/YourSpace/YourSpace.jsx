import { Container } from "../../containers"
import { Heading, SectionDescription, SectionButton } from "../../components"
import { beautifySpaceImage } from "../../assets"

const YourSpace = () => {
  return (
    // Your space
    <section id="your-space">
        <Container styles={`px-6 py-[60px] flex flex-col 
        items-center gap-12 md:flex-row md:justify-between 
        md:gap-0`}>
            {/* Your space content */}
            <div className="flex flex-col items-center 
            md:items-start">
                <Heading 
                    content={"Beautify Your Space"}
                />
                <SectionDescription 
                    styles={`w-[280px] mt-[10px] mb-[15px] text-center 
                    md:text-start lg:w-[490px] lg:mt-[20px] lg:mb-[30px]`}
                    content={"Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}
                />
                <SectionButton 
                    styles={"md:mx-0"}
                    content={"LEARN MORE"}
                />
            </div>
            {/* Your space image */}
            <div>
                <img 
                    className="w-[300px] sm:w-[400px] 
                    md:w-[300px] lg:w-[400px] xl:w-auto"
                    src={beautifySpaceImage} 
                    alt={"Girl wearing hat"} 
                />
            </div>
        </Container>
    </section>
  )
}
export default YourSpace