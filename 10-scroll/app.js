// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
let date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linkContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function() {
    // linkContainer.classList.toggle('show-links');
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    
    if (containerHeight === 0) {
        linkContainer.style.height = `${linksHeight}px`;
    }
    else {
        linkContainer.style.height = 0;
    }
});

const navbar = document.getElementById('nav');
const topLink = document.querySelector(".top-link")
// ********** fixed navbar ************
window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    }
    else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    }
    else {
        topLink.classList.remove('show-link')
    }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link){
    link.addEventlistener("click", function(e) {
       // prevent default scroll smooth behaviour
        e.preventDefault();
        // id stores the href of the clicked link
        const id = e.currentTarget.getAttribute("href").slice(1); // slice removes the # from the links
        const element = document.getElementById(id);
        let position = element.offsetTop;
        window.scrollTo({
            left:0, 
            top: position,
        });
        linkContainer.style.height = 0;    
    });
});