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
      <div>
        <a target="_blank" href="https://drink.haus">
          <BackgroundImage
            className="project-bg"
            fluid={data.fluid.childImageSharp.fluid}
          >
            <h1 className="project-wrap-header">Haus Apertif</h1>
          </BackgroundImage>
        </a>
      </div>

      <div>
        <a target="_blank" href="https://chillhouse.com/pages/joinclubchill">
          <BackgroundImage
            className="project-bg"
            fluid={data.chill.childImageSharp.fluid}
          >
            <h1 className="project-wrap-header">Chillhouse</h1>
          </BackgroundImage>
        </a>
      </div>

      <div>
        <a target="_blank" href="https://marchesa.com">
          <BackgroundImage
            className="project-bg"
            fluid={data.marchesa.childImageSharp.fluid}
          >
            <h1 className="project-wrap-header">Marchesa</h1>
          </BackgroundImage>
        </a>
      </div>
      {/*
      <div>
        <a target="_blank" href="https://3lab.com">
          <BackgroundImage
            className="project-bg"
            fluid={data.threelab.childImageSharp.fluid}
          >
            <h1 className="project-wrap-header">3LAB</h1>
          </BackgroundImage>
        </a>
      </div>
      */}

      <div>
        <a target="_blank" href="https://sungs-essentials.herokuapp.com/">
          <BackgroundImage
            className="project-bg"
            fluid={data.essentials.childImageSharp.fluid}
          >
            <h1 className="project-wrap-header">Sung's Essentials</h1>
          </BackgroundImage>
        </a>
        <p className="built-with">Built with React / Redux / Firebase</p>
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

      <div>
        <a target="_blank" href="https://the-weigh-in-shop.netlify.com/">
          <BackgroundImage
            className="project-bg"
            fluid={data.weighshop.childImageSharp.fluid}
          >
            <h1 className="project-wrap-header">The Weigh In Shop</h1>
          </BackgroundImage>
        </a>
        <p className="built-with">Built with Gatsby JS / Contentful / Redux</p>
      </div>

      <div>
        <a target="_blank" href="https://sleepy-brook-00076.herokuapp.com/">
          <BackgroundImage
            className="project-bg"
            fluid={data.floyd.childImageSharp.fluid}
          >
            <h1 className="project-wrap-header">Boxrec</h1>
          </BackgroundImage>
        </a>
        <p className="built-with">
          Built with Mongodb / Express / React / Node
        </p>
      </div>

      <div>
        <a target="_blank" href="https://whats-app-clone-5c5b6.web.app/">
          <BackgroundImage
            className="project-bg"
            fluid={data.chat.childImageSharp.fluid}
          >
            <h1 className="project-wrap-header">WhatsApp clone</h1>
          </BackgroundImage>
        </a>
        <p className="built-with">Built with React / Firebase</p>
      </div>

      <div>
        <a target="_blank" href="https://statecashmere.com/">
          <BackgroundImage
            className="project-bg"
            fluid={data.state.childImageSharp.fluid}
          >
            <h1 className="project-wrap-header">State Cashmere</h1>
          </BackgroundImage>
        </a>
      </div>
    </div>
  )
}

export default ProjectsList
