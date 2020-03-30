//hamburger menu
const hamburger = document.querySelector('#hamburger');
const overlay = document.querySelector('#overlay');
const overlayLinks = document.querySelectorAll('.overlay__link');

 hamburger.addEventListener('click', () => {
   overlay.classList.toggle('open');
   hamburger.classList.toggle('open');

 })

 //onClick hamburger menu close:
overlayLinks.forEach( link =>
   link.addEventListener('click', () => { 
    if(overlay.classList.contains('open')) {
       //remove the class
       overlay.classList.remove('open');
       hamburger.classList.remove('open');
    }else {
      return;
    } 
  }
  ));

  //INTERSECTION OBSERVER FOR ANIMATION
  const aboutSection = document.querySelector('#about');
  const contact = document.querySelector('#contact');
  const projectSection = document.querySelector('#projects');

  const options = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
  };

  const observer = new IntersectionObserver( ( entries, observer ) => {
    entries.forEach( entry => {
      if(!entry.isIntersecting) {
        return;
      }else {
        aboutSection.classList += " animation";
        observer.unobserve(entry.target);
      }
    } )
  }, options );

 observer.observe(aboutSection);

 //contact observer
 const contactObserver = new IntersectionObserver( ( entries, contactObserver ) => {
  entries.forEach( entry => {
    if(!entry.isIntersecting) {
      return;
    }else {
      contact.classList += " animation";
      contactObserver.unobserve(entry.target);
    }
  } )
}, options );

contactObserver.observe(contact);

//project observer
const projectObserver = new IntersectionObserver( ( entries, projectObserver ) => {
  entries.forEach( entry => {
    if(!entry.isIntersecting) {
      return;
    }else {
      projectSection.classList += " animation";
      projectObserver.unobserve(entry.target);
    }
  } )
}, options );

projectObserver.observe(projectSection);

//individual project
const project = document.querySelectorAll('.projects__project');

const proOptions = {
  threshold: .25,
  rootMargin: "0px 0px -100px 0px "
};

const proObserver = new IntersectionObserver( ( entries, proObserver ) => {
  entries.forEach( entry => {
    if(!entry.isIntersecting){
      return;
    }else {
      entry.target.classList += " animation";
      proObserver.unobserve(entry.target);
    }
  } )
}, proOptions );

project.forEach( pro => proObserver.observe(pro) );

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.nav').style.top = "0";
    document.querySelector('#hamburger').style.top = "1%";
  } else {
    document.querySelector('.nav').style.top = "-100px";
    if(hamburger.classList.contains('open')) {
      document.querySelector('#hamburger').style.top = "1%";
    }else {
      document.querySelector('#hamburger').style.top = "-100px";
    }

  }
  prevScrollpos = currentScrollPos;
}

  