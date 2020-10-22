import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const getImages = graphql`
  {
    fluid: file(relativePath: { eq: "haus.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    andbox: file(relativePath: { eq: "andbox.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    chill: file(relativePath: { eq: "chill.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    essentials: file(relativePath: { eq: "essentials.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    threelab: file(relativePath: { eq: "3lab.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    marchesa: file(relativePath: { eq: "marchesa.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    weigh: file(relativePath: { eq: "weigh-in.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    weighshop: file(relativePath: { eq: "crawford-benavidez.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    state: file(relativePath: { eq: "statecashmere.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    floyd: file(relativePath: { eq: "money.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    chat: file(relativePath: { eq: "chat.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const ProjectsList = () => {
  const data = useStaticQuery(getImages)

  return (
    <div className="projects-list-wrap" id="projects">

    <div className="projects-row">
    <h1>Skills</h1>
    <div className="skills-row-inner">
    <div className="project-div skills-div">
       <h2>Languages</h2>
       <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
       </ul>
      </div>

      <div className="project-div skills-div">
        <h2>Framework</h2>
        <ul>
        <li>Gatsby</li>
        <li>Express.js</li>
        <li>Redux</li>
      </ul>
      </div>

      <div className="project-div skills-div">
      <h2>Libraries/APi</h2>
      <ul>
        <li>React</li>
        <li>Node.js</li>
      </ul>
      </div>

      <div className="project-div skills-div">
      <h2>Tools</h2>
      <ul>
        <li>Visual Studio Code</li>
        <li>Mongoose</li>
      </ul>
      </div>

      <div className="project-div skills-div">
      <h2>Storage</h2>
      <ul>
        <li>MongoDB</li>
        <li>Firebase</li>
      </ul>
      </div>

      <div className="project-div skills-div">
      <h2>CMS</h2>
      <ul>
        <li>Contentful</li>
        <li>Shopify</li>
      </ul>
      </div>
    </div>
    </div>

    <div className="projects-row">
    <h1>Shopify Builds</h1>
    <div className="projects-row-inner">
    <div className="project-div">
        <a target="_blank" href="https://drink.haus">
          <BackgroundImage
            className="project-bg"
            fluid={data.fluid.childImageSharp.fluid}
          >
            <h2 className="project-wrap-header">Haus Apertif</h2>
          </BackgroundImage>
        </a>
      </div>

      <div className="project-div">
        <a target="_blank" href="https://chillhouse.com/pages/joinclubchill">
          <BackgroundImage
            className="project-bg"
            fluid={data.chill.childImageSharp.fluid}
          >
            <h2 className="project-wrap-header">Chillhouse</h2>
          </BackgroundImage>
        </a>
      </div>

      <div className="project-div">
        <a target="_blank" href="https://marchesa.com">
          <BackgroundImage
            className="project-bg"
            fluid={data.marchesa.childImageSharp.fluid}
          >
            <h2 className="project-wrap-header">Marchesa</h2>
          </BackgroundImage>
        </a>
      </div>

      <div className="project-div">
      <a target="_blank" href="https://statecashmere.com/">
        <BackgroundImage
          className="project-bg"
          fluid={data.state.childImageSharp.fluid}
        >
          <h2 className="project-wrap-header">State Cashmere</h2>
        </BackgroundImage>
      </a>
    </div>

    </div>
    </div>
      
     

      <div className="projects-row react-row">
      <h1>React Projects</h1>
      <div className="projects-row-inner">
      <div className="project-div">
        <a target="_blank" href="https://sungs-essentials.herokuapp.com/">
          <BackgroundImage
            className="project-bg"
            fluid={data.essentials.childImageSharp.fluid}
          >
            <h1 className="project-wrap-header">Sung's Essentials</h1>
          </BackgroundImage>
        </a>
        <p className="built-with">React / Redux / Firebase</p>
      </div>

      {/*
      <div>
        <a target="_blank" href="https://the-weigh-in.netlify.com/">
          <BackgroundImage className="project-bg" fluid={data.weigh.childImageSharp.fluid}>
            <h1 className="project-wrap-header">The Weigh In</h1>
          </BackgroundImage>
        </a>
        <p>**work in progress**</p>
        <p className="built-with">Built with Gatsby JS + Contentful</p>
      </div>
       */}

       <div className="project-div">
        <a target="_blank" href="https://the-weigh-in-shop.netlify.com/">
          <BackgroundImage
            className="project-bg"
            fluid={data.weighshop.childImageSharp.fluid}
          >
            <h1 className="project-wrap-header">The Weigh In Shop</h1>
          </BackgroundImage>
        </a>
        <p className="built-with">Gatsby JS / Contentful / Redux</p>
      </div>

      <div className="project-div">
        <a target="_blank" href="https://sleepy-brook-00076.herokuapp.com/">
          <BackgroundImage
            className="project-bg"
            fluid={data.floyd.childImageSharp.fluid}
          >
            <h1 className="project-wrap-header">Boxrec</h1>
          </BackgroundImage>
        </a>
        <p className="built-with">
          Mongodb / Express / React / Node
        </p>
      </div>

      <div className="project-div">
        <a target="_blank" href="https://whats-app-clone-5c5b6.web.app/">
          <BackgroundImage
            className="project-bg"
            fluid={data.chat.childImageSharp.fluid}
          >
            <h1 className="project-wrap-header">WhatsApp clone</h1>
          </BackgroundImage>
        </a>
        <p className="built-with">React / Firebase</p>
      </div>
      </div>
     </div>
    </div>
  )
}

export default ProjectsList
