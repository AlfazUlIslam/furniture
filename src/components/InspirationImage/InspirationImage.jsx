const InspirationImage = (props) => {
    const { image, altText } = props
        
    return (
        // inspiration image
        <img 
            className="cursor-pointer trnasition-all 
            duration-1000 hover:translate-y-[-38px]"
            src={image} 
            alt={altText} 
        />
    )
}
export default InspirationImage