import { Container } from "../../containers"
import { Heading, SectionDescription, ProductsCard } from "../../components"
import { browseRangeImage1, browseRangeImage2, browseRangeImage3 } from "../../assets"

const Products = () => {
  return (
    // Products
    <section id="products">
        <Container styles={`px-6 py-[60px] flex flex-col 
        items-center`}>
            <Heading 
                content={"Browse The Range"}
            />
            {/* w-auto mt-[20px] mb-[50px] */}
            <SectionDescription 
                styles={`w-[280px] mt-[10px] mb-[30px] text-center`}
                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />
            {/* Products cards */}
            {/* flex-row */}
            <div className="flex flex-col justify-center 
            items-center gap-6">
                <ProductsCard 
                    image={browseRangeImage1}
                    altText={"Dinning products"}
                    title={"Dinning"}
                />
                <ProductsCard 
                    image={browseRangeImage2}
                    altText={"Living room products"}
                    title={"Living"}
                />
                <ProductsCard 
                    image={browseRangeImage3}
                    altText={"Bedroom products"}
                    title={"Bedroom"}
                />
            </div>
        </Container>
    </section>
  )
}
export default Products