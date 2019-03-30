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

export const IndexPageTemplate = ({ carousel }) => {
  const carouselData = [
    {
      src: !!carousel.image1.image.childImageSharp
        ? carousel.image1.image.childImageSharp.fluid.src
        : carousel.image1.image,
      altText: carousel.image1.altText,
      caption: carousel.image1.caption,
      header: carousel.image1.header,
    },
    {
      src: !!carousel.image2.image.childImageSharp
        ? carousel.image2.image.childImageSharp.fluid.src
        : carousel.image2.image,
      altText: carousel.image2.altText,
      caption: carousel.image2.caption,
      header: carousel.image2.header,
    },
  ]

  return (
    <>
      <UncontrolledCarousel items={carouselData} indicators={false} />
      <OurStory />
      <CoursesIntro />
      <HiringPartners />
      <PromotionMessage />
      <NewStudy />
    </>
  )
}

IndexPageTemplate.propTypes = {
  carousel: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate carousel={frontmatter.carousel} />
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
          image1 {
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
          image2 {
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
        }
      }
    }
  }
`
