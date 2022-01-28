import React from 'react';
import './Logo.css';
import { TiHtml5 } from 'react-icons/ti';
import { SiCss3, SiRedux, SiGithub, SiTypescript, SiFirebase, SiVisualstudiocode } from 'react-icons/si';
import { FaSass, FaNpm, FaGitAlt } from 'react-icons/fa';
import { DiNodejs } from 'react-icons/di';

const Logo = () => {
    return (
        <div className='lo'>
            <TiHtml5 size={80} className='html' />
            <SiCss3 size={70} className='css' />
            <SiRedux size={70} className='redux' />
            <SiGithub size={70} className='github' />
            <SiTypescript size={70} className='ts' />
            <SiFirebase size={70} className='fb' />
            <SiVisualstudiocode size={70} className='vs' />
            <FaSass size={70} className='sass' />
            <FaNpm size={70} className='npm' />
            <FaGitAlt size={70} className='git' />
            <DiNodejs size={70} className='node' />
        </div>
    );
}

export default Logo;