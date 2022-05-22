import Link from 'react-scroll/modules/components/Link';
import logo from '../images/autopartslogo.png';


function Navbar() {

  return (
    <nav>
      <Link to='main' className='logo' smooth={true} duration={1000}> 
        <img src={logo} alt=''/>
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label for='menu-btn' className='menu-icon'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><Link to="main" smooth={true} duration={1000}> Home </Link></li>
        <li><Link to="products" smooth={true} duration={1000}> Products </Link></li>
        <li><Link to="events" smooth={true} duration={1000}> Events </Link></li>
        <li><Link to="services" smooth={true} duration={1000}> Service </Link></li>
      </ul>
    </nav>
  )
}
export default Navbar;