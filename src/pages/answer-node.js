// import React from "react"
// import {graphql, Link, useStaticQuery} from "gatsby"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

// export const query = graphql`
// query($slug: String!){
//   contentfulTestTypeForUnicorn(slug: {eq: $slug}){
//     uniTitle
//     uniBodyText { uniBodyText}
//     id

//   }
// }`

// const AnswerNode = props => {
//   return (
//     <Layout>
//       <SEO title={props.data.contentfulTestTypeForUnicorn.uniTitle} />
//       <div className="bodyText">
//         <h1>{props.data.contentfulTestTypeForUnicorn.uniTitle}</h1>
//         <span>
//           {props.data.contentfulTestTypeForUnicorn.uniBodyText.uniBodyText}
//         </span>
//       </div>
//     </Layout>
//   )
// }

// export default AnswerNode