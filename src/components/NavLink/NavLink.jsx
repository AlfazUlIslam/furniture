const NavLink = (props) => {
    const { content, linkRef } = props
        
    return (
        // nav link
        <li>
            <a 
                className="font-montserrat font-semibold 
                text-[12px] text-lightBlack relative after:content-[''] 
                after:w-[0px] after:h-[1px] after:bg-lightBlue 
                after:absolute after:left-0 after:bottom-[-3px] 
                after:transition-all after:duration-1000 
                hover:text-lightBlue hover:after:w-[100%] 
                lg:text-[14px]"
                href={`#${linkRef}`}
            >
                {content}
            </a>
        </li>
    )
}
export default NavLink