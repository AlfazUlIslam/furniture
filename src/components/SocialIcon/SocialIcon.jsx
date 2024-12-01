const SocialIcon = (props) => {
    const { iconComponent } = props
        
    return (
        // Social icon
        <i className="text-[20px] text-white 
        cursor-pointer transition-all duration-1000 
        hover:shadow-xl hover:shadow-blue-600 
        sm:text-[30px]">
            {iconComponent}
        </i>
    )
}
export default SocialIcon