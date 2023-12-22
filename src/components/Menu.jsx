import {
    useState
} from "react"
import { Link } from "react-router-dom"

function Menu() {
    const [show, setShow] = useState(false);
    return (
        <>
            <img
                onClick={() => setShow(!show)}
                className="
            h-12
            m-4
            md:hidden
            "
                src="src/assets/menu.svg"
                alt="menu"
            />
            {show && <div className="
            fixed
            w-full
            flex
            align-center
            justify-center
            bg-[#4D194D]
            p-4
            ">
                <div className="
                z-30
                mt-40
                " >
                    <img onClick={() => setShow(!show)}
                        className="
                    h-12
                    z-40
                    fixed
                    right-0
                    m-4
                    "
                        src="src/assets/close.svg"
                        alt="close menu" />
                    <ul className="
                flex
                flex-col
                gap-10
                text-[#006466]
                ">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/projects"}>Projets</Link>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/contact"}>Contact</Link>
                    </ul>
                </div>
            </div>}
        </>
    );
}

export default Menu