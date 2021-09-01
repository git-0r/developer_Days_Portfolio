import React from "react"

const Header = () => {
    return (
        <header>
            <div className="--header-toyface">

            </div>
            <div className="--header-about">
                <h1 className="--header-heading">Hey there! <span className="--header-hand-waving">👋</span></h1>
                <p className="--header-about">
                    I’m <span className="--header-myName">Rohit</span>, and first off a <b><i>HUGE</i></b> thanks to you for checking out my page. I’m a Philly-based designer specializing in front-end web and digital design, but I also have experience with print design and product design too.
                </p>

            </div>
        </header>
    )
}

export default Header