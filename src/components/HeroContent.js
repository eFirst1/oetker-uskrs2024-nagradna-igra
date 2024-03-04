import React from 'react'
import HRBackground from '../assets/img/USKRS_HEADER-naslov_HR_1602_FINAL.png'

const heroStyle = {
    background: `url(${HRBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '30vh',
    minHeight: '700px',
    maxHeight: '927px',
}

const HeroContent = () => {
    return (
        <div className="content-hero" style={heroStyle}></div>
    )
}

export default HeroContent