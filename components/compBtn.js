export const button = (text, onclick, className) => {
	const btnElem = document.createElement("button");

	btnElem.innerText = text; 
	btnElem.onclick = onclick; 
	btnElem.className = className; 

	return btnElem;
};
