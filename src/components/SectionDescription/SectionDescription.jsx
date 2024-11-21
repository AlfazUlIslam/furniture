const SectionDescription = (props) => {
    const { styles, content } = props
        
    return (
        // section description
        <div className={`${styles} font-montserrat 
        font-normal text-[12px] text-darkGray sm:text-[16px] 
        xl:text-[20px]`}>
            {content}
        </div>
    )
}
export default SectionDescription