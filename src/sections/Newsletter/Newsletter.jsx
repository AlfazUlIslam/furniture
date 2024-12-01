import { Container } from "../../containers"
import { Heading, SectionDescription } from "../../components"

const Newsletter = () => {
  return (
    // Newsletter
    <section id="newsletter" className="bg-lightGray">
        <Container styles={`px-6 py-[60px] flex flex-col 
        items-center`}>
            <Heading
                content={"Join Our Mailing List"}
            />
            <SectionDescription
                styles={`w-[280px] mt-[10px] mb-[25px] text-center 
                sm:w-auto md:mb-[50px]`}
                content={"Sign up to receive inspiration, product updates, and special offers from our team."}
            />
            {/* Newsletter form */}
            <form className="flex justify-center items-center">
                <input 
                    type="text" 
                    className="w-[200px] h-[40px] rounded-tl-[3px] 
                    rounded-bl-[3px] border border-slate-500 
                    pl-[25px] font-montserrat font-normal text-[12px]
                    text-lightBlue focus:outline-none focus:border-mediumBlue 
                    sm:w-[333px] sm:h-[60px] sm:text-[16px] xl:h-[70px]"
                    placeholder="Enter your email"
                />
                <button 
                    className="w-[80px] h-[40px] rounded-[3px] 
                    bg-lightBlue font-montserrat font-bold text-[12px] 
                    text-white transition-all duration-1000 hover:bg-darkBlue 
                    active:scale-90 sm:w-[153px] sm:h-[60px] sm:text-[16px] 
                    xl:h-[70px]"
                    onClick={(e) => e.preventDefault()}
                >
                    Submit
                </button>
            </form>
        </Container>
    </section>
  )
}
export default Newsletter