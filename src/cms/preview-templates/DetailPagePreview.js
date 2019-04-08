import React from "react"
import PropTypes from "prop-types"
import { DetailPageTemplate } from "../../templates/detail-page"

const DetailPagePreview = ({ entry }) => {
  const entryData = entry.getIn(["data"])
  const data = entryData ? entryData.toJS() : []

  return <DetailPageTemplate data={data} />
}

DetailPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default DetailPagePreview
