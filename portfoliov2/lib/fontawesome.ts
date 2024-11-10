// lib/fontawesome.ts
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faEnvelope, faLocationArrow, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'; // Add more icons as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add icons to the library
library.add(faEnvelope, faPhone, faLocationArrow);
