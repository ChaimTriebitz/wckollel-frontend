import { NavLink } from 'react-router-dom'
import logo from '../assets/imgs/wckollel.jpg';

const links = [
   { name: 'about us', link: '/about' },
   { name: 'schedules', link: '/schedules' },
   { name: 'donations', link: '/donations' },
]

export const Header = () => {
   return (
      <header className='header'>
         <img className='logo' src={logo} alt="company logo" />
         <nav className='nav'>
            {
               links.map(link =>
                  <NavLink
                     to={link.link}
                     className='link'
                     key={link.name}
                  >
                     {link.name}
                  </NavLink>
               )
            }
         </nav>
      </header>
   )
}
