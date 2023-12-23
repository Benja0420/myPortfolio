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
                "><img src="src/assets/react.svg" alt="" /><img src="src/assets/react.svg" alt="" /><img src="src/assets/react.svg" alt="" /></div>
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