import * as FaIcons from 'react-icons/fa';
import {NavLink as Link}from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #ADD8E6;
height: 55px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1150px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const Logo = styled.nav`
display: flex;
align-items: center;
margin-right: -24px;
width:150px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
`;

export const NavLink = styled(Link)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #000000;
}
`;

export const Bars = styled(FaIcons.FaBars)`
display: none;
color: #2f4858;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #2f4858;
padding: 10px 22px;
color: #fff;
outline: none;
cursor: pointer;
border-radius: 25px;
transition: all 0.2s ease-in-out;
text-decoration: none;
border: 2px solid #2f4858;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #000;
}
`;
