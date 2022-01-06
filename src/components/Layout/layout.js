import React from "react"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import "./layout.css"

const Layout = props => {
  return (
    <div className="layout-container">
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
