import { Container, ColumnOne, ColumnTwo } from "../../containers"
import { SmallTitle, SocialIcon, FooterImage } from "../../components"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa"
import { footerImage1, footerImage2, footerImage3, footerImage4 } from "../../assets"

const Footer = () => {
  return (
    // Footer
    <footer className="bg-darkBlue">
        <Container styles={`px-6 pt-[50px] 
        pb-[90px] flex flex-col gap-16 md:flex-row 
        md:justify-between lg:gap-0 xl:gap-4`}>
            <ColumnOne styles={`flex flex-col items-center gap-10 
            md:items-start lg:w-1/2 lg:pl-6`}>
                {/* Column one content */}
                <div className="flex flex-col items-center gap-[14px] 
                md:items-start gap-[28px]">
                    <SmallTitle 
                        content={"Beauty Care"}
                    />
                    {/* Column one content description */}
                    <p className="w-[280px] font-montserrat font-normal 
                    text-[12px] leading-[25px] text-white text-center 
                    sm:w-[400px] sm:text-[16px] sm:leading-[35px]
                    md:w-[280px] md:text-start lg:w-[400px]">
                        Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                </div>
                {/* Follow us */}
                <div className="flex flex-col items-center gap-[14px] 
                md:items-start xl:gap-[28px]">
                    <SmallTitle
                        content={"Follow Us"}
                    />
                    {/* Social media icons */}
                    <div className="flex justify-center items-center 
                    gap-[20px]">
                        <SocialIcon iconComponent={<FaFacebookSquare />} />
                        <SocialIcon iconComponent={<FaInstagramSquare />} />
                        <SocialIcon iconComponent={<FaLinkedinIn />} />
                        <SocialIcon iconComponent={<FaTwitterSquare />} />
                    </div>
                </div>
            </ColumnOne>
            <ColumnTwo styles={`flex flex-col items-center 
            gap-[14px] md:items-start lg:w-1/2 xl:gap-[35px]`}>
                <SmallTitle
                    content={"Instagram Shop"} 
                />
                {/* Column two images */}
                <div className="flex flex-wrap justify-center 
                items-center gap-[10px] md:justify-start 
                xl:flex-nowrap">
                    <FooterImage 
                        image={footerImage1}
                        altText={"Kids room furniture"}
                    />
                    <FooterImage 
                        image={footerImage2}
                        altText={"Living room furniture"}
                    />
                    <FooterImage 
                        image={footerImage3}
                        altText={"Woolen wall decor"}
                    />
                    <FooterImage 
                        image={footerImage4}
                        altText={"Kitchen furniture"}
                    />
                </div>
            </ColumnTwo>
        </Container>
    </footer>
  )
}
export default Footer