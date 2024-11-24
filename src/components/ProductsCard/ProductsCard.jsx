const ProductsCard = (props) => {
    const { image, altText, title } = props
        
    return (
        // Products card
        <div className="flex flex-col items-center gap-[30px]">
            {/* Products card image */}
            <img 
                src={image} 
                alt={altText} 
            />
            {/* Products title */}
            <h5 className="font-montserrat font-semibold 
            text-[24px] text-lightBlack">
                {title}
            </h5>
        </div>
    )
}
export default ProductsCard