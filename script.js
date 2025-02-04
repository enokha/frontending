import { headerComp } from './components/headerComp.js';
import { button } from './components/compBtn.js';
import { eclipseComp } from './components/eclipseComp.js';
import { modalComp } from './components/modalComp.js';

document.body.appendChild(headerComp());

document.body.appendChild(eclipseComp('primary'));

const showModalButton = button('Open Modal', () => {
    modal.classList.remove('d-none');  
}, 'primary-btn');

document.body.appendChild(showModalButton);

const modal = modalComp('helloooo!', 'this is a dynamic modal created with vanilla JS!', 'primary-btn');
document.body.appendChild(modal);
