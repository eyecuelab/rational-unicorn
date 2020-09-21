import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="left-filler"/>
    <div className="unicron" />
    <div className="container">
      <SEO title="Home" />
      <div className="splashContainer animated bounceInRight">
        <h1 id="title">Choose<br/> your <br/>venture</h1>
        <h2 id="subTitle">An interactive <br/>guide to your new <br/>business entity</h2>
      </div>
      <div className='startContainer'>
        <button className="start-btn">
          <Link to="/helper">Start</Link>
        </button>
      </div>
    </div>
    <div className="right-filler"/>
  </Layout>
)

export default IndexPage
