import logo from '../images/autopartslogo.png';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to='/' className='brandlogo'> <img src={logo} alt=''/></Link>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label for='menu-btn' className='menu-icon'><span className='nav-icon'></span></label>
      <ul className='menu'>
        <li><Link to="/" > Home </Link></li>
        <li><Link to="/products" > Products </Link></li>
        <li><Link to="/event" > Events </Link></li>
        <li><Link to="/services" > Service </Link></li>
      </ul>
    </nav>
  )
}
export default Navbar;