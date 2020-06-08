/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// Global variable decleared for navigation 
const navigation = document.getElementById('navbar__list');
// Global variable decleared for all sections 
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navigatorBuilder = () => {
    let navigationUI = '';
    // loop to iterate through different sections
    sections.forEach(section => {
        const sectionId = section.id;
        const sectionNavigatorData = section.dataset.nav;

        navigationUI += `<li><a class="menu__link" href="#${sectionId}">${sectionNavigatorData}</a></li>`;
    });
    // Here elements will be appended to the navigation section
    navigation.innerHTML = navigationUI;
};

navigatorBuilder();

// Add class 'active' to section when near top of viewport

const activeSection = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// adding the active class
const addActiveClass = (condition,section) => {
    if(condition) {
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: brown;";
    };
};
// removing the active class
const removeActiveClass =(section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: steelblue;";
};

//actual function is implemeted here
const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = activeSection(section);

        viewPort = () => elementOffset < 180 && elementOffset >= -180;
        removeActiveClass(section);
        addActiveClass(viewPort(),section);
    });
};

window.addEventListener('scroll',sectionActivation);

// Scroll to anchor ID using scrollTO event

const scrolling = () => {
    const linkS = document.querySelectorAll('.navbar_menu a');
    linkS.forEach(link => { 
        link.addEventListener('click', () => {
            for(i =0; i<sections; i++) {
                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });
};

scrolling();
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


