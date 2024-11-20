const InspirationImage = (props) => {
    const { image, altText } = props
        
    return (
        // inspiration image
        // w-auto
        <img 
            className="w-[280px]"
            src={image} 
            alt={altText} 
        />
    )
}
export default InspirationImage