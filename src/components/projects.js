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
                        <a className="--link-primary" href="#--section-projects">View my work</a>
                        <a className="--link-primary" href="#--section-projects">View my work</a>
                    </div>
                    <img className="--project-image" src={luckyBirthday} />
                </div>

                <div className="--project">
                    <img className="--project-image" src={triangles} />
                    <div>
                        <h2 className="--project-name" style={{ color: "#fff" }}>Fun with triangles</h2>
                        <p>In this app, learn about triangles, take a quiz about triangles or calculate the hypotenuse and area of a triangle.</p>
                    </div>
                </div>

                <div className="--project">
                    <div>
                        <h2 className="--project-name" style={{
                            color: "#60A5FA"
                        }}>Fun translations</h2>
                        <p>Translator to convert your text from English to Mandalorian, Yoda, Norfolk, Groot and Klingon using fun translations api.</p>
                    </div>
                    <img className="--project-image" src={translations} />
                </div>

                <div className="--project">
                    <img className="--project-image" src={emoji} />
                    <div>
                        <h2 className="--project-name" style={{ color: "#A78BFA" }}>Emoji interpretor</h2>
                        <p>App to find the meaning of an emoji.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects