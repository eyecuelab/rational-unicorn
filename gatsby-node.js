// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it
// const path = require("path")

// exports.createPages = async ({graphql, actions}) => {
//   const {createPage} = actions
//   const response = await graphql(`
//   query {
//     allContentfulTestTypeForUnicorn{
//       edges {
//         node {
//           slug
//         }
//       }
//     }
//   }
//   `)


// response.data.allContentfulTestTypeForUnicorn.edges.forEach(edge => {
//   createPage ({
//     path: `/helper/${edge.node.slug}`,
//     component: path.resolve("./src/pages/answer-node.js"),
//     context: {
//       slug: edge.node.slug, 
//     }
//   })
// })
// }