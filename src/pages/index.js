import * as React from "react"

import Seo from "../components/seo"
import Header from "../components/header"
import About from "../components/About"

const IndexPage = () => (
  <main>
        <Header />

    <h1>Welcome to My Gatsby Site!</h1>
    <p>This is my first Gatsby site.</p>
    <About/>
  </main>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
