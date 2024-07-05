import React from 'react'
import "./Card.css"

const Ccard = (props) => {
  return (
    <div className='card' style={{overflow:'hidden'}}>
      {/* <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/04/react-js-and-vite-js-logo-on-night-sky-background.jpg" alt="" /> */}
      <h1>{props.title}</h1>
      <p>{props.descrip}</p>
    </div>
  )
}

export default Ccard
