const SectionButton = (props) => {
    const { content, styles } = props
    
    return (
        // section button
        <button className={`${styles} w-[120px] h-[40px] rounded-[30px] 
        bg-lightBlue mx-auto flex justify-center items-center 
        font-montserrat font-bold text-[10px] text-white 
        transition-all duration-1000 hover:bg-darkBlue 
        active:scale-90 xl:w-[230px] xl:h-[70px] xl:rounded-[50px] 
        xl:mx-0 xl:text-[16px]`}>
            {content}
        </button>
    )
}
export default SectionButton