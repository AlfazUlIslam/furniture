const Heading = (props) => {
    const { styles, content } = props
        
    return (
        // heading
        <div className={`font-montserrat font-bold 
        text-[32px] text-lightBlack ${styles}`}>
            {content}
        </div>
    )
}
export default Heading