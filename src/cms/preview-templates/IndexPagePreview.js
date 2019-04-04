import React from "react"
import PropTypes from "prop-types"
import { IndexPageTemplate } from "../../templates/index-page"

const IndexPagePreview = ({ entry }) => {
  return (
    <IndexPageTemplate
      carousel={{
        image: entry.getIn(["data", "carousel", "image"]),
        header: entry.getIn(["data", "carousel", "header"]),
        caption: entry.getIn(["data", "carousel", "caption"]),
        altText: entry.getIn(["data", "carousel", "altText"]),
      }}
      partners={{
        heading: entry.getIn(["data", "partners", "heading"]),
        subheading: entry.getIn(["data", "partners", "subheading"]),
        logo: entry.getIn(["data", "partners", "logo"]),
      }}
    />
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default IndexPagePreview
