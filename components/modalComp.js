import { button } from "./compBtn.js";

export const modalComp = (titleText = "Default title", bodyText = "default body", className = "") => {
    const divElement = document.createElement("div");
    divElement.setAttribute("tabindex", "-1");
    divElement.classList.add("overlay-modal", "d-none"); 
		
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header", className);

    const modalTitle = document.createElement("h2");
    modalTitle.innerText = titleText;

    const closeButton = button("X", () => divElement.classList.add("d-none"), "btn");

    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
    modalBody.innerText = bodyText;

    const modalFooter = document.createElement("footer");
    modalFooter.classList.add("modal-footer", className);
    const footerButton = button("Close", () => divElement.classList.add("d-none"), "btn");
    modalFooter.appendChild(footerButton);

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    divElement.appendChild(modalContent);

    return divElement;
};
