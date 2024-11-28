const ServicesCard = (props) => {
    const { image, altText, number, title, description } = props
        
    return (
        // Services card
        <div className="flex flex-col items-center">
            {/* Services card image */}
            <img 
                className="w-[250px] sm:w-[400px] 
                md:w-[250px] xl:w-auto"
                src={image} 
                alt={altText} 
            />
            {/* Services card number */}
            <div className="w-[40px] h-[40px] rounded-full bg-black 
            outline outline-[10px] outline-white translate-y-[-50%] 
            text-white text-center content-center font-montserrat 
            font-bold text-[20px] sm:w-[60px] sm:h-[60px] 
            sm:outline-[15px] sm:text-[24px] md:w-[30px] md:h-[30px] 
            md:outline-[6px] md:text-[16px] xl:w-[60px] xl:h-[60px] 
            xl:outline-[15px] xl:text-[24px]">
                {number}.
            </div>
            {/* Services card title */}
            <h5 className="font-monsterrat font-bold 
            text-[20px] text-lightBlack sm:text-[24px] 
            md:text-[18px] xl:text-[24px]">
                {title}
            </h5>
            {/* Services card description */}
            <p className="w-[250px] mt-[10px] font-monsterrat 
            font-normal text-[12px] text-darkGray leading-[20px] 
            text-center sm:w-[350px] sm:text-[18px] sm:leading-[28px] 
            md:w-[200px] md:text-[12px] md:leading-[20px] 
            xl:w-auto xl:text-[18px] xl:leading-[28px]">
                {description}
            </p>
        </div>
    )
}
export default ServicesCard