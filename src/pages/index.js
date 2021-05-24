import * as React from 'react'
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

import Layout from "../components/layout"

import Yellow from "../components/yellow"

export default function Home() {
  return (
    <Layout>
      <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            { /* Logged in */ }

            You are logged in, so check your{" "} 
            <Link to="/app/profile">profile</Link>
          </>
        ) : (
          <>
            { /* Logged out */ }

            You should <Link to="/app/login">log in</Link> to see
            restricted content.
          </>
        )}
      
            
      {/* <img  src={YellowShirt} alt="A rack with several shirts. The shirt at the front of the rack is yellow."/> */}
      <Yellow />
      
      </p>

    </Layout>
  )
}