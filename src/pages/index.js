import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  let stripe
  useEffect(() => {
    stripe = window.Stripe("pk_test_zaJJK5t95ONRd1bRGnYiX93R", {
      betas: ["checkout_beta_4"],
    })
  })

  const redirectToCheckout = () => {
    console.log("clicked")
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <button
        id="checkout-button"
        role="link"
        onClick={() => {
          redirectToCheckout()
        }}
      >
        BUY MY EBOOK
      </button>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
