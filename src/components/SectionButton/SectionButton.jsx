const SectionButton = (props) => {
    const { content } = props
    
    return (
        // section button
        // w-[230px] h-[70px] rounded-[50px] mx-0 text-[16px]
        <button className="w-[120px] h-[40px] rounded-[30px] 
        bg-lightBlue mx-auto flex justify-center items-center 
        font-montserrat font-bold text-[10px] text-white 
        transition-all duration-1000 hover:bg-darkBlue 
        active:scale-90 xl:w-[230px] xl:h-[70px] xl:rounded-[50px] 
        xl:mx-0 xl:text-[16px]">
            {content}
        </button>
    )
}
export default SectionButton