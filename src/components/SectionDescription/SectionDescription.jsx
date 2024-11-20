const SectionDescription = (props) => {
    const { styles, content } = props
        
    return (
        // section description
        // text-[20px]
        <div className={`${styles} font-montserrat 
        font-normal text-[12px] text-darkGray`}>
            {content}
        </div>
    )
}
export default SectionDescription