import React from 'react';
import {
Nav,
Logo,
NavLink,
Bars,
NavMenu,
NavBtn,
} from './NavbarElement';
import NavLogo from '../../assets/Lasaco_logo.png';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
        <Logo className='logopic'>
        <img src={NavLogo} alt="Nav logo" />
        </Logo>
		<NavMenu>
            <NavLink to='/' activeStyle>
                Home
            </NavLink>
            <NavLink to='/abouts' activeStyle>
                About
            </NavLink>
            <NavLink to='/team' activeStyle>
                Teams
            </NavLink>

            <NavBtn>
                <NavLink className="NavBtnLink"  to='/quiz'>Get Started</NavLink>
            </NavBtn>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
