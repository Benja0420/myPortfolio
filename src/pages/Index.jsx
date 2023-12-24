function index() {
    return (
        <div className="
        h-[90vh]
        bg-primary-500
        "

        >
            <div className="
            flex
            gap-10
            items-center
            justify-center
            p-10
            ">
                <article className="
            flex
            flex-col
            gap-4
            ">
                    <h1 className="
                text-4xl
                text-white
                ">Benjamín Sepúlveda</h1>
                    <p className="
                text-white
                ">Desarrollador Web FullStack</p>
                    <div
                        className="
                flex
                gap-2
                ">
                        <img className="
                        cursor-pointer
                        " src="src/assets/react.svg" alt="Linkedin" />
                        <img className="
                        cursor-pointer
                        " src="src/assets/react.svg" alt="github" />
                        <div
                        className="
                        align-center
                        justify-center
                        px-2
                        flex
                        bg-primary-200
                        rounded-md
                        gap-2
                        cursor-pointer
                        py-1
                        "
                        >
                        <p>download CV</p>
                        <img
                        src="src/assets/react.svg" alt="CV" />
                        </div>
                    </div>
                </article>
                <img
                    className="
                h-52
                "
                    src="src/assets/react.svg"
                    alt="Benjamín Sepúlveda" />
            </div>
        </div>
    )
}

export default index