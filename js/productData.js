var productData = [
  {
      offer:15,
      imageSrc: "/img/resturent-meal/meal1.png",
      title: "Meal 1",
      description: "Description for Meal 1",
      price: "₹95",
      time:30,
      rating:4.2,
      peopleBuy:500
  },
  {
      offer:15,
      imageSrc: "/img/resturent-meal/meal-2.png",
      title: "Meal 2",
      description: "Description for Meal 2",
      price: "₹85",
      time:30,
      rating:4.2,
      peopleBuy:500
  },
  {
      offer:15,
      imageSrc: "/img/resturent-meal/meal1.png",
      title: "Meal 3",
      description: "Description for Meal 3",
      price: "₹75",
      time:30,
      rating:4.2,
      peopleBuy:500
  },
  {
    offer:15,
    imageSrc: "/img/resturent-meal/meal-5.png",
    title: "Meal 4",
    description: "Description for Meal 4",
    price: "₹75",
    time:30,
    rating:4.2,
    peopleBuy:500
},
{
  offer:15,
  imageSrc: "/img/resturent-meal/meal-6.png",
  title: "Meal 4",
  description: "Description for Meal 4",
  price: "₹75",
  time:30,
  rating:4.2,
  peopleBuy:500
},
{
  offer:15,
  imageSrc: "/img/resturent-meal/meal-6.png",
  title: "Meal 4",
  description: "Description for Meal 4",
  price: "₹75",
  time:30,
  rating:4.2,
  peopleBuy:500
},
{
  offer:15,
  imageSrc: "/img/resturent-meal/meal-2.png",
  title: "Meal 4",
  description: "Description for Meal 4",
  price: "₹75",
  time:30,
  rating:4.2,
  peopleBuy:500
},
{
  offer:15,
  imageSrc: "/img/resturent-meal/meal-2.png",
  title: "Meal 4",
  description: "Description for Meal 4",
  price: "₹75",
  time:30,
  rating:4.2,
  peopleBuy:500
},
{
  offer:15,
  imageSrc: "/img/resturent-meal/meal-2.png",
  title: "Meal 4",
  description: "Description for Meal 4",
  price: "₹75",
  time:30,
  rating:4.2,
  peopleBuy:500
},
];


let container = document.querySelector(".product-container"); //product card display container 
const cartItemsContainer = document.getElementById("cartItems"); //cart item display conatiner
const totalAmountDisplay = document.getElementById("totalAmount"); //cart item price dispaly container
const cart = [];



// ADD TO CART ON CLICK Function
function addCart(productTitle,productPrice) {
  // Your code to handle adding the item to the cart goes here
  alert(productTitle + " added to cart");
  cart.push({ title: productTitle, price: productPrice });
  displayCart();
}


// ADD TO CART CLICK TO DISPLAY CART PAGE FUNCTION
function displayCart(){
  let total = 0;
  cartItemsContainer.innerHTML = "";
  cart.forEach((product,index)=>{
    const cartItem = document.createElement("p");
    cartItem.textContent = `Item ${index + 1}: ${product.title} - ${product.price}`;
    cartItemsContainer.appendChild(cartItem)
    total += parseFloat(product.price.replace("₹", ""));

  })
  totalAmountDisplay.textContent = `Total: ₹${total.toFixed(2)}`;
  cartItemsBtn.hidden=false;
}



// ADDED ITEM AFTER CART PAGE PROCEED TO BUY PRODUCT FUNCTION
function proceedBuy() {
  let confirmOrder = confirm(`Are you sure you want to buy?`);
  if (confirmOrder) {
    alert("Thank you for your purchase! We are experiencing some issues.");
  } else {
    alert("Please try again later.");
  }
}



// PRODUCT DATA TO DYNAMIC ADDED PRODUCT CART IN HTML 
productData.forEach((product)=>{
  var productCardHTML = `
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
     <button href="0#" class="add-cart  margin-right-sm" onclick="addCart('${product.title}', '${product.price}')" id="addItemButton"><ion-icon class="add-icon" name="add-outline"></ion-icon><span>ADD</span></button>
   </div>
   </div>
 </div>
`;
container.innerHTML += productCardHTML;
})
