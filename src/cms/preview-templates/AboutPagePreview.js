import React from "react"
import PropTypes from "prop-types"
import { AboutPageTemplate } from "../../templates/about-page"

const AboutPagePreview = ({ entry }) => {
  const entryContent = entry.getIn(["data", "mainpitch", "content"])
  const content = entryContent ? entryContent.toJS() : []

  return (
    <AboutPageTemplate
      title={entry.getIn(["data", "title"])}
      image={entry.getIn(["data", "image"])}
      intro={{
        heading: entry.getIn(["data", "intro", "heading"]),
        image: entry.getIn(["data", "intro", "image"]),
        description: entry.getIn(["data", "intro", "description"]),
      }}
      mainpitch={{
        heading: entry.getIn(["data", "mainpitch", "heading"]),
        content,
      }}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default AboutPagePreview
