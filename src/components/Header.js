import React from 'react'
import HeaderCss from './Header.module.css'

const Header = () => {
  return (
    <nav className={HeaderCss.nav}>
        <div className='left'>
            <p>TODO APP</p>
        </div>
        <div>
            <ul className={HeaderCss.right}>
                <li className={HeaderCss.li}>Home</li>
                <li className={HeaderCss.li}>Profile</li>
                <li>Login</li>
            </ul>
        </div>
    </nav>
  )
}

export default Header