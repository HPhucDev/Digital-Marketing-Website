/*Dark mode */
const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})
/*Slideshow in Banner*/
UIkit.slideshow('.uk-slideshow').startAutoplay();