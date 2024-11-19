const SectionDescription = (props) => {
    const { styles, content } = props
        
    return (
        // section description
        <div className={`${styles} font-montserrat 
        font-normal text-[20px] text-darkGray`}>
            {content}
        </div>
    )
}
export default SectionDescription