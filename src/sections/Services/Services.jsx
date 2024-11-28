import { Container } from "../../containers"
import { Heading, SectionDescription, ServicesCard } from "../../components"
import { howItWorksImage1, howItWorksImage2, howItWorksImage3 } from "../../assets"

const Services = () => {
  return (
    // Services
    <section id="services">
        <Container styles={`px-6 py-[60px] flex flex-col items-center`}>
            <Heading
                content={"How It Works"}
            />
            <SectionDescription 
                styles={`w-[280px] mt-[10px] mb-[25px] text-center 
                sm:w-auto sm:mt-[20px] sm:mb-[50px]`}
                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />
            {/* Services cards */}
            <div className="flex flex-col justify-center items-center 
            gap-20 sm:gap-28 md:flex-row md:gap-6">
                <ServicesCard
                    image={howItWorksImage1}
                    altText={"Purchase securely"}
                    number={"1"}
                    title={"Purchase Securely"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                />
                <ServicesCard
                    image={howItWorksImage2}
                    altText={"Ships from warehouse"}
                    number={"2"}
                    title={"Ships From Warehouse"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                />
                <ServicesCard
                    image={howItWorksImage3}
                    altText={"Style your room"}
                    number={"3"}
                    title={"Style Your Room"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                />
            </div>
        </Container>
    </section>
  )
}
export default Services