import * as React from "react"

import Layout1 from "../components/Layout1"
import SEO1 from "../components/SEO1"

const NotFoundPage = () => (
  <Layout1>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout1>
)

export const Head = () => <SEO1 title="404: Not Found" />

export default NotFoundPage
