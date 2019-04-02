import React from "react"
import PropTypes from "prop-types"
import { AboutPageTemplate } from "../../templates/about-page"

const AboutPagePreview = ({ entry, getAsset }) => {
  const entryContent = entry.getIn(["data", "main", "content"])
  const content = entryContent ? entryContent.toJS() : []

  return (
    <AboutPageTemplate
      title={entry.getIn(["data", "title"])}
      intro={{
        heading: entry.getIn(["data", "heading"]),
        image: getAsset(entry.getIn(["data", "image"])),
        description: entry.getIn(["data", "description"]),
      }}
      main={{
        heading: entry.getIn(["data", "main", "heading"]),
        content,
      }}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AboutPagePreview
