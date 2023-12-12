import {
    useState
} from "react"
import { Link } from "react-router-dom"

function useMenu() {
    const [show, setShow] = useState(false);
    return (
        <>
            <img
                onClick={() => setShow(!show)}
                className="
            h-[8vh]
            m-4
            md:hidden
            "
                src="src/assets/menu.svg"
                alt="menu"
            />
            {show && <div className="
            flex
            flex-col 
            z-20 
            w-full 
            absolute
            bg-gray-800
            items-center
            justify-center
            text-cyan-500
            p-4
            ">
                <div className="
                z-30
                mt-40
                " >
                    <img onClick={() => setShow(!show)}
                        className="
                    h-[8vh]
                    z-40
                    absolute
                    right-0
                    m-4
                    "
                        src="src/assets/close.svg"
                        alt="close menu" />
                    <ul className="
                flex
                flex-col
                gap-10
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

export default useMenu