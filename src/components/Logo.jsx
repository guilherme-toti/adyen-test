import React from 'react'
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to="/">
      <div className="animated fadeIn slow">
        <h1 className="font-avenir-bold text-xl text-blue-900 pt-8 ml-4">WAW</h1>
      </div>
    </Link>
  )
}

export default Logo;
