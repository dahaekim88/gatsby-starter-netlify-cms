import React from "react"
import { StaticQuery, graphql } from "gatsby"

import SEO from "../components/reusable/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
            url
            image
          }
        }
      }
    `}
    render={data => (
      <div>
        <SEO metadata={data.site.siteMetadata} />
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    )}
  />
)

export default TemplateWrapper
