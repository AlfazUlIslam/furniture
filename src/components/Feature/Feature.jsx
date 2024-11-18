const Feature = (props) => {
    const { image, altText, title, desc } = props
    
    return (
        // feature
        // gap-[30px]
        <div className="flex justify-center items-center 
        gap-[20px]">
            {/* feature image */}
            <div>
                {/* w-auto */}
                <img
                    className="w-[40px]"
                    src={image} 
                    alt={altText} 
                />
            </div>
            {/* feature content */}
            <div className="flex flex-col justify-center 
            items-start gap-[6px]">
                {/* feature title */}
                {/* text-[24px] */}
                <h5 className="font-montserrat font-semibold 
                text-[16px] text-lightBlack">
                    {title}
                </h5>
                {/* feature description */}
                {/* text-[16px] */}
                <p className="font-montserrat font-normal 
                text-[10px] text-lightBlack">
                    {desc}
                </p>
            </div>
        </div>
    )
}
export default Feature