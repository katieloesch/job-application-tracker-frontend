import React from 'react';
import { FaTimes } from 'react-icons/fa';

import Wrapper from '../styledComponents/SidebarMobile';
import { useDashboardContext } from '../pages/DashboardLayout';
import { Logo } from '../components';
import { navLinks } from '../utils';
import { NavLink } from 'react-router-dom';

const SidebarMobile = () => {
  return (
    <Wrapper>
      <div className='sidebar-container show-sidebar'>
        <div className='content'>
          <button type='button' className='close-btn'>
            <FaTimes />
          </button>
          <header>
            <Logo section='sidebar-mobile' />
          </header>
          <div className='nav-links'>
            {navLinks.map((link, index) => (
              <NavLink
                to={link.path}
                key={`nav-link-mobile-${link.label}`}
                className={`nav-link ${link.className}`}
              >
                <span className='icon'>{link.icon}</span>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SidebarMobile;
