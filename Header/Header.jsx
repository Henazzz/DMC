import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
       <header>
        <nav>
            <ul className='list'>
                <li> <Link to = "/"> Home </Link></li>
                <li> <Link to = "/Characters"> Characters </Link></li>
                <li> <Link to = "/games"> Games </Link></li>
            </ul>
         </nav>  
       </header>
  )
}
