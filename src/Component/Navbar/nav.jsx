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
            <NavLink to='/' >
                Home
            </NavLink>
            <NavLink to='/about' >
                About
            </NavLink>
            <NavLink to='/team' >
                Teams
            </NavLink>

            <NavBtn>
                <NavLink className="NavBtnLink"  to='/signin'>Get Started</NavLink>
            </NavBtn>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
