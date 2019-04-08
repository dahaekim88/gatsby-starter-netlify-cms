import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import Courses from "../../components/courses/Courses"

const TopicsPage = ({ data }) => {
  const courses = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Courses courses={courses} />
    </Layout>
  )
}

export default TopicsPage

export const pageQuery = graphql`
  query TopicsPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "detail-page" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image {
              childImageSharp {
                fluid(maxWidth: 480, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            info {
              startDate(formatString: "YYYY.MM.DD")
              endDate(formatString: "YYYY.MM.DD")
              period
              studyTimes {
                frequency
                dayOfWeek
                time
              }
              price
            }
            open
          }
        }
      }
    }
  }
`
