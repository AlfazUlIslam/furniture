const SmallTitle = (props) => {
    const { content } = props
        
    return (
        // Small title
        <div className="font-montserrat font-bold text-[24px] 
        text-white">
            {content}
        </div>
    )
}
export default SmallTitle