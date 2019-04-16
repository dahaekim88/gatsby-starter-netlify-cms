import React from "react"
import { Router } from "@reach/router"
import Layout from "../../components/Layout"
import PrivateRoute from "../../components/route/privateRoute"
import MyPageComp from "../../components/my-page/MyPage"

const MyPage = () => (
  <>
    <Layout>
      <Router>
        <PrivateRoute path="/mypage" component={MyPageComp} />
      </Router>
    </Layout>
  </>
)

export default MyPage
