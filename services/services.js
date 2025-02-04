import { modalComp } from "../components/modalComp.js"

let modal

/**
 *
 * @param {string} className // three names "primary-btn" | "secondary-btn" | "third-color"
 * @returns {void}
 */

export const showModal = (className) => {
	let modalBody
	let modalTitle
	// evaluate what class name is being passed "secondary-btn" | "primary-btn" |  "third-color"
	if (className === "secondary-btn") {
	}
	if (className === "primary-btn") {
	}
	if (className === "third-color") {
		// if the third color class is passed add a title and an image with its attributes (source and alt)
		modalBody.appendChild(title)
		modalBody.appendChild(img)
	}
	app.appendChild(modalComp(modalTitle, modalBody, className))
	modal = document.querySelector(".overlay-modal")
	modal.classList.remove("d-none")
}
