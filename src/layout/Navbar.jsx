import { Link } from "react-router-dom"
import Menu from "../components/Menu.jsx"

function Navbar() {
    return (
        <div className="
    bg-gray-800
    h-[10vh]
    flex
    items-center
    justify-between
    ">
            <img className="
            h-[5vh]
            m-4
            "
                src="src/assets/react.svg"
                alt="logo react" />
            {/* menu */}
            <Menu />
            {/* menu */}
            <ul className="
            hidden
            md:flex
            text-cyan-500
            gap-10
            m-4
            ">
                <Link to={"/"}>Home</Link>
                <Link to={"/projects"}>Projets</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
            </ul>
        </div>
    )
}

export default Navbar