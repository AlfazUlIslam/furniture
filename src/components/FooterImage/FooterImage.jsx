const FooterImage = (props) => {
    const { image, altText } = props
        
    return (
        // Footer image
        <img 
            src={image} 
            alt={altText} 
        />
    )
}
export default FooterImage