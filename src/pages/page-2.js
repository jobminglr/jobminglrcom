import * as React from "react"
import { Link } from "gatsby"

import Layout1 from "../components/Layout1"
import SEO1 from "../components/SEO1"

const SecondPage = () => (
  <Layout1>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout1>
)

export const Head = () => <SEO1 title="Page two" />

export default SecondPage
