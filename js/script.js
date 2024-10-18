
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});




// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);



// CTA FORM PHONE NUMBER validatePhoneNumber
function validatePhoneNumber(input) {
  const numericInput = input.value.replace(/[^0-9]/g, '');
  const maxLength = 10;
  if (numericInput.length > maxLength) {
    input.value = numericInput.slice(0, maxLength);
  } else {
    input.value = numericInput;

  }
}


//store closed function hour is between 9 PM and 8:59 AM.
let day = new Date()
let hour = day.getHours();
let mainContnet = document.getElementById("main-content")
let closeMsg = document.getElementById("closeMsg")
if (hour >= 20 || hour < 9) {
  mainContnet.style.filter = 'grayscale(100%)';
  mainContnet.style.pointerEvents = 'none'
  closeMsg.style.display = 'block'
}


