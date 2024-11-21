import { Container } from "../../containers"
import { Heading, SectionDescription, InspirationImage } from "../../components"
import { inspirationImage1, inspirationImage2, inspirationImage3 } from "../../assets"

const Collection = () => {
  return (
    // Collection
    <section id="collection">
        <Container styles={`px-6 py-[60px] flex flex-col 
        items-center`}>
            <Heading
                content={"Inspiration Collection"}
            />
            <SectionDescription 
                styles={`mt-[14px] mb-[50px] text-center 
                xl:mt-[20px] xl:mb-[90px]`}
                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />
            {/* collection images */}
            <div className="flex flex-col justify-center 
            items-center gap-[20px] sm:gap-[40px] md:flex-row 
            md:gap-[20px] xl:gap-[40px]">
                <InspirationImage
                    image={inspirationImage1}
                    altText={"Bedroom"}
                />
                <InspirationImage
                    image={inspirationImage2}
                    altText={"Sitting Pillow"}
                />
                <InspirationImage
                    image={inspirationImage3}
                    altText={"Pendant Light"}
                />
            </div>
        </Container>
    </section>
  )
}
export default Collection