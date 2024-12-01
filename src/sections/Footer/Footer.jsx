import { Container, ColumnOne, ColumnTwo } from "../../containers"
import { SmallTitle, SocialIcon, FooterImage } from "../../components"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa"
import { footerImage1, footerImage2, footerImage3, footerImage4 } from "../../assets"

const Footer = () => {
  return (
    // Footer
    <footer className="bg-darkBlue">
        <Container styles={`px-6 pt-[50px] pb-[90px] flex gap-10`}>
            <ColumnOne styles={`flex flex-col gap-10`}>
                {/* Column content */}
                <div className="flex flex-col items-start gap-[28px]">
                    <SmallTitle 
                        content={"Beauty Care"}
                    />
                    {/* Column content description */}
                    <p className="w-[400px] font-montserrat font-normal 
                    text-[16px] leading-[35px] text-white">
                        Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                </div>
                {/* Follow us */}
                <div className="flex flex-col items-start gap-[28px]">
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
            <ColumnTwo styles={`flex flex-col items-start gap-[35px]`}>
                <SmallTitle content={"Instagram Shop"} />
                {/* Column two images */}
                <div className="flex justify-center items-center 
                gap-[20px]">
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
                        image={footerImage1}
                        altText={"Kitchen furniture"}
                    />
                </div>
            </ColumnTwo>
        </Container>
    </footer>
  )
}
export default Footer