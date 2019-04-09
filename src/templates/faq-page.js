import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Container } from "reactstrap"

import Layout from "../components/Layout"
import PageHeader from "../components/reusable/PageHeader"
import PageDetails from "../components/reusable/PageDetails"
import { Background, SmallTitle } from "../components/styled"
import Content, { HTMLContent } from "../components/reusable/Content"

export const FaqPageTemplate = ({
  title,
  image,
  heading,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <PageHeader
        title={title}
        bgUrl={
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        }
      />
      <Container>
        <PageDetails align="left">
          <SmallTitle>{heading}</SmallTitle>
          <Background>
            <PageContent content={content} />
          </Background>
        </PageDetails>
      </Container>
    </>
  )
}

FaqPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const FaqPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <FaqPageTemplate
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        heading={post.frontmatter.heading}
        content={post.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

FaqPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FaqPage

export const FaqPageQuery = graphql`
  query FaqPage($id: String!) {
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
        heading
      }
    }
  }
`
