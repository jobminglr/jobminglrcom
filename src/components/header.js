import * as React from "react"
import { Link } from "gatsby"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
  <div className="header-content">
    <h1 className="header-title">JOBMINGLR</h1>
    <nav>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/get-started">Get Started</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/download">Download</Link></li>
      </ul>
    </nav>
  </div>
</header>

)

export default Header
