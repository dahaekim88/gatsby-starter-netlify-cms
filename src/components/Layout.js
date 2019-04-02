import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import SEO from "../components/reusable/SEO"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import lovelo from "../assets/fonts/Lovelo_Black.ttf"
import { sizes } from "../constants"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Lovelo;
    src: url(${lovelo});
    font-weight: 900;
  }

  html {
    font-size: 10px;

    @media screen and (max-width: ${sizes.b_tablet}px) {
      font-size: 8px;
    }
  }

  html, body {
    font-family: 'NanumSquare', sans-serif;
  }

  h2 {
    margin: 1rem 0;
  }

  p {
    font-size: 14px;
  }

  .carousel-control {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: none !important;
  }

  .container {
    @media screen and (max-width: ${sizes.b_tablet}px) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .navbar-header {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`

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
        <GlobalStyle />
        <SEO metadata={data.site.siteMetadata} />
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    )}
  />
)

export default TemplateWrapper
