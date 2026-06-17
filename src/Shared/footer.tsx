import Translation from "../components/translation"

function Footer() {

  return (
    <>
        <footer className="Footer">
       <div className="content-footer">
        <div className="about-footer">
            <h3>About Me</h3>
            <p>Software develop by</p>
            <p>Jefferson Lopez (Mixtrix)</p>
            <img src="copyright.png"></img>
            <p>All Rights Reserved</p>
        </div>
        <div className="contact-footer">
            <p>Any Questions? contact me</p>
            <a href="jefferson024@hotmail.com">jefferson024@hotmail.com</a>
        </div>
        <div className="social-footer">
            <h3>Follow me</h3>
            <img src="github.png"></img>
            <a href="https://github.com/Mixtrixjr">GitHub</a>
            <img src="linkedin.png"></img>
            <a href="https://www.linkedin.com/in/jefferson-antonio-lopez-zapata-04b110276/">Linkedin</a>
            <img src="instagram.png"></img>
            <a href="https://www.instagram.com/mixtrixjr/">Instagram</a>
        </div>
        <div className="language-footer">
        <Translation></Translation>
        </div>
        <div className="legal-footer">
            <a href="terminos y condiciones">Jefferson Antonio Lopez Zapata</a>
            <span> . </span>
            <a href="terminos y condiciones">Adelaide - Australia</a>
            <span> . </span>
            <a href="terminos y condiciones">terminos y condiciones</a>
        </div>
       </div>
       </footer>
    </>
  )
}

export default Footer
