const SectionButton = (props) => {
    const { content } = props
    
    return (
        // section button
        <button className="w-[230px] h-[70px] rounded-[50px] 
        bg-lightBlue flex justify-center items-center font-montserrat 
        font-bold text-[16px] text-white transition-all duration-1000 
        hover:bg-darkBlue active:scale-90">
            {content}
        </button>
    )
}
export default SectionButton