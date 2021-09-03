import twitterIcon from "../images/icon-twitter.svg"
import linkedinIcon from "../images/icon-linkedin.svg"
import octocatIcon from "../images/icon-octocat.svg"

const Footer = () => {

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer>
            <h1 className="--footer-heading">That’s it! Now it’s<br />your turn to say hi.</h1>
            <h2>let's connect <span className="--footer-hand-shake">🤝</span></h2>
            <div className="--footer-social-links">
                <a className="--link-primary" href="mailto:rohitdec97@gmail.com?subject=Hello there 👋">Say Hello!</a>
                <a className="--footer-social-icon" rel="noreferrer" href="https://twitter.com/l0gical_cat" target="_blank">
                    <img src={twitterIcon} alt=""></img>
                </a>
                <a className="--footer-social-icon" rel="noreferrer" href="https://www.linkedin.com/in/rohit-663b91125" target="_blank">
                    <img src={linkedinIcon} alt=""></img>
                </a>
                <a className="--footer-social-icon" rel="noreferrer" href="https://github.com/git-0r" target="_blank">
                    <img src={octocatIcon} alt=""></img>
                </a>
            </div>
            <button className="--footer-scrollToTopBtn" onClick={scrollToTop}>☝️</button>
        </footer>
    )
}

export default Footer