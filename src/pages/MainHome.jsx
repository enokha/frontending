import React from "react";

// Images
import CabinLogo from "../assets/cabin.jpg";

// CSS
import "../styles/main-home.css";

// Components
import PageBanner from "../components/PageBanner";
import ListingCard from "../components/ListingCard";

// Data
import apartments from "../data/data.json";

export default function MainHome() {
    return (
        <main>
            <PageBanner imgURL={CabinLogo} title={'Your key to the perfect nest'} />
            <section className="cards-container">
                {apartments.map((apartment) => (
                    <ListingCard key={apartment.id} ImgURL={apartment.cover} title={apartment.title} apartmentID={apartment.id} />
                ))}
            </section>
        </main>
    );
}
