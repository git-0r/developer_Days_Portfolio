const Skillset = () => {
    return (
        <section id="--section-skillset">
            <h2>skillset</h2>
            <h1 className="--skillset-heading">What I use to make the magic happen ✨ </h1>
            <p>But <b><i>always</i></b> excited to explore more programs and add more skills to the tool belt. </p>

            <div className="--skillset-icons">
                <div className="--skillset-icon --icon-html">
                    <ion-icon name="logo-html5"></ion-icon>
                    <p>HTML</p>
                </div>

                <div className="--skillset-icon --icon-css">
                    <ion-icon name="logo-css3"></ion-icon>
                    <p>CSS</p>
                </div>

                <div className="--skillset-icon --icon-javascript">
                    <ion-icon name="logo-javascript"></ion-icon>
                    <p>JAVASCRIPT</p>
                </div>
            </div>
            <div className="--skillset-icons">
                <div className="--skillset-icon --icon-react">
                    <ion-icon name="logo-react"></ion-icon>
                    <p>REACT</p>
                </div>

                <div className="--skillset-icon --icon-github">
                    <ion-icon name="logo-github"></ion-icon>
                    <p>GITHUB</p>
                </div>

                <div className="--skillset-icon --icon-node">
                    <ion-icon name="logo-nodejs"></ion-icon>
                    <p>NODE</p>
                </div>
            </div>
        </section>
    )
}

export default Skillset