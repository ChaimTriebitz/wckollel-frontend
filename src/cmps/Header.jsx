import { NavLink } from 'react-router-dom'
import logo from '../assets/imgs/wckollel.jpg';
import { useState } from 'react';
import { svgs } from '../assets/svgs';

const links = [
   { name: 'ABOUT US', link: '/about' },
   { name: 'SCHEDULES', link: '/schedules' },
   { name: 'DONATIONS', link: '/donations' },
]

export const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   return (
      <header className='header'>
         <img src={logo} alt="wckollel logo" />
         <nav>
            {
               links.map(link =>
                  <NavLink
                     to={link.link}
                     key={link.name}
                  >
                     {link.name}
                  </NavLink>
               )
            }
         </nav>
         <button className={isMenuOpen ? 'open' : ''} onClick={() => setIsMenuOpen(prev => !prev)}>
            {svgs.hamburger}
         </button>
      </header>
   )
}
