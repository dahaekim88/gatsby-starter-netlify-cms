import React from "react"
import { Router } from "@reach/router"
import Layout from "../../components/Layout"
import Profile from "../../components/Profile"
import PrivateRoute from "../../components/reusable/privateRoute"

const ProfilePage = () => (
  <>
    <Layout>
      <Router>
        <PrivateRoute path="/profile" component={Profile} />
      </Router>
    </Layout>
  </>
)

export default ProfilePage
