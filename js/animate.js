// text animation 
var typed = new Typed('#element', {
  strings: ['Hangry ?', 'Cooking gone wrong ?', '&amp; Unexpected guests ?', 'Bolo, KhabarKaho!'],
  typeSpeed: 50,
});



/* cursol animation after page loaded */
document.addEventListener("DOMContentLoaded", function () {
  const loadingAnimation = document.getElementById("loading-animation")
  const contentPlaceholder = document.getElementById("content-placeholder")

  setTimeout(function () {
    loadingAnimation.style.display = "none"
    contentPlaceholder.style.display = "block"
    function loadContent() {
      const newElement = document.createElement("p")
      contentPlaceholder.appendChild(newElement)
    }
    loadContent();
  }, 3000)
})





