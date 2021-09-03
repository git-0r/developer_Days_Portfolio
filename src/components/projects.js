import luckyBirthday from "../images/lucky-birthday.png"
import triangles from "../images/triangles.png"
import translations from "../images/fun-translations.png"
import emoji from "../images/emoji.png"


const Projects = () => {
    return (

        <section id="--section-projects">
            <h2>projects</h2>
            <h1 className="--projects-heading">OK, LESS TALKING.
                <br />MORE SHOWING.
            </h1>
            <p className="--projects-heading-text">It’s time to see some work.👨‍💻
                <br />Probably the section you are most interested in.
            </p>
            <p className="--projects-heading-text">Have fun exploring some of my recent projects.</p>

            <div className="--projects">

                <div className="--project">
                    <div>
                        <h2 className="--project-name">Lucky Birthday</h2>
                        <p>Check if your Birthday is lucky or not.</p>
                        <a rel="noreferrer" className="--link-secondary" href="https://github.com/git-0r/mark11_luckyBirthday" target="_blank">View code</a>
                        <a rel="noreferrer" className="--link-primary" href="https://git-0r.github.io/mark11_luckyBirthday/" target="_blank">View project</a>
                    </div>
                    <img className="--project-image" src={luckyBirthday} alt="" />
                </div>

                <div className="--project">
                    <img className="--project-image" src={triangles} alt="" />
                    <div>
                        <h2 className="--project-name" style={{ color: "#fff" }}>Fun with triangles</h2>
                        <p>In this app, learn about triangles, take a quiz about triangles or calculate the hypotenuse and area of a triangle.</p>
                        <a rel="noreferrer" className="--link-secondary" href="https://github.com/git-0r/mark12_triangles" target="_blank">View code</a>
                        <a rel="noreferrer" className="--link-primary" href="https://git-0r.github.io/mark12_triangles/" target="_blank">View project</a>
                    </div>
                </div>

                <div className="--project">
                    <div>
                        <h2 className="--project-name" style={{ color: "#60A5FA" }}>Fun translations</h2>
                        <p>Translator to convert your text from English to Mandalorian, Yoda, Norfolk, Groot and Klingon using fun translations api.</p>
                        <a rel="noreferrer" className="--link-secondary" href="https://github.com/git-0r/mark7_funTranslationsApp" target="_blank">View code</a>
                        <a rel="noreferrer" className="--link-primary" href="https://git-0r.github.io/mark7_funTranslationsApp/" target="_blank">View project</a>
                    </div>
                    <img className="--project-image" src={translations} alt="" />
                </div>

                <div className="--project">
                    <img className="--project-image" src={emoji} alt="" />
                    <div>
                        <h2 className="--project-name" style={{ color: "#A78BFA" }}>Emoji interpretor</h2>
                        <p>App to find the meaning of an emoji.</p>
                        <a rel="noreferrer" className="--link-secondary" href="https://github.com/git-0r/mark8_emojiApp" target="_blank">View code</a>
                        <a rel="noreferrer" className="--link-primary" href="https://codesandbox.io/embed/github/git-0r/mark8_emojiApp/tree/main/?fontsize=14&hidenavigation=1&theme=dark" target="_blank">View project</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects