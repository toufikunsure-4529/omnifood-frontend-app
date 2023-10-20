
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


