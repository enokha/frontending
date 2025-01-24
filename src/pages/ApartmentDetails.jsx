import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Data
import apartments from "../data/data.json";

// Components
import ImageCarousel from "../components/ImageCarousel";
import CollapsibleSection from "../components/CollapsibleSection";

// Images
import activeStar from "../assets/star-active.svg";
import inactiveStar from "../assets/star-inactive.svg";

// CSS
import "../styles/apartment-details.css";

export default function ApartmentDetails() {
  const {id} = useParams();
  const navigate = useNavigate();

  const foundApartment = apartments.find((apartment) => apartment.id === id);

  useEffect(() => {
    if (!foundApartment) {
      navigate("/not-found");
    }
  }, [foundApartment, navigate]);

  return (
      <main>
        <ImageCarousel imagesArray={foundApartment?.pictures || []}/>
        <article className="apartment-details">
          <h2>{foundApartment?.title || "Unknown Title"}</h2>
          <p>{foundApartment?.location || "Location Unavailable"}</p>

          {/* Tags Section */}
          {foundApartment?.tags?.length > 0 && (
              <div className="tags-container">
                {foundApartment.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
          )}

          {/* Rating Stars */}
          <div className="stars-container">
            {[...Array(5)].map((_, index) => (
                <img
                    key={index}
                    src={index < (foundApartment?.rating || 0) ? activeStar : inactiveStar}
                    alt={index < (foundApartment?.rating || 0) ? "active star" : "inactive star"}
                />
            ))}
          </div>

          {/* Host Information */}
          {foundApartment?.host && (
              <div className="greater-container">
                <span>{foundApartment.host.name || "Host Unavailable"}</span>
                {foundApartment.host.picture && (
                    <img src={foundApartment.host.picture} alt={foundApartment.host.name || "Host"}/>
                )}
              </div>
          )}
        </article>

        {/* Collapsible Sections */}
        <div className="apartment-collapsible-container">
          <CollapsibleSection title="Description">
            {foundApartment?.description || "No description available."}
          </CollapsibleSection>
          <CollapsibleSection title="Equipments">
            <ul>
              {foundApartment?.equipments?.length > 0 ? (
                  foundApartment.equipments.map((item, i) => <li key={i}>{item}</li>)
              ) : (
                  <li>No equipment details available.</li>
              )}
            </ul>
          </CollapsibleSection>
        </div>
      </main>
  );
}