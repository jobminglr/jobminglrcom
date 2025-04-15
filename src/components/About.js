import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
  return (
    <section className="about-jobminglr">
      <div className="container">
        <div className="about-image">
          <StaticImage
            src="../images/JobApplication.jpg"
            alt="Team Photo"
            placeholder="blurred"
            layout="constrained"
          />
        </div>

        <div className="about-content">
          <h2>About JobMinglr</h2>
          <p>
            JobMinglr is a cutting-edge job matching platform that simplifies your
            search for the perfect role or candidate. By blending modern technology
            with an intuitive swipe-based interface, we make finding the right match
            quick, easy, and enjoyable.
          </p>

          <h3>Our Mission</h3>
          <p>
            JobMinglr is dedicated to improving the job search experience by
            using technology to match candidates and roles seamlessly. We aim to
            revolutionize the way professionals connect with opportunities.
          </p>

          <h3>Key Features</h3>
          <ul>
            <li><strong>Swipe-Based Matching:</strong> Quickly browse personalized job or candidate matches with a simple swipe.</li>
            <li><strong>AI-Powered Suggestions:</strong> Get smarter, more relevant recommendations every time you use the platform.</li>
            <li><strong>In-App Communication:</strong> Connect directly within the app to streamline the hiring process.</li>
            <li><strong>Mobile-Optimized:</strong> Enjoy a seamless experience on any device, anywhere.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
