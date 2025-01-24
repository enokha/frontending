import React from 'react';

// CSS
import '../styles/page-banner.css';

export default function PageBanner({ imgURL, title }) {
    return (
        <section className="page-banner">
            <img src={imgURL} alt="page banner" />
            {title && <h2>{title}</h2>}
        </section>
    );
}
