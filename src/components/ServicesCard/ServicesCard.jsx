const ServicesCard = (props) => {
    const { image, altText, number, title, description } = props
        
    return (
        // Services card
        <div className="flex flex-col items-center">
            {/* Services card image */}
            {/* w-auto */}
            <img 
                className="w-[250px]"
                src={image} 
                alt={altText} 
            />
            {/* Services card number */}
            {/* w-[60px] h-[60px] outline-[15px] text-[24px] */}
            <div className="w-[40px] h-[40px] rounded-full bg-black 
            outline outline-[10px] outline-white translate-y-[-50%] 
            text-white text-center content-center font-montserrat 
            font-bold text-[20px]">
                {number}.
            </div>
            {/* Services card title */}
            {/* text-[24px] */}
            <h5 className="font-monsterrat font-bold 
            text-[20px] text-lightBlack">
                {title}
            </h5>
            {/* Services card description */}
            {/* w-auto text-[18px] leading-[28px] */}
            <p className="w-[250px] mt-[10px] font-monsterrat 
            font-normal text-[12px] text-darkGray leading-[20px] 
            text-center">
                {description}
            </p>
        </div>
    )
}
export default ServicesCard