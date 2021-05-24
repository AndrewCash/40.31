import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


export default function Yellow() {
    return(
        <StaticImage 
            src="../images/yellow-shirt.jpg"  
            alt="A rack with several shirts. The shirt at the front of the rack is yellow." 
            placeholder="blurred"
            layout="fixed"
            width={200}
            height={200}
        />
    ) 
}
