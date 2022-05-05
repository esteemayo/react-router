import { NavLink } from 'react-router-dom';

const StyledNavbar = ({ user }) => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Products
      </NavLink>
      {user && (
        <NavLink
          to='/dashboard'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Dashboard
        </NavLink>
      )}
      {!user && (
        <NavLink
          to='/login'
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default StyledNavbar;
