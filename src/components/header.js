import React from "react"


const Header = () => {
    return (
        <header>
            <div className="--header-toyface"></div>
            <div className="--header-about">
                <h1 className="--header-heading">Hey there! <span className="--header-hand-waving">š</span></h1>
                <p>
                    Iām <span className="--header-myName">Rohit</span>, and first off a <b><i>HUGE</i></b> thanks to you for checking out my page. Iām learning programming and web development šØāš» to turn my ideas into sites and apps that work.š
                </p>
                <div className="--header-links">
                    <a className="--link-secondary" href="#--section-skillset">More about me</a>
                    <a className="--link-primary" href="#--section-projects">View my work</a>
                </div>
            </div>
            <p className="--header-sideways-text">ā» SCROLL</p>
        </header>
    )
}

export default Header