const SmallTitle = (props) => {
    const { styles, content } = props
        
    return (
        // Small title
        // text-[24px]
        <div className={`${styles} font-montserrat font-bold text-[20px] 
        text-white`}>
            {content}
        </div>
    )
}
export default SmallTitle