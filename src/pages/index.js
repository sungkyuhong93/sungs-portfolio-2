import React from "react"

import ProjectsList from "../components/ProjectsList";
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p className="sung-index-intro">
      Sung Kyu Hong is a Front-End Developer based in New York. He is currently working at Avex and open for collaboration
    </p>
    <div className="row">
      <div className="col">

      </div>
      <div className="col">
        <a href="mailto: sungkyuhong93@gmail.com" className="header-projects-link">Contact</a>
      </div>
    </div>
    <ProjectsList />
  </Layout>
)

export default IndexPage
