import React from "react"
import pdf from "./SungkyuHong_CV_2020.pdf"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="find-me">Find Me On</p>

        <div className="footer-inner-links">
          <a target="_blank" href="https://github.com/sungkyuhong93">
            Github
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sung-kyu-hong-10a155115/"
          >
            Linkedin
          </a>
          <a target="_blank" href="https://www.instagram.com/sungkyu93/">
            Instagram
          </a>
        </div>

        <div className="resume-dl">
          <a href={pdf}>Resume Download</a>
        </div>

        <div className="last-updated">
          <p>Last Updated: 01/05/2020</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
