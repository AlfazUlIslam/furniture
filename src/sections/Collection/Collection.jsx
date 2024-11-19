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
                styles={"mt-[20px] mb-[90px]"}
                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />
            {/* collection images */}
            <div className="flex justify-center 
            items-center gap-[40px]">
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