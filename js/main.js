
function wait() {
   alert('waiting for future')
}

// header scrolled
const header = document.querySelector('header');
const drop_down = document.querySelector('.drop_down');
window.addEventListener('scroll', function () {
   header.classList.toggle('sticky', this.window.scrollY > 0);
   drop_down.classList.toggle('drop_down_scroll', this.window.scrollY > 0);
})

// header active link
const link_active = document.querySelectorAll('.link_active');
function activeLink() {
   link_active.forEach(e => {
      e.classList.remove('active');
   });
   this.classList.add('active');
}
link_active.forEach(e => {
   e.addEventListener('click', activeLink);
});

// Back to top
(function scrollToTop() {
   let toTop = document.getElementById('toTop');

   function buttonVisibality() {
      if (window.scrollY <= 150) {
         toTop.fadeOut();
      } else {
         toTop.fadeIn();
      }
   }

   window.addEventListener('scroll', buttonVisibality);
   toTop.addEventListener('click', function () {
      scrollTo(0, 0);
   });
}());

function myFadeIn(e) {
   let eleOpacity = Number(getComputedStyle(e).opacity).toPrecision(2);
   e.style.opacity = eleOpacity;
   if (eleOpacity >= 1) {
      return;
   }

   e.style.opacity = Number(eleOpacity) + 1;
   setTimeout(() => {
      myFadeIn(e);
   }, 20);
}

function myFadeOut(e) {
   let eleOpacity = Number(getComputedStyle(e).opacity).toPrecision(2);
   e.style.opacity = eleOpacity;
   if (eleOpacity <= 0) {
      return;
   }

   e.style.opacity = Number(eleOpacity) - 1;
   setTimeout(() => {
      myFadeOut(e);
   }, 10);
}

Element.prototype.fadeIn = function () {
   myFadeIn(this);
}

Element.prototype.fadeOut = function () {
   myFadeOut(this);
}

// Portfolio
let btn_active = document.querySelectorAll('.btn_active');
function active_buttons() {
   btn_active.forEach(e => {
      e.classList.remove('port_active');
   });
   this.classList.add('port_active');
}
btn_active.forEach(e => {
   e.addEventListener('click', active_buttons);
});