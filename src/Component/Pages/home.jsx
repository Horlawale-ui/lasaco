import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import background from "../../hero-bg-4.png";
import Logo from "../../mission.svg";

const Home = () => {
    const NavLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #2f4858;
    color: #fff;
    border-radius: 5px;
    transform: translateY(-40px);
    text-decoration: none;
    visibility: visible;
    `

    return (
        <div>
            {/* Hero Section */}
            <div className="hero-bg" style={{backgroundImage: `url(${background})`}}>
            <div className="hero-details">
                <h1 className="herocap">Lasaco Assess</h1>
                <p>
                    This Portal is for the assessment of Graduate Trainee, Intern, and Drivers.
                </p>
            </div>
            </div>

            {/* Cards */}
            <div className="cards">
                <NavLink to='/quiz'>
                    <img src={Logo} alt="mission logo" />
                    <h3>Entry Level</h3>
                    <p>
                        Take the Entry level assessment of Lasaco Asuurance .
                    </p>
                </NavLink>
                <NavLink to='/quiz'>
                    <img src={Logo} alt="mission logo" />
                    <h3>Internship</h3>
                    <p>
                    Take the Internship level assessment of Lasaco Asuurance.
                    </p>
                </NavLink>
                <NavLink to='/quiz'>
                    <img src={Logo} alt="mission logo" />
                    <h3>Drivers</h3>
                    <p>
                    Take the  level assessment of Lasaco Asuurance.
                    </p>
                </NavLink>
            </div>
        </div>
    )
}

export default Home;