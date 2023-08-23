import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import scrollTo from 'gatsby-plugin-smoothscroll';


const IndexPage = () => {
  return(
  <>
  <Layout pageTitle="Home page">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident voluptates fugiat! Eius veniam error dignissimos reiciendis nam nemo unde autem, impedit voluptas culpa adipisci maiores laborum molestiae repellendus modi!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident voluptates fugiat! Eius veniam error dignissimos reiciendis nam nemo unde autem, impedit voluptas culpa adipisci maiores laborum molestiae repellendus modi!</p>
    <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/about-header-desk.jpg"
      />
  </Layout>
  <button onClick={() => scrollTo('#some-id')}>My link</button>
  </>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage;
