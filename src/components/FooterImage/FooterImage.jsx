const FooterImage = (props) => {
    const { image, altText } = props
        
    return (
        // Footer image
        <img 
            className="sm:w-[250px] md:w-auto lg:w-[200px] xl:w-auto"
            src={image} 
            alt={altText} 
        />
    )
}
export default FooterImage