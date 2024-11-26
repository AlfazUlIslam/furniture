const ServicesCard = (props) => {
    const { image, altText, number, title, description } = props
        
    return (
        // Services card
        <div className="flex flex-col items-center">
            {/* Services card image */}
            <img 
                src={image} 
                alt={altText} 
            />
            {/* Services card number */}
            <div className="w-[60px] h-[60px] rounded-full bg-black 
            outline outline-[15px] outline-white translate-y-[-50%] 
            text-white text-center content-center font-montserrat 
            font-bold text-[24px]">
                {number}.
            </div>
            {/* Services card title */}
            <h5 className="font-monsterrat font-bold 
            text-[24px] text-lightBlack">
                {title}
            </h5>
            {/* Services card description */}
            <p className="mt-[10px] font-monsterrat font-normal 
            text-[18px] text-darkGray leading-[28px] 
            text-center">
                {description}
            </p>
        </div>
    )
}
export default ServicesCard