import { Container } from "../../containers"
import NavLink from "../NavLink/NavLink"
import { logo } from "../../assets"
import "./Navbar.css"

const Navbar = () => {
  return (
    // navbar
    <nav>
        <Container styles={`px-6 py-10 flex justify-between items-center`}>
            {/* logo */}
            <div>
                <img 
                    src={logo} 
                    alt="Furniture Logo" 
                />
            </div>
            {/* nav links */}
            <ul className="flex justify-center items-center gap-[70px]">
                <NavLink 
                    content={"Home"}
                    linkRef={"home"}
                />
                <NavLink 
                    content={"Collection"}
                    linkRef={"collection"}
                />
                <NavLink 
                    content={"Services"}
                    linkRef={"services"}
                />
                <NavLink 
                    content={"Products"}
                    linkRef={"products"}
                />
                <NavLink 
                    content={"Newsletter"}
                    linkRef={"newsletter"}
                />
            </ul>
        </Container>
    </nav>
  )
}
export default Navbar