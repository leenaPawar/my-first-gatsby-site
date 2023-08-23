import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const IndexPage = () => {
  return(
  <Layout pageTitle="Home page">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident voluptates fugiat! Eius veniam error dignissimos reiciendis nam nemo unde autem, impedit voluptas culpa adipisci maiores laborum molestiae repellendus modi!</p>
  </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage;
