import Layout from "../components/layout"
import React from "react"


const Instructions = () => {

  return (
    <Layout>
      <h1>Instructions for Adding Content to RULS "Choose Your Venture"</h1>
      <div>
        <ol>
          <li>Log in to the <a href="https://app.contentful.com/">Contentful CMS.</a></li>
          <li>Click on the "Content" tab.</li>
          <li>On the upper right side of the screen, click on the "Add Entry" dropdown menu and select the content type "UnicornNode."</li>
          <li>Choose a four letter NodeID for the new node and type it into the NodeId text field.</li>
          <li>Type the question or prompt for this node into the Question text field.</li>
          <li>Fill out the Answers JSON field using the template below.</li>
          <li>Double check your work and make sure the JSON field is not warning you that your object is invalid in red below the field.</li>
          <li>Click "Publish" on the upper right hand side of the page.</li>
          <li>You're done!</li>
        </ol>
      </div>

    </Layout>
  )

}

export default Instructions