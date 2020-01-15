import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
