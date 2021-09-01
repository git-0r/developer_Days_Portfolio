import React from "react"
// import twitterIcon from "../images/icon-twitter.svg"
// import linkedinIcon from "../images/icon-linkedin.svg"
// import octocatIcon from "../images/icon-octocat.svg"


const Header = () => {
    return (
        <header>
            <div className="--header-toyface"></div>
            <div className="--header-about">
                <h1 className="--header-heading">Hey there! <span className="--header-hand-waving">👋</span></h1>
                <p className="--header-about">
                    I’m <span className="--header-myName">Rohit</span>, and first off a <b><i>HUGE</i></b> thanks to you for checking out my page. I’m learning programming and web development 👨‍💻 to turn my ideas into sites and apps that work.🚀
                </p>
                <div>
                    <a className="--link-secondary">More about me</a>
                    <a className="--link-primary">View my work</a>

                </div>
            </div>
        </header>
    )
}

export default Header