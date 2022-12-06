import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">logo</div>
        <div className="links">
          <Link className="link" to="/?cat=art"><h6>ART</h6></Link>
          <Link className="link" to="/?cat=science"><h6>science</h6></Link>
          <Link className="link" to="/?cat=technology"><h6>technology</h6></Link>
          <Link className="link" to="/?cat=cinema"><h6>cinema</h6></Link>
          <Link className="link" to="/?cat=design"><h6>design</h6></Link>
          <Link className="link" to="/?cat=food"><h6>food</h6></Link>
        </div>
        <span>oeee</span>
        <span><Link to='/logout'>Loogut</Link></span>
        <span className='write'><Link to='/write'>Write</Link></span>
      </div>
    </div>
  )
}

export default Navbar