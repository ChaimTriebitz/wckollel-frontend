import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/imgs/wckollel.jpg';
import { useState } from 'react';
import { svgs } from '../assets/svgs';

const links = [
   { name: 'HOME', link: '/' },
   { name: 'SCHEDULES', link: '/schedules' },
   { name: 'DONATIONS', link: '/donations' },
]

export const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   return (
      <header className='header'>
         <Link to='/'>
            <img src={logo} alt="wckollel logo" />
         </Link>
         <nav onClick={()=>setIsMenuOpen(false)} className={isMenuOpen ? 'open' : ''}>
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
