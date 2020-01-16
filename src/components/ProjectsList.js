import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

const getImages = graphql`
{
    fluid:file(relativePath:{eq:"haus.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    andbox:file(relativePath:{eq:"andbox.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      essentials:file(relativePath:{eq:"essentials.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      threelab:file(relativePath:{eq:"3lab.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      marchesa:file(relativePath:{eq:"marchesa.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      weigh:file(relativePath:{eq:"weigh-in.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      state:file(relativePath:{eq:"statecashmere.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
  }
`

const ProjectsList = () => {
  const data = useStaticQuery(getImages);

  return (
    <div className="projects-list-wrap" id="projects">

      <div>
        <a target="_blank" href="https:/drink.haus">
          <BackgroundImage className="project-bg" fluid={data.fluid.childImageSharp.fluid}>
            <h1 className="project-wrap-header">Haus Apertif</h1>
          </BackgroundImage>
        </a>
      </div>

      <div>
        <a target="_blank" href="https:/drink.haus">
          <BackgroundImage className="project-bg" fluid={data.state.childImageSharp.fluid}>
            <h1 className="project-wrap-header">State Cashmere</h1>
          </BackgroundImage>
        </a>
      </div>

      <div>
        <a target="_blank" href="https:/marchesa.com">
          <BackgroundImage className="project-bg" fluid={data.marchesa.childImageSharp.fluid}>
            <h1 className="project-wrap-header">Marchesa</h1>
          </BackgroundImage>
        </a>
      </div>

      <div>
        <a target="_blank" href="https:/3lab.com">
          <BackgroundImage className="project-bg" fluid={data.threelab.childImageSharp.fluid}>
            <h1 className="project-wrap-header">3LAB</h1>
          </BackgroundImage>
        </a>
      </div>

      <div>
        <a target="_blank" href="https:/drink.haus">
          <BackgroundImage className="project-bg" fluid={data.essentials.childImageSharp.fluid}>
            <h1 className="project-wrap-header">Sung's Essentials</h1>
          </BackgroundImage>
        </a>
      </div>



      <div>
        <a target="_blank" href="https:/drink.haus">
          <BackgroundImage className="project-bg" fluid={data.weigh.childImageSharp.fluid}>
            <h1 className="project-wrap-header">The Weigh In</h1>
          </BackgroundImage>
        </a>
      </div>



    </div >
  )
}

export default ProjectsList;