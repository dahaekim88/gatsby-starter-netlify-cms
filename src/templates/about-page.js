import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Container } from "reactstrap"

import Layout from "../components/Layout"
import PageHeader from "../components/reusable/PageHeader"
import AboutPart from "../components/about-page/AboutPart"
import WhyUsPart from "../components/about-page/WhyUsPart"
import { DarkBackground } from "../components/reusable/styledComponents"

export const AboutPageTemplate = ({ title, image, intro, main }) => (
  <>
    <PageHeader
      title={title}
      bgUrl={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
    />
    <DarkBackground>
      <Container>
        <AboutPart
          heading={intro.heading}
          image={
            !!intro.image.childImageSharp
              ? intro.image.childImageSharp.fluid.src
              : intro.image
          }
          description={intro.description}
        />
        <WhyUsPart title={main.heading} whyUsData={main.content} />
      </Container>
    </DarkBackground>
  </>
)

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  intro: PropTypes.shape({
    heading: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    description: PropTypes.string,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    content: PropTypes.array,
  }),
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        intro={post.frontmatter.intro}
        main={post.frontmatter.main}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intro {
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 680, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
        main {
          heading
          content {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
          }
        }
      }
    }
  }
`
