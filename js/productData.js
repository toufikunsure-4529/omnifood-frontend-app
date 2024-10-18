var productData = [
  {
    offer: 15,
    imageSrc: "/img/resturent-meal/meal1.png",
    title: "Chicken fried rice",
    description: "Description for Meal 1",
    price: "₹198",
    time: 35,
    rating: 4.6,
    peopleBuy: 290
  },
  {
    offer: 15,
    imageSrc: "/img/resturent-meal/meal-2.png",
    title: "Hydrabadi Mutton Meal",
    description: "Description for Meal 2",
    price: "₹159",
    time: 30,
    rating: 4.1,
    peopleBuy: 120
  },
  {
    offer: 15,
    imageSrc: "/img/resturent-meal/meal1.png",
    title: "Hydrabadi Chicken fried rice",
    description: "Description for Meal 3",
    price: "₹75",
    time: 30,
    rating: 4.2,
    peopleBuy: 500
  },
  {
    offer: 15,
    imageSrc: "/img/resturent-meal/meal-5.png",
    title: "Chicken Rol",
    description: "Description for Meal 4",
    price: "₹75",
    time: 30,
    rating: 4.2,
    peopleBuy: 500
  },
  {
    offer: 15,
    imageSrc: "/img/resturent-meal/meal-2.png",
    title: "Mutton Fry",
    description: "Description for Meal 4",
    price: "₹75",
    time: 30,
    rating: 4.2,
    peopleBuy: 500
  },
  {
    offer: 15,
    imageSrc: "/img/resturent-meal/meal-6.png",
    title: "Vegg",
    description: "Description for Meal 4",
    price: "₹75",
    time: 30,
    rating: 4.2,
    peopleBuy: 500
  },
  {
    offer: 15,
    imageSrc: "/img/resturent-meal/meal-3.png",
    title: "Chicken Fry",
    description: "Description for Meal 4",
    price: "₹75",
    time: 30,
    rating: 4.2,
    peopleBuy: 500
  },
  {
    offer: 15,
    imageSrc: "/img/resturent-meal/meal-4.png",
    title: "Egg Roll",
    description: "Description for Meal 4",
    price: "₹75",
    time: 30,
    rating: 4.2,
    peopleBuy: 500
  },
  {
    offer: 15,
    imageSrc: "/img/resturent-meal/meal-2.png",
    title: "Mutton Meal",
    description: "Description for Meal 4",
    price: "₹75",
    time: 30,
    rating: 4.2,
    peopleBuy: 500
  },
];


let container = document.querySelector(".product-container"); //product card display container 
const cartItemsContainer = document.getElementById("cartItems"); //cart item display conatiner
const totalAmountDisplay = document.getElementById("totalAmount"); //cart item price dispaly container
const cart = JSON.parse(localStorage.getItem('cart')) || [];


// added to cart on click button
function addCart(productTitle, productPrice, productOffer) {
  // Check if there are already 7 items with the same name in the cart
  const itemCount = cart.filter(item => item.title === productTitle).length;

  if (itemCount >= 7) {
    // Display an error notification
    errorMsg("You can't add this item more than 7 quantity")
  } else {
    cart.push({ title: productTitle, price: productPrice, offer: productOffer });
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartBadge();
    successMsg(`${productTitle} added to cart`)
  }
}


// ADD TO CART CLICK TO DISPLAY CART PAGE FUNCTION
function displayCart() {
  let total = 0;
  cartItemsContainer.innerHTML = "";
  cart.forEach((product, index) => {
    const cartItem = document.createElement("div");
    cartItem.textContent = `Item ${index + 1}: ${product.title} - ${product.price}`;
    cartItem.classList.add("cartItemP");
    
    const deleteBtn=document.createElement("span")
    deleteBtn.innerHTML =`<ion-icon name="trash-outline"></ion-icon>`
    deleteBtn.classList.add("deleteBtn")
    deleteBtn.addEventListener("click",()=>deleteCartItem(index))
    cartItem.append(deleteBtn)

    cartItemsContainer.appendChild(cartItem)
    total += parseFloat(product.price.replace("₹", ""));

  })
  totalAmountDisplay.textContent = `Total: ₹${total.toFixed(2)}`;
  cartItemsBtn.hidden = false;
}


function deleteCartItem(index){
  cart.splice(index,1)
  displayCart();
  updateCartBadge()
}




// PRODUCT DATA TO DYNAMIC ADDED PRODUCT CART IN HTML 
productData.forEach((product) => {
  let productCardHTML = `
  <div class="meal">
     <div class="meal-tags-img">
     <div class="meal-tags">
     <span class="tag tag--vagitarian">${product.offer}% OFF</span>
     <span class="tag tag--vagitar">Free Delivery</span>
   </div>
     <img src="${product.imageSrc}" class="meal-img" alt="${product.title}">
   </div>
     <div class="meal-content">

     <p class="meal-title">${product.title}</p>
     <ul class="meal-attributes">
       <li class="meal-attribute">
         <span${product.description}</span>
       </li>
       <li class="meal-attribute">
         <ion-icon class="meal-icon" name="star-outline"></ion-icon>
         <span><strong>${product.rating}</strong> rating (${product.peopleBuy})</span></li>
     </ul>
     <div class="meal-buy">
     <p class="meal-price">${product.price}</p>
     <p class="delivery-time">${product.time} MINS</p>
     <button href="0#" class="add-cart  margin-right-sm" onclick="addCart('${product.title}', '${product.price}','${product.offer}')" id="addItemButton"><ion-icon class="add-icon" name="add-outline"></ion-icon><span>ADD</span></button>
   </div>
   </div>
 </div>
`;
  container.innerHTML += productCardHTML;
})




// ADDED ITEM AFTER CART PAGE PROCEED TO BUY PRODUCT FUNCTION
function proceedBuy() {
  const userLoggedIn = isUserLoggedIn();
  if (userLoggedIn) {
    const orderNumber = generateOrderNumber();
    let orderDate = new Date();
    orderDate = orderDate.toLocaleString();
    const orderData = {
      orderNumber,
      orderDate,
      customerName: "John Doe",
      customerEmail: "johndoe@example.com",
      shippingAddress: {
        street: "123 Main Street",
        city: "Anytown",
        country: "United States",
      },
      cart: cart,
      total: calculateTotalPrice()
    };
    const orderJSON = JSON.stringify(orderData)
    // Encode the order data for a URL parameter
    const orderDataParam = encodeURIComponent(orderJSON)
    // window.location.href = `order-confirmation.html?data=${orderDataParam}`
    window.location.href = `checkout.html?data=${orderDataParam}`
    cart.length = 0;
    localStorage.removeItem('cart');
    displayCart();

  } else {
    errorMsg("Please log in to proceed with the order.");
  }
}




function generateOrderNumber() {
  let orderNumber = 'KBO'
  let randomIndex = Math.floor(Math.random() * 1000000)
  orderNumber += randomIndex;
  return orderNumber;
}






function isUserLoggedIn() {
  return true;
}



function calculateTotalPrice() {
  return cart.reduce((total, item) => total + parseFloat(item.price.replace("₹", "")), 0).toFixed(2);
}

function updateCartBadge() {
  const badgeElement = document.getElementById('cart-badge');
  badgeElement.textContent = cart.length;
}

//intially chcek older localstorage cart data and view badge and displaycart
(function () {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.length = 0;
  cart.push(...storedCart);
  if (storedCart.length == 0) {
    cartItemsBtn.hidden = true;
  }
  else {
    displayCart();
  }
  updateCartBadge();
})();

