import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <p>© 2022 Airbnb demo !</p>
            <p>Privacy · Terms · Sitemap · Company Details</p>
        </div>
    )
}

export default React.memo(Footer);