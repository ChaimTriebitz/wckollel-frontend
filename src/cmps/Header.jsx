import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/imgs/wckollel.png';
import { useEffect, useState } from 'react';
import { svgs } from '../assets/svgs';
import { ACTIONS } from '../state';
import { useGlobalState } from '../hooks';

const links = [
   { name: 'HOME', link: '/' },
   // { name: 'SCHEDULES', link: '/schedules' },
   // { name: 'SCHEDULES', link: '/schedules' },
   { name: 'DONATIONS', link: '/donations' },
]

export const Header = () => {
   const { dispatch } = useGlobalState()

   const { pathname } = useLocation()

   useEffect(() => {
      dispatch({ type: ACTIONS.SET, entity: 'page', payload: pathname.replace(/^\/+/, '') })
   }, [pathname])

   const [isMenuOpen, setIsMenuOpen] = useState(false)
   return (
      <header className='header'>
         <Link className='logo' to='/'>
            <img src={logo} alt="wckollel logo" />
            {/* {svgs.logo} */}
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
