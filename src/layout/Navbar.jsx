import { Link } from "react-router-dom"
import Menu from "../components/Menu.jsx"

function Navbar() {
    return (
        <div className="
    bg-secondary-500
    h-[10vh]
    flex
    items-center
    justify-between
    ">
            <img className="
            h-12
            m-4
            "
                src="src/assets/react.svg"
                alt="logo react" />
            <Menu />
            <ul className="
            hidden
            md:flex
            text-primary-100
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