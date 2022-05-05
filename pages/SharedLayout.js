import { Outlet } from 'react-router-dom';

// import Navbar from 'components/Navbar';
import StyledNavbar from 'components/StyledNavbar';

const SharedLayout = ({ user }) => {
  return (
    <>
      <StyledNavbar user={user} />
      <Outlet />
    </>
  );
};

export default SharedLayout;
