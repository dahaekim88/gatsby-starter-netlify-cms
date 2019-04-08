import React from "react"
import PropTypes from "prop-types"
import { IndexPageTemplate } from "../../templates/index-page"

const IndexPagePreview = ({ entry }) => {
  const entryCarousel = entry.getIn(["data", "carousel"])
  const carousel = entryCarousel ? entryCarousel.toJS() : []

  const entryLogo = entry.getIn(["data", "partners", "logo"])
  const logo = entryLogo ? entryLogo.toJS() : []

  return (
    <IndexPageTemplate
      carousel={carousel}
      partners={{
        heading: entry.getIn(["data", "partners", "heading"]),
        subheading: entry.getIn(["data", "partners", "subheading"]),
        logo,
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
