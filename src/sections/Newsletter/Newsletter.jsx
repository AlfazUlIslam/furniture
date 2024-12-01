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
            {/* w-auto mt-[10px] mb-[50px] */}
            <SectionDescription
                styles={`w-[280px] mt-[10px] mb-[25px] text-center`}
                content={"Sign up to receive inspiration, product updates, and special offers from our team."}
            />
            {/* Newsletter form */}
            <form className="flex justify-center items-center">
                {/* w-[333px] h-[70px] rounded-tl-[3px] rounded-bl-[3px] 
                    pl-[25px] text-[16px] */}
                <input 
                    type="text" 
                    className="w-[200px] h-[40px] rounded-tl-[3px] 
                    rounded-bl-[3px] border border-slate-500 
                    pl-[25px] font-montserrat font-normal text-[12px]
                    text-lightBlue focus:outline-none focus:border-mediumBlue"
                    placeholder="Enter your email"
                />
                {/* w-[153px] h-[70px] rounded-[3px] text-[16px] */}
                <button 
                    className="w-[80px] h-[40px] rounded-[3px] 
                    bg-lightBlue font-montserrat font-bold text-[12px] 
                    text-white transition-all duration-1000 
                    hover:bg-darkBlue active:scale-90"
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