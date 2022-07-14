// Mobile Nav
const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('#nav-items');
const mobileItem = document.querySelectorAll('.nav-item');
const h1 = document.querySelector('.glitch');

let showingMenu = false;
let profession = [ 'Andrew', 'a Developer', 'a Wizard' ];
let professionPos = 0;

// NAV HAMBURGER
hamburger.addEventListener('click', () => {
    if (!showingMenu) {
        hamburger.style.transform = 'rotate(720deg)';
        mobileMenu.style.transform = 'translateY(0%)';
        hamburgerIcon.classList.add('open');
    } else {
        hamburger.style.transform = 'rotate(-720deg)';
        mobileMenu.style.transform = 'translateY(-100%)';
        hamburgerIcon.classList.remove('open');
    }
    showingMenu = !showingMenu;
})

// GLITCH ANIMATION
function glitch(element) {
    setInterval(() => {
        
      const skew = Math.random() * 20 - 10;
      // element::before
      const before1 = Math.random() * 100;
      const after1 = Math.random() * 100;
      // element::after
      const before2 = Math.random() * 100;
      const after2 = Math.random() * 100;
  
      element.style.setProperty('--skew', `${skew}deg`);
      property(element, skew, before1, after1, before2, after2);
      
    }, 200);
    setInterval(() => {
        property(element, 0, 0, 0, 0);
      }, 400)
    setInterval(function () {
        document.querySelector('.glitch').classList.add('scew');
    }, 3000)
    setInterval(function () {
        document.querySelector('.glitch').classList.remove('scew');
    }, 3500)
};

function property(element, item1, item2, item3, item4){
    element.style.setProperty('--a1', `${item1}%`);
    element.style.setProperty('--b1', `${item2}%`);
    element.style.setProperty('--a2', `${item3}%`);
    element.style.setProperty('--b2', `${item4}%`);
}

// CHANGING MAIN TITLE
function changeProfession(element) {
professionPos > 2 ? professionPos = 0: professionPos = professionPos;
h1.innerHTML = profession[professionPos];
h1.setAttribute('data-text', profession[professionPos]);
professionPos++;
setTimeout(()=>{changeProfession(h1)}, 3000);
};

// CALLING FUNCTIONS
glitch(h1);
changeProfession(h1);