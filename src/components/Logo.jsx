import React from 'react'
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <div className="animated fadeIn slow">
      <Link to="/">
          <h1 className="font-avenir-bold text-xl text-blue-900 pt-8 ml-4">WAW</h1>
      </Link>
    </div>
  )
}

export default Logo;
