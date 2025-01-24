import React from 'react';
import { NavLink } from 'react-router-dom';

// CSS
import '../styles/main-home.css';

export default function ListingCard({ ImgURL, title, apartmentID }) {
    return (
        <NavLink to={`/apartment/${apartmentID}`} className="listing-card">
            <article className="card">
                <h3>{title}</h3>
                <img className="card-img" src={ImgURL} alt={title} />
            </article>
        </NavLink>
    );
}
