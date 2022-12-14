
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

// Mobile res
const side_menu = document.getElementById('side_menu');
function openSlideMenu() {
   side_menu.style.display = 'block';
}

function closeSide() {
   side_menu.style.display = 'none';
}

// Back to top
(function scrollToTop() {
   let toTop = document.getElementById('toTop');

   function buttonVisibality() {
      if (window.scrollY <= 150) {
         toTop.style.cursor = 'default';
         toTop.fadeOut();
      } else {
         toTop.style.cursor = 'pointer';
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

// portfolio boxes
const por_all_btn = document.getElementById('por_all_btn');
const por_app_btn = document.getElementById('por_app_btn');
const por_card_btn = document.getElementById('por_card_btn');
const por_web_btn = document.getElementById('por_web_btn');

const por_boxes = document.getElementsByClassName('por_box');
// all images
por_all_btn.onclick = function () {
   for (e in por_boxes) {
      por_boxes[e].style.display = 'grid';
   }
}
// app images
por_app_btn.onclick = function () {
   for (e in por_boxes) {
      if (por_boxes[e].className == 'por_box por_app') {
         por_boxes[e].style.display = 'grid';
      } else {
         por_boxes[e].style.display = 'none';
      }
   }
}
// card images
por_card_btn.onclick = function () {
   for (e in por_boxes) {
      if (por_boxes[e].className == 'por_box por_card') {
         por_boxes[e].style.display = 'grid';
      } else {
         por_boxes[e].style.display = 'none';
      }
   }
}
// web images
por_web_btn.onclick = function () {
   for (e in por_boxes) {
      if (por_boxes[e].className == 'por_box por_web') {
         por_boxes[e].style.display = 'grid';
      } else {
         por_boxes[e].style.display = 'none';
      }
   }
}

// portfolio model
let por_model = document.querySelector('.por_model');

let model_img = document.getElementById('img01');

function open_model_fun() {
   por_model.style.display = 'block';
}

let por_img1 = document.getElementById('por_img1');
let por_img2 = document.getElementById('por_img2');
let por_img3 = document.getElementById('por_img3');
let por_img4 = document.getElementById('por_img4');
let por_img5 = document.getElementById('por_img5');
let por_img6 = document.getElementById('por_img6');
let por_img7 = document.getElementById('por_img7');
let por_img8 = document.getElementById('por_img8');
let por_img9 = document.getElementById('por_img9');

let open_model1 = document.getElementById('open_model1')
let open_model2 = document.getElementById('open_model2')
let open_model3 = document.getElementById('open_model3')
let open_model4 = document.getElementById('open_model4')
let open_model5 = document.getElementById('open_model5')
let open_model6 = document.getElementById('open_model6')
let open_model7 = document.getElementById('open_model7')
let open_model8 = document.getElementById('open_model8')
let open_model9 = document.getElementById('open_model9')

open_model1.addEventListener('click', function () {
   model_img.src = por_img1.src;
});

open_model2.addEventListener('click', function () {
   model_img.src = por_img2.src;
});

open_model3.addEventListener('click', function () {
   model_img.src = por_img3.src;
});

open_model4.addEventListener('click', function () {
   model_img.src = por_img4.src;
});

open_model5.addEventListener('click', function () {
   model_img.src = por_img5.src;
});

open_model6.addEventListener('click', function () {
   model_img.src = por_img6.src;
});

open_model7.addEventListener('click', function () {
   model_img.src = por_img7.src;
});

open_model8.addEventListener('click', function () {
   model_img.src = por_img8.src;
});

open_model9.addEventListener('click', function () {
   model_img.src = por_img9.src;
});


// close the image model
const close_por_model = document.getElementById('close_por_model')
close_por_model.addEventListener('click', function () {
   por_model.style.display = 'none';
});