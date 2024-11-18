const Feature = (props) => {
    const { image, altText, title, desc } = props
    
    return (
        // feature
        <div className="flex justify-center items-center 
        gap-[20px] xl:gap-[30px]">
            {/* feature image */}
            <div>
                <img
                    className="w-[40px] sm:w-[60px] 
                    md:w-[40px] xl:w-auto"
                    src={image} 
                    alt={altText} 
                />
            </div>
            {/* feature content */}
            <div className="flex flex-col justify-center 
            items-start gap-[6px]">
                {/* feature title */}
                <h5 className="font-montserrat font-semibold 
                text-[16px] text-lightBlack sm:text-[20px] 
                md:text-[16px] xl:text-[24px]">
                    {title}
                </h5>
                {/* feature description */}
                <p className="font-montserrat font-normal 
                text-[10px] text-lightBlack sm:text-[14px] 
                md:text-[10px] xl:text-[16px]">
                    {desc}
                </p>
            </div>
        </div>
    )
}
export default Feature