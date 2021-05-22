import React from 'react'
import { Link, navigate } from 'gatsby'
import { getUser, isLoggedIn, logout } from "../services/auth"


function greetingMessage() {
    let greetingMessage = ""
    if (isLoggedIn()) {
        greetingMessage = `Hello ${getUser().name}`
    } else {
        // greetingMessage = "You are not logged in"
    }

    return greetingMessage
}


export default function NavBar() {
    
    return (
        <div
            style={{
                display: "flex",
                flex: "1",
                justifyContent: "space-between",
                borderBottom: "1px solid #d1c1e0",
            }}
        >
            <span>{greetingMessage()}</span>
            
            <nav>
                <Link to="/">Home</Link>
                {' '}
                <Link to="/app/profile">Profile</Link>
                {' '}
                
                    <a
                        href="/"
                        onClick={event => {
                            event.preventDefault()
                            logout(() => navigate(`/app/login`))
                        }}
                    >
                        {isLoggedIn() ? (
                            <span>Logout</span>
                        ) : (
                            <span>Login</span>   
                        )}
                    </a>
                  
              
                   
            </nav>
        </div>
    )
}