import React, { useState } from 'react';

// CSS
import "../styles/about-page.css";
import "../styles/collapsible-section.css";

// Images
import CabinLogo from "../assets/cabin.jpg";
import arrow from "../assets/arrow.svg";

// Components
import PageBanner from "../components/PageBanner";

// Data
import englishAbout from "../data/data.about.en.json";
import frenchAbout from "../data/data.about.fr.json";
import spanishAbout from "../data/data.about.sp.json";

export default function AboutPage() {
	const [language, setLanguage] = useState('english');

	const handleLanguageChange = (selectedLanguage) => {
		setLanguage(selectedLanguage);
	};

	const getActiveData = () => {
		switch (language) {
			case 'french':
				return frenchAbout;
			case 'spanish':
				return spanishAbout;
			default:
				return englishAbout;
		}
	};

	return (
		<main className="about-page">
			<h1>{getActiveData().title || "About Us"}</h1>
			<PageBanner imgURL={CabinLogo} />
			<article>{getActiveData().description || "No description available."}</article>

			{/* Collapsible Sections */}
			<div className="collapsible-container">
				{getActiveData().accordions?.map((accordion, index) => (
					<CollapsibleSection key={index} title={accordion.title || "Section"}>
						{accordion.content || "No content available."}
					</CollapsibleSection>
				))}
			</div>

			{/* Language Selection */}
			<div className="language-container">
				{["english", "french", "spanish"].map((lang) => (
					<button key={lang} onClick={() => handleLanguageChange(lang)}>
						{lang.toUpperCase()}
					</button>
				))}
			</div>
		</main>
	);
}

const CollapsibleSection = ({ title, children }) => {
	const [active, setActive] = useState(false);

	return (
		<div className={`collapsible-section ${active ? 'active' : ''}`}>
			<div className="collapsible-header" role="button" onClick={() => setActive(!active)}>
				<h2>{title}</h2>
				<button><img src={arrow} alt="arrow" /></button>
			</div>
			<div className="collapsible-body">{children}</div>
		</div>
	);
};
