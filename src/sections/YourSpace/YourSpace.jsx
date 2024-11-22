import { Container } from "../../containers"
import { Heading, SectionDescription, SectionButton } from "../../components"
import { beautifySpaceImage } from "../../assets"

const YourSpace = () => {
  return (
    // Your space
    <section id="your-space">
        <Container styles={`px-6 py-[60px] flex justify-between 
        items-center`}>
            {/* Your space content */}
            <div className="flex flex-col items-start">
                <Heading 
                    content={"Beautify Your Space"}
                />
                <SectionDescription 
                    styles={`w-[490px] mt-[20px] mb-[30px]`}
                    content={"Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}
                />
                <SectionButton 
                    content={"LEARN MORE"}
                />
            </div>
            {/* Your space image */}
            <div>
                <img 
                    src={beautifySpaceImage} 
                    alt={"Girl wearing hat"} 
                />
            </div>
        </Container>
    </section>
  )
}
export default YourSpace