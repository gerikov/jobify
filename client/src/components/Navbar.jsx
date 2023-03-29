import Wrapper from '../assets/wrappers/Navbar';
import { FaUserCircle, FaCaretDown, FaAlignLeft } from 'react-icons/fa';
import Logo from './Logo';
import { useAppContext } from '../context/appContext';
import { useState } from 'react';

const Navbar = () => {
  const { toggleSidebar, user, logoutUser } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);
  return (
    <Wrapper>
      <div className='nav-center'>
        <button
          className='toggle-btn'
          type='button'
          onClick={() => toggleSidebar()}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>Dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'show-dropdown dropdown' : 'dropdown'}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={() => logoutUser()}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
