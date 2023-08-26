document.addEventListener("DOMContentLoaded", function() {
  var popupContainer = document.querySelector(".popup-container");

  // Add 'active' class to the popup container to show the popup
  function showPopup() {
    popupContainer.classList.add("active");
  }

  // Remove 'active' class to hide the popup
  function hidePopup() {
    popupContainer.classList.remove("active");
  }

  // Show the popup when the page loads
  showPopup();

  // Close the popup when clicking outside the image
  popupContainer.addEventListener("click", hidePopup);
  // Prevent the click event on the image from closing the popup
  popupContainer.querySelector("img").addEventListener("click", function(event) {
    event.stopPropagation();
  });
});


const btnNavE1=document.querySelector(".btn-mobile-view")
const headerE1=document.querySelector(".header")
btnNavE1.addEventListener("click",function(){
  headerE1.classList.toggle("nav-open")
})