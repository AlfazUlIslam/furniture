const Heading = (props) => {
    const { styles, content } = props
        
    return (
        // heading
        // text-[32px] 
        <div className={`font-montserrat font-bold 
        text-[24px] text-lightBlack ${styles}`}>
            {content}
        </div>
    )
}
export default Heading