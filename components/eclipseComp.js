export const eclipseComp = (colorVariant = "primary") => {
	const eclipseElement = document.createElement("div");
	eclipseElement.classList.add("eclipseElement", colorVariant); 
	return eclipseElement;
};
