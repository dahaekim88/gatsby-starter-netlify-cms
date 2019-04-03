import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import Courses from "../../components/courses/Courses"

const BlogIndexPage = ({ data }) => {
  const courses = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Courses courses={courses} />
    </Layout>
  )
}

export default BlogIndexPage

export const pageQuery = graphql`
  query DetailPage {
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
              totalMeeting
              schedule
              studyTimes {
                frequency
                dayOfWeek
                startTime
                endTime
              }
              price
              details
            }
            intro {
              text
              objectives {
                image {
                  childImageSharp {
                    fluid(maxWidth: 90, quality: 80) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                text
              }
              targets {
                title
                content
              }
            }
            partner {
              image {
                childImageSharp {
                  fluid(maxWidth: 110, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              name
              currentJob
              career
              qna {
                Q
                A
              }
            }
            curriculum {
              intro
              weeklyTopics
            }
            keywords
            open
          }
        }
      }
    }
  }
`
