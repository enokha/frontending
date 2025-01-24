import React, { useState } from 'react';

// Image
import arrow from '../assets/arrow.svg';

// CSS
import '../styles/collapsible-section.css';

export default function CollapsibleSection({ title, children }) {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(prev => !prev);
    };

    return (
        <div className={`collapsible-section ${active ? 'active' : ''}`}>
            <div className="collapsible-header" role="button" onClick={handleClick}>
                <h2>{title}</h2>
                <button>
                    <img src={arrow} alt="arrow" />
                </button>
            </div>
            <div className="collapsible-body">
                {children}
            </div>
        </div>
    );
}
