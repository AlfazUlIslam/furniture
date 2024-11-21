const InspirationImage = (props) => {
    const { image, altText } = props
        
    return (
        // inspiration image
        <img 
            className="w-[280px] sm:w-[380px] 
            md:w-[230px] lg:w-[300px] xl:w-auto"
            src={image} 
            alt={altText} 
        />
    )
}
export default InspirationImage