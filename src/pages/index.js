import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div class="container">
      <SEO title="Home" />
      <div className="splashContainer">
        <h1>Choose your venture</h1>
        <h2>An Interactive Guide To Your First Business Entity</h2>
      </div>
      <div className='buttonContainer'>
        <button class="start-btn">
          <Link to="/helper/">Start</Link>
        </button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
