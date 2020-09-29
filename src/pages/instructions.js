import Layout from "../components/layout"
import React, { useMemo, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Graph } from "react-d3-graph"

const JSONTemplate = JSON.stringify({
  "answers": [
    {
      "text": "What the user will select as an option goes here.",
      "description": "This is the response that pops up upon selection.",
      "resultText": "This is the pertinent data that will be included in the final cheat sheet.",
      "prevNodeId": "ID of previous node",
      "nextNodeId": "ID of node this response links to"
    },
    {
      "text": "What the user will select as an option goes here.",
      "description": "This is the response that pops up upon selection.",
      "resultText": "This is the pertinent data that will be included in the final cheat sheet.",
      "prevNodeId": "ID of previous node",
      "nextNodeId": "ID of node this response links to"
    }
  ]
}, undefined, 4);


const Instructions = () => {

  const data = useStaticQuery(
    graphql`
    query {
      allContentfulUnicornNode {
        edges {
          node {
            answers {
              answers {
                nextNodeId
                prevNodeId
              }
            }
            nodeId
          }
        }
      }
    }
    `
  )


  const nodes = useMemo(() => {
    return data?.allContentfulUnicornNode?.edges?.map?.(edge => {
      return {
        id: edge.node.nodeId
      }
    })
  }, [data])

  // const links = []

  // const linkCheck = useMemo(() => {
  //   const nodeIds = data?.allContentfulUnicornNode?.edges?.map?.(edge => edge.node.nodeId)
  //   data?.allContentfulUnicornNode?.edges?.forEach?.((edge) => {

  //   })

  //   if (nodeIds.includes)
  // })


  const [links, errors] = useMemo(() => {
    const nodeIds = data?.allContentfulUnicornNode?.edges?.map?.(edge => edge.node.nodeId);
    const good = []
    const bad = [];
    data?.allContentfulUnicornNode?.edges?.forEach?.((edge) => {
      edge.node.answers.answers.forEach(({ nextNodeId }) => {
        const source = edge.node.nodeId;
        const target = nextNodeId;
        if (nodeIds.includes(target) && !good.includes({ source, target })) {
          good.push({ source, target })
        } else {
          bad.push(edge);
        }
      })
    });
    return [good, bad];
  }, [data])
  //                  question
  /*                  /      \
                  answer     answer
                 /              \
  * question   -  answer  -    question 
                 \
                 answer
                       \
                         question   
  
  */



  const flowChartData = {
    d3: { linkLength: 300, },
    nodes, links
  }
  const chartConfig = {
    directed: true,
    node: {
      color: "pink",
      size: 900,
      fontSize: 14,
      labelPosition: "center"

    },
    link: {
      color: "purple",
      markerHeight: 12,
      markerWidth: 20
    },
    d3: { linkLength: 200, gravity: -200 }
  }

  console.log("NODES: ", nodes)
  console.log("LINKS: ", links)

  return (
    <Layout>
      <div classname="container">
        <h1>Instructions for Adding Content to RULS "Choose Your Venture"</h1>
        <div>
          <ol>
            <li>Log in to the <a href="https://app.contentful.com/">Contentful CMS.</a></li>
            <li>Click on the "Content" tab at the top of the page.</li>
            <li>On the upper right side of the page, click on the "Add Entry" dropdown menu and select the content type "UnicornNode."</li>
            <li>Choose a four letter NodeID for the new node and type it into the NodeId text field.</li>
            <li>Type the question or prompt for this node into the Question text field.</li>
            <li>Fill out the Answers JSON field using the template below.</li>
            <li>Double check your work and make sure the JSON field is not warning you that your object is invalid in red below the field.</li>
            <li>Click "Publish" on the upper right hand side of the page.</li>
            <li>You're done!</li>
          </ol>
        </div>
        <div>
          <h2>Answers field JSON template</h2>
          <textarea defaultValue={JSONTemplate} style={{ width: "50%", height: "40vh" }} />
        </div>
        <Graph id="flowChart" data={flowChartData} config={chartConfig} />
      </div>
    </Layout>
  )

}

export default Instructions