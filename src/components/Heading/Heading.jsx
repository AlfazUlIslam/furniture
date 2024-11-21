const Heading = (props) => {
    const { styles, content } = props
        
    return (
        // heading
        <div className={`${styles} font-montserrat font-bold 
        text-[24px] text-lightBlack sm:text-[28px] xl:text-[32px]`}>
            {content}
        </div>
    )
}
export default Heading