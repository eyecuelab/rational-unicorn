import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
query($slug: String!){
  contentfulTestTypeForUnicorn(slug: {eq: $slug}){
    uniTitle
    uniBodyText { uniBodyText}
    uniId

  }
}`

const AnswerNode = props => {
  return (
    <Layout>
      <SEO title={props.data.contentfulTestTypeForUnicorn.uniTitle} />
      <div className="bodyText">
        <h1>{props.data.contentfulTestTypeForUnicorn.uniTitle}</h1>
        <span>
          {props.data.contentfulTestTypeForUnicorn.uniBpdyText}
        </span>
      </div>
    </Layout>
  )
}

export default AnswerNode