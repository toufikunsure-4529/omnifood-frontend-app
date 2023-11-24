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
  const cartList = document.createElement('ul');
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
    if (enteredPromoCode == "FIRSTORDER2024") {
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
      const newTotalAmount = orderData.total - orderData.discount;
      updateTotalAmount(newTotalAmount);

    } else {
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



