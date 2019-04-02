import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { UncontrolledCarousel } from "reactstrap"

import Layout from "../components/Layout"
import OurStory from "../components/index-page/OurStory"
import CoursesIntro from "../components/index-page/CoursesIntro"
import HiringPartners from "../components/index-page/HiringPartners"
import PromotionMessage from "../components/index-page/PromotionMessage"
import NewStudy from "../components/index-page/NewStudy"

export const IndexPageTemplate = ({ carousel, partners }) => {
  const carouselData = carousel.map(item => ({
    src: item.image.childImageSharp.fluid.src,
    altText: item.altText,
    caption: item.caption,
    header: item.header,
  }))

  const partnersLogo = partners.logo.map(
    item => item.image.childImageSharp.fluid.src
  )

  return (
    <>
      <UncontrolledCarousel items={carouselData} indicators={false} />
      <OurStory />
      <CoursesIntro />
      <HiringPartners
        heading={partners.heading}
        subheading={partners.subheading}
        partnersLogo={partnersLogo}
      />
      <PromotionMessage />
      <NewStudy />
    </>
  )
}

IndexPageTemplate.propTypes = {
  carousel: PropTypes.array,
  partners: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        carousel={frontmatter.carousel}
        partners={frontmatter.partners}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        carousel {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          header
          caption
          altText
        }
        partners {
          heading
          subheading
          logo {
            image {
              childImageSharp {
                fluid(maxWidth: 180, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
