import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div class="unicron" />
    <div class="container">
      <SEO title="Home" />
      <div className="splashContainer animated bounceInRight">
        <h1 id="title">Choose<br/> your <br/>venture</h1>
        <h2 id="subTitle">An interactive <br/>guide to your first <br/>business entity</h2>
      </div>
      <div className='startContainer'>
        <button class="start-btn">
          <Link to="/helper/">Start</Link>
        </button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
