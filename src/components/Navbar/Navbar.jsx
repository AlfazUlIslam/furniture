import { useState } from "react"
import { Container } from "../../containers"
import NavLink from "../NavLink/NavLink"
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5"
import { logo } from "../../assets"
import "./Navbar.css"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
        
    const handleToggle = () => {
        setToggle(prev => !prev)
    }

    return (
        // navbar
        <nav>
            <Container styles={`px-6 py-6 flex justify-between 
            items-center md:py-10`}>
                {/* logo */}
                <div>
                    <img 
                        className="w-[100px] sm:w-[120px] 
                        xl:w-auto"
                        src={logo} 
                        alt="Furniture Logo" 
                    />
                </div>
                {/* nav links */}
                <ul className="hidden md:flex md:justify-center 
                md:items-center md:gap-[35px] lg:gap-[70px]">
                    <NavLink 
                        content={"Home"}
                        linkRef={"hero"}
                    />
                    <NavLink 
                        content={"Collection"}
                        linkRef={"collection"}
                    />
                    <NavLink 
                        content={"Products"}
                        linkRef={"products"}
                    />
                    <NavLink 
                        content={"Services"}
                        linkRef={"services"}
                    />
                    <NavLink 
                        content={"Newsletter"}
                        linkRef={"newsletter"}
                    />
                </ul>
                {/* mobile menu */}
                <div className="relative md:hidden">
                    {/* mobile menu button */}
                    <button
                        className="text-3xl"
                        onClick={handleToggle}
                    >
                        {toggle ? <IoCloseSharp /> : <IoMenuSharp />}
                    </button>
                    {/* mobile menu links */}
                    <ul 
                        className="min-w-[9rem] bg-white border 
                        border-slate-200 rounded-xl shadow-xl py-6 
                        flex-col items-center gap-4 absolute 
                        top-14 -right-4 slide-up"
                        style={{display: `${toggle ? "flex" : "none"}`}}
                    >
                        <NavLink 
                            content={"Home"}
                            linkRef={"hero"}
                        />
                        <NavLink 
                            content={"Collection"}
                            linkRef={"collection"}
                        />
                        <NavLink 
                            content={"Products"}
                            linkRef={"products"}
                        />
                        <NavLink 
                            content={"Services"}
                            linkRef={"services"}
                        />
                        <NavLink 
                            content={"Newsletter"}
                            linkRef={"newsletter"}
                        />
                    </ul>
                </div>
            </Container>
        </nav>
    )
}
export default Navbar