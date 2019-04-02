import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const SEO = ({ metadata, facebook }) => (
  <Helmet>
    <html lang="ko" />
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />

    <link rel="apple-touch-icon" sizes="180x180" href="favicon.ico" />
    <link
      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      rel="stylesheet"
      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
      crossorigin="anonymous"
    />
    <link
      href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css"
      rel="stylesheet"
      type="text/css"
    />

    <meta name="theme-color" content="#fff" />
    <meta
      property="og:type"
      content={facebook ? facebook.type : "business.business"}
    />
    <meta
      property="og:title"
      content={facebook ? facebook.title : metadata.title}
    />
    <meta property="og:url" content={facebook ? facebook.url : metadata.url} />
    <meta
      property="og:image"
      content={facebook ? facebook.image : metadata.image}
    />
  </Helmet>
)

export default SEO

SEO.propTypes = {
  metadata: PropTypes.object.isRequired,
  facebook: PropTypes.object,
}
