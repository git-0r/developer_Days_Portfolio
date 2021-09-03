import React from "react"


const Header = () => {
    return (
        <header>
            <div className="--header-toyface"></div>
            <div className="--header-about">
                <h1 className="--header-heading">Hey there! <span className="--header-hand-waving">👋</span></h1>
                <p>
                    I’m <span className="--header-myName">Rohit</span>, and first off a <b><i>HUGE</i></b> thanks to you for checking out my page. I’m learning programming and web development 👨‍💻 to turn my ideas into sites and apps that work.🚀
                </p>
                <div className="--header-links">
                    <a className="--link-secondary" href="#--section-skillset">More about me</a>
                    <a className="--link-primary" href="#--section-projects">View my work</a>
                </div>
            </div>
            <p className="--header-sideways-text">⟻ SCROLL</p>
        </header>
    )
}

export default Header