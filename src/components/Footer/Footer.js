import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'

function Footer() {

    const shortname = (name) => {
        if(name.length > 10) {
            return name.split(" ")[0]
        } else {
            return name
        }
    }

    const { theme }  = useContext(ThemeContext)

    return (
        <div className="footer" style={{backgroundColor: theme.secondary}}>
            <p style={{color: theme.tertiary}}>
                Copyright © 2024  
                <span style={{color: theme.primary, margin: '0 0.5rem -1rem 0.5rem'}}>
                    |
                </span>
                 by <a href='https://www.facebook.com/nivakine.gl/' target='_blank' style={{color: theme.primary}}>Lacina DRABO</a>
            </p>
        </div>
    )
}

export default Footer

