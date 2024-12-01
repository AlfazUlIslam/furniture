const SmallTitle = (props) => {
    const { styles, content } = props
        
    return (
        // Small title
        <div className={`${styles} font-montserrat font-bold text-[20px] 
        text-white sm:text-[24px]`}>
            {content}
        </div>
    )
}
export default SmallTitle