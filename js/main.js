
function wait() {
   alert('waiting for future')
}

// header scrolled
const header = document.querySelector('header');
window.addEventListener('scroll', function () {
   header.classList.toggle('sticky', this.window.scrollY > 0);
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