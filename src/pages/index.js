import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <button class="start-btn">
      <Link to="/helper/">Start</Link>
    </button>
  </Layout>
)

export default IndexPage
