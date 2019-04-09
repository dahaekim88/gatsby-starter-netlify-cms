import React from "react"
import { Container } from "reactstrap"

import Layout from "../../components/Layout"
import PageHeader from "../../components/reusable/PageHeader"
import PageDetails from "../../components/reusable/PageDetails"
import { SmallTitle, Background } from "../../components/styled"
import PrivateTermsAndConditions from "../../components/reusable/privateTermsAndConditions"

import bgUrl from "../../assets/img/topics_bg.jpg"

const PrivacyPolicyPage = () => (
  <Layout>
    <PageHeader title="Privacy Policy" bgUrl={bgUrl} />
    <Container>
      <PageDetails align="left">
        <SmallTitle>개인정보처리방침</SmallTitle>
        <Background>
          <PrivateTermsAndConditions />
        </Background>
      </PageDetails>
    </Container>
  </Layout>
)

export default PrivacyPolicyPage
