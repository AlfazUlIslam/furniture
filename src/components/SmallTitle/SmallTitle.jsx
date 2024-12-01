const SmallTitle = (props) => {
    const { styles, content } = props
        
    return (
        // Small title
        <div className={`${styles} font-montserrat font-bold text-[24px] 
        text-white`}>
            {content}
        </div>
    )
}
export default SmallTitle