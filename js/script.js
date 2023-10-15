
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
    rootMargin: "-120px",
  }
);
obs.observe(sectionHeroEl);



// add to cart live toast bootstarp

  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  
  if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }


  // login button click 

  let loginBtn=document.getElementById("loginBtn")
  let showMsg=document.getElementById("showMsg")
  loginBtn.addEventListener("click",function(){
    showMsg.innerHTML="Login features are coming soon. Sorry for the inconvenience..."
  })


  function validatePhoneNumber(input) {
    // only added numaric non numeric removed characters from the input
    const numericInput = input.value.replace(/[^0-9]/g, '');

    // Limit the input to a maximum of 10 digits
    const maxLength = 10;
    if (numericInput.length > maxLength) {
        input.value = numericInput.slice(0, maxLength);
    } else {
        input.value = numericInput;
    }
}

let browseProd=document.getElementById("browseProd")
browseProd.onclick = function () {
  location.href = "https://getbootstrap.com/docs/5.3/components/buttons/#base-class";
};

