import React from "react"
import PropTypes from "prop-types"
import { DetailPageTemplate } from "../../templates/detail-page"

const DetailPagePreview = ({ entry }) => (
  <DetailPageTemplate data={entry.getIn(["data"])} />
)

DetailPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default DetailPagePreview
