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

export const IndexPageTemplate = ({ carousel, partners, studyData }) => {
  const carouselData = carousel.map(({ image, altText, caption, header }) => ({
    src: !!image.childImageSharp ? image.childImageSharp.fluid.src : image,
    altText,
    caption,
    header,
  }))

  const partnersLogo = partners.logo.map(({ image }) =>
    !!image.childImageSharp ? image.childImageSharp.fluid.src : image
  )

  return (
    <>
      <UncontrolledCarousel items={carouselData} indicators={false} />
      <OurStory />
      <CoursesIntro studyData={studyData} />
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
  studyData: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        carousel={frontmatter.carousel}
        partners={frontmatter.partners}
        studyData={edges}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    allMarkdownRemark: PropTypes.shape({
      fields: PropTypes.object,
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
    allMarkdownRemark(
      filter: { frontmatter: { main: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM.DD.YYYY")
            title
            description
            image {
              childImageSharp {
                fluid(maxWidth: 110, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            info {
              startDate(formatString: "YYYY.MM.DD")
              endDate(formatString: "YYYY.MM.DD")
              period
              price
            }
            open
            main
          }
        }
      }
    }
  }
`
