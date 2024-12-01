const SocialIcon = (props) => {
    const { iconComponent } = props
        
    return (
        // socila icon
        <i className="text-[20px] text-white 
        cursor-pointer transition-all duration-1000 
        hover:shadow-xl hover:shadow-blue-600 
        sm:text-[22px] md:text-[20px] xl:text-[30px]">
            {iconComponent}
        </i>
    )
}
export default SocialIcon