import React from "react"
import { Container } from "reactstrap"

import Layout from "../../components/Layout"
import PageHeader from "../../components/reusable/PageHeader"
import PageDetails from "../../components/reusable/PageDetails"
import {
  SmallTitle,
  Background,
} from "../../components/reusable/styledComponents"

import bgUrl from "../../assets/img/apply_bg.jpg"

export default () => (
  <Layout>
    <PageHeader title="Apply" bgUrl={bgUrl} />
    <Container>
      <PageDetails align="left">
        <SmallTitle>실무 성장의 첫걸음, Study States</SmallTitle>
        <Background>aaa</Background>
      </PageDetails>
    </Container>
  </Layout>
)
