import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

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
          }
        }
      }
    `}
    render={data => (
      <div>
        <GlobalStyle />
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossorigin="anonymous"
          />
          <link
            rel="mask-icon"
            href="/img/safari-pinned-tab.svg"
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    )}
  />
)

export default TemplateWrapper
