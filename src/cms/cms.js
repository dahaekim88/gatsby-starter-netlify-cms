import React from "react"
import CMS from "netlify-cms"

import AboutPagePreview from "./preview-templates/AboutPagePreview"
import DetailPagePreview from "./preview-templates/DetailPagePreview"
import FaqPagePreview from "./preview-templates/FaqPagePreview"
import IndexPagePreview from "./preview-templates/IndexPagePreview"

import { StyleSheetManager } from "styled-components"

//Component used to Enable netlify CMS to apply the styles added through styled-components
class CSSInjector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      iframeRef: "",
    }
  }

  componentDidMount() {
    const iframe = document.getElementsByTagName("iframe")[0]
    const iframeHeadElem = iframe.contentDocument.head
    this.setState({ iframeRef: iframeHeadElem })
  }

  render() {
    return (
      <div>
        {this.state.iframeRef && (
          <StyleSheetManager target={this.state.iframeRef}>
            {this.props.children}
          </StyleSheetManager>
        )}
      </div>
    )
  }
}

//Used like
CMS.registerPreviewTemplate("index", props => (
  <CSSInjector>
    <IndexPagePreview {...props} />
  </CSSInjector>
))
CMS.registerPreviewTemplate("about", props => (
  <CSSInjector>
    <AboutPagePreview {...props} />
  </CSSInjector>
))
CMS.registerPreviewTemplate("faq", props => (
  <CSSInjector>
    <FaqPagePreview {...props} />
  </CSSInjector>
))
CMS.registerPreviewTemplate("topics", props => (
  <CSSInjector>
    <DetailPagePreview {...props} />
  </CSSInjector>
))
