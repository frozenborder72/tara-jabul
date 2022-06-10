import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleHamburger = () => setIsMenuOpen(isMenuOpen ? false : true)
  const closeMenuIfOpen = () => isMenuOpen && setIsMenuOpen(false)

  return (
    <header className="header">
      <Link className="logo" to="/">
        Tara Jabul
      </Link>

      <div
        className={`menu-btn ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleHamburger}
      >
        <div className="menu-btn__lines"></div>
      </div>

      <nav className="main-navigation">
        <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <li className="menu-item">
            <Link to="/about" onClick={closeMenuIfOpen}>
              About Me
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/works" onClick={closeMenuIfOpen}>
              My Works
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/contact" onClick={closeMenuIfOpen}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
