
let nav;
let navContent;
window.onload = () => {
   nav = document.querySelectorAll('.nav');
   navContent = document.querySelectorAll('.nav-content');
   hiddenNavContent();
};

const hiddenNavContent = () => {
   for (let i = 0; i < navContent.length; i++){
      navContent[i].classList.remove('showe');
      navContent[i].classList.add('hide');
      nav[i].classList.remove('active');
   }
}

let NavLink = document.querySelector('.nav-link');
NavLink.addEventListener('click', (e) => {
   let target = e.target;
   for (let i = 0; i < nav.length; i++){
      if (nav[i] == target) {
         hiddenNavContent();
         navContent[i].classList.remove('hide');
         nav[i].classList.add('active');
         navContent[i].classList.add('showe');

         
      }
   }
   
});
