// Get the order data from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const orderDataParam = urlParams.get('data');
const orderData = JSON.parse(decodeURIComponent(orderDataParam));




// Function to create list item and Display cart page
function createCartItem(productName, offer, price) {
  return `
      <li class="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 class="my-0">${productName}</h6>
          <small class="text-body-secondary">${offer}<span class="text-success">% Saved</span></small>
        </div>
        <span class="text-body-secondary">${price}</span>
      </li>
    `;
}




// Function to provide container  data in the provided container
function renderCart() {
  const cartContainer = document.querySelector('.row.g-5 .col-md-5');
  var cartList = document.createElement('ul');
  cartList.classList.add('list-group', 'mb-3');


  orderData.cart.forEach(item => {
    const listItem = createCartItem(item.title, item.offer, item.price);
    cartList.innerHTML += listItem;
  });


  //PROMOCODE//
  const promoCodeForm = document.querySelector('.card');
  const promoCodeInput = promoCodeForm.querySelector('input');
  promoCodeForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const enteredPromoCode = promoCodeInput.value.trim().toUpperCase();
    if(enteredPromoCode==""){
    }
    else if (enteredPromoCode == "FIRSTORDER2024") {
      orderData.promoCode = enteredPromoCode; //dynamically orderdata object add
      orderData.discount = 20; //dynamically orderdata object add
      const promoCodeItem = `
      <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
        <div class="text-success">
          <h6 class="my-0">Promo code 20%</h6>
          <small>${orderData.promoCode}</small>
        </div>
        <span class="text-success">−${orderData.discount}</span>
      </li>
      
    `;


      cartList.innerHTML += promoCodeItem;
      const newTotalAmount = (orderData.total - orderData.discount).toFixed(2);
      updateTotalAmount(newTotalAmount);

    }
    
    else {
      errorMsg("Invalid promo code. Please try again.")
    }
  })



  //TOTAL AMOUNT AFTER REDEEM AMOUNT TO DISPLAY
  function updateTotalAmount(newTotalAmount) {
    const totalItem = `
    <li class="list-group-item d-flex justify-content-between">
      <span>Total After Discount(INR)</span>
      <strong>${newTotalAmount}</strong>
    </li>
  `;
    cartList.innerHTML += totalItem;
    document.getElementById('totalAmount').innerText = newTotalAmount;
  }


  //TOTAL ITEM PRICE WILL BE DISPLAY
  const totalItem = `
      <li class="list-group-item d-flex justify-content-between">
        <span>Total (INR)</span>
        <strong>${orderData.total}</strong>
      </li>
    `;
  cartList.innerHTML += totalItem;
  cartContainer.appendChild(cartList);
}

function updateCartBadge() {
  const badgeElement = document.getElementById('badge');
  badgeElement.textContent = orderData.cart.length;
}

renderCart();
updateCartBadge()




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



//Address Form Validation 
let formData = {}; // Declare formData at a higher scope
let displayAddress = document.getElementById("displayAddress")

let billingForm = document.getElementById("billingForm");

billingForm.addEventListener("submit", (e) => {
  e.preventDefault()
  saveFormData()
})

function saveFormData() {
  formData = {
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    mobileNo: document.getElementById("mbbileNo").value,
    address: document.getElementById("address").value,
    landmark: document.getElementById("landmark").value,
    zip: document.getElementById("zip").value,
    sameAddress: document.getElementById('same-address').checked,
    saveInfo: document.getElementById('save-info').checked,
  }
  let formDataJSON = JSON.stringify(formData)
  localStorage.setItem("formData", formDataJSON)
  successMsg('Form data saved successfully!');
  billingForm.reset()
  addressCard(formData); // Call addressCard function here to display the card after saving the form data

}


function addressCard(formData) {
  let cardHTML = `<div class="card w-100">
      <div class="card-body">
        <h5 class="card-title text-center">Shipping address</h5>
        <p class="card-text">Receiver's Full Name -${formData.fullName}</p>
        <p class="card-text">Email (We will email after delivery)-${formData.email}</p>
        <p class="card-text">Mobile (We will call during delivery)-${formData.mobileNo}</p>
        <p class="card-text">Shipping Delivery address -${formData.address}</p>
        <p class="card-text">Shipping Zip Code -${formData.zip}</p>
      </div>
           <button class="w-100 btn btn-warning" type="submit"
              onclick="errorMsg('We apologize for the inconvenience...')">PROCCED TO BUY</button>
    </div>`;

  displayAddress.innerHTML += cardHTML;
}


function loadFormData() {
  let formDataJSON = localStorage.getItem("formData");
  if (formDataJSON) {
    formData = JSON.parse(formDataJSON);
    addressCard(formData);
  }
}

loadFormData()