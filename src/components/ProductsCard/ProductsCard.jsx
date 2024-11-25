const ProductsCard = (props) => {
    const { image, altText, title } = props
        
    return (
        // Products card
        <div className="flex flex-col items-center gap-[15px] 
        xl:gap-[30px]">
            {/* Products card image */}
            <img 
                className="w-[250px] sm:w-[400px] 
                md:w-[250px] xl:w-auto"
                src={image} 
                alt={altText} 
            />
            {/* Products title */}
            <h5 className="font-montserrat font-semibold 
            text-[18px] text-lightBlack sm:text-[24px] 
            md:text-[18px] xl:text-[24px]">
                {title}
            </h5>
        </div>
    )
}
export default ProductsCard