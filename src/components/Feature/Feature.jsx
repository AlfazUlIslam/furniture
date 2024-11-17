const Feature = (props) => {
    const { image, altText, title, desc } = props
    
    return (
        // feature
        <div className="flex justify-center items-center 
        gap-[30px]">
            {/* feature image */}
            <div>
                <img 
                    src={image} 
                    alt={altText} 
                />
            </div>
            {/* feature content */}
            <div className="flex flex-col justify-center 
            items-start gap-[6px]">
                {/* feature title */}
                <h5 className="font-montserrat font-semibold 
                text-[24px] text-lightBlack">
                    {title}
                </h5>
                {/* feature description */}
                <p className="font-montserrat font-normal 
                text-[16px] text-lightBlack">
                    {desc}
                </p>
            </div>
        </div>
    )
}
export default Feature