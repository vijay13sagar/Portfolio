import React, { useContext, useState } from 'react';
import { ThemeContext } from "../../Context/theme";
import { NavLink } from 'react-router-dom';
import { NavBar, List, ListItem, NavItem, ToggleBut, ProgressPercent, MyName, SurName } from '../Styled_Components/styles';
import { GiHeraldicSun, GiHamburgerMenu } from 'react-icons/gi';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import './Navbar.css';

const Nav = () => {
    const [{ isDark }, toggleTheme] = useContext(ThemeContext);
    const [isopen, setIsopen] = useState(false);
    return (
        <div className='cont'>
            <NavBar Dark={isDark}>
                <div className='hor'>
                    <p><MyName Dark={isDark}>Vizia Vidya Sagar </MyName>
                        <SurName Dark={isDark}>Kasina</SurName></p>
                    <ToggleBut Dark={isDark} onClick={toggleTheme}>
                        <BsFillMoonStarsFill color='#E6F8FF' size={30} />
                        <ProgressPercent Dark={isDark} Button height='1.4' percent='50' color='white' />
                        <GiHeraldicSun color='#F7FB00' size={40} />
                    </ToggleBut>
                    <List>
                        <div className='hornav'>
                            <NavLink to='Portfolio.github.io/' className={({ isActive }) => (isActive & isDark ? 'activeDark Dark' : isActive & !isDark ? 'activeLight light' : isDark ? 'Dark' : 'light')}>
                                <ListItem><NavItem Dark={isDark}>Home</NavItem></ListItem>
                            </NavLink>
                            <NavLink to='Portfolio.github.io/Skills' className={({ isActive }) => (isActive & isDark ? 'activeDark Dark' : isActive & !isDark ? 'activeLight light' : isDark ? 'Dark' : 'light')}>
                                <ListItem><NavItem Dark={isDark}>My Skills</NavItem></ListItem>
                            </NavLink>
                            <NavLink to='Portfolio.github.io/Contact' className={({ isActive }) => (isActive & isDark ? 'activeDark Dark' : isActive & !isDark ? 'activeLight light' : isDark ? 'Dark' : 'light')}>
                                <ListItem><NavItem Dark={isDark}>Contact</NavItem></ListItem>
                            </NavLink>
                        </div>
                    </List>
                    {isopen ? <ImCross className='icon' color='black' size={20} onClick={() => { setIsopen(!isopen) }} /> : <GiHamburgerMenu className='icon' color='black' size={20} onClick={() => { setIsopen(!isopen) }} />}
                </div>

            </NavBar>
            <nav>
                <div className={isopen && isDark ? 'ver drk' : isopen && !isDark ? 'ver lyt' : 'noshow'}  >
                    <NavLink to='Portfolio.github.io' className={({ isActive }) => (isActive & isDark ? 'activeDark Dark' : isActive & !isDark ? 'activeLight light' : isDark ? 'Dark' : 'light')}>
                        <ListItem><NavItem Dark={isDark}>Home</NavItem></ListItem>
                    </NavLink>
                    <NavLink to='Portfolio.github.io/Skills' className={({ isActive }) => (isActive & isDark ? 'activeDark Dark' : isActive & !isDark ? 'activeLight light' : isDark ? 'Dark' : 'light')}>
                        <ListItem><NavItem Dark={isDark}>My Skills</NavItem></ListItem>
                    </NavLink>
                    <NavLink to='Portfolio.github.io/Contact' className={({ isActive }) => (isActive & isDark ? 'activeDark Dark' : isActive & !isDark ? 'activeLight light' : isDark ? 'Dark' : 'light')}>
                        <ListItem><NavItem Dark={isDark}>Contact</NavItem></ListItem>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};
export default Nav;
