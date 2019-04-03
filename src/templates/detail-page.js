import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Study from "../components/courses/detail-page/Study"
// import SEO from "../components/reusable/SEO"

export const DetailPageTemplate = ({ data }) => {
  return (
    <>
      {/* <SEO /> */}
      <Study data={data} />
    </>
  )
}

DetailPageTemplate.propTypes = {
  data: PropTypes.object,
}

const DetailPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <DetailPageTemplate data={post.frontmatter} />
    </Layout>
  )
}

DetailPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default DetailPage

export const pageQuery = graphql`
  query DetailPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
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
            time
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
`
