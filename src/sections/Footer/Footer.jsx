import { Container, ColumnOne, ColumnTwo } from "../../containers"
import { SmallTitle, SocialIcon, FooterImage } from "../../components"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa"
import { footerImage1, footerImage2, footerImage3, footerImage4 } from "../../assets"

const Footer = () => {
  return (
    // Footer
    <footer className="bg-darkBlue">
        {/* flex-row gap-4 */}
        <Container styles={`px-6 pt-[50px] pb-[90px] flex flex-col gap-16`}>
            {/* items-start */}
            <ColumnOne styles={`flex flex-col items-center gap-10`}>
                {/* Column content */}
                {/* items-start gap-[28px] */}
                <div className="flex flex-col items-center gap-[14px]">
                    <SmallTitle 
                        content={"Beauty Care"}
                    />
                    {/* Column content description */}
                    {/* w-[400px] text-[16px] leading-[35px] text-start */}
                    <p className="w-[280px] font-montserrat font-normal 
                    text-[12px] leading-[25px] text-white text-center">
                        Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                </div>
                {/* Follow us */}
                {/* items-start gap-[28px] */}
                <div className="flex flex-col items-center gap-[14px]">
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
            {/* gap-[35px] */}
            <ColumnTwo styles={`flex flex-col items-center gap-[14px]`}>
                <SmallTitle
                    content={"Instagram Shop"} 
                />
                {/* Column two images */}
                {/* flex-no-wrap flex-row */}
                <div className="flex flex-wrap justify-center 
                items-center gap-[10px]">
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