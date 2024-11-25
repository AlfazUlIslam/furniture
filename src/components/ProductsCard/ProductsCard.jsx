const ProductsCard = (props) => {
    const { image, altText, title } = props
        
    return (
        // Products card
        // gap-[30px]
        <div className="flex flex-col items-center gap-[15px]">
            {/* Products card image */}
            {/* w-auto */}
            <img 
                className="w-[250px]"
                src={image} 
                alt={altText} 
            />
            {/* Products title */}
            {/* text-[24px] */}
            <h5 className="font-montserrat font-semibold 
            text-[18px] text-lightBlack">
                {title}
            </h5>
        </div>
    )
}
export default ProductsCard