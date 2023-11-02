// text animation 
var typed = new Typed('#element', {
  strings: ['Hangry ?','Cooking gone wrong ?', '&amp; Unexpected guests ?','Bolo, KhabarBolo!'],
  typeSpeed: 50,
});



/* cursol animation after page loaded */
document.addEventListener("DOMContentLoaded",function(){
  const loadingAnimation=document.getElementById("loading-animation")
  const contentPlaceholder=document.getElementById("content-placeholder")

  setTimeout(function(){
    loadingAnimation.style.display="none"
    contentPlaceholder.style.display="block"
    function loadContent(){
      const newElement=document.createElement("p")
      contentPlaceholder.appendChild(newElement)
    }
    loadContent();
  },3000)
})


// Get a reference to the network error message div
const networkErrorDiv = document.getElementById("networkError");

// Add an event listener to check for online/offline status
window.addEventListener("offline", () => {
  // Display the network error message when the browser goes offline
  networkErrorDiv.style.display = "block";
});

window.addEventListener("online", () => {
  // Hide the network error message when the browser goes back online
  networkErrorDiv.style.display = "none";
});



