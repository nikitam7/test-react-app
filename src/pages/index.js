import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="hero-group">
        <h1>Learn to <br /> design seamless learning experiences.</h1>
        <p>Complete courses about the best tools and design systems to use when teaching.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <div className="logos">
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-invision.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-sketch.png')} width="50" />
        </div>
        <Wave />
      </div>
    </div>

    <div className="Cards">
      <h2>11 courses, more coming...</h2>
      <div className="CardGroup">
        <Card 
          title="Creating Content for Designers"
          text="12 sections"
          image={require('../images/minimal-1.jpg')} />
        <Card 
          title="How to Deliver Content"
          text="10 sections"
          image={require('../images/minimal-5.jpg')} />
        <Card 
          title="Effective Learning Environments"
          text="3 sections"
          image={require('../images/minimal-7.jpg')} />
        <Card 
          title="Learning Content Best Practices"
          text="8 sections"
          image={require('../images/minimal-8.jpg')} />
        </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo.png')}
      title="Power your Learning Platform"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
  </div>
)

export default IndexPage
