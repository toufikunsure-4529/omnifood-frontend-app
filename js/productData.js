var productData = [
  {
      offer:15,
      imageSrc: "/img/resturent-meal/meal1.png",
      title: "Chicken fried rice",
      description: "Description for Meal 1",
      price: "₹198",
      time:35,
      rating:4.6,
      peopleBuy:290
  },
  {
      offer:15,
      imageSrc: "/img/resturent-meal/meal-2.png",
      title: "Hydrabadi Mutton Meal",
      description: "Description for Meal 2",
      price: "₹159",
      time:30,
      rating:4.1,
      peopleBuy:120
  },
  {
      offer:15,
      imageSrc: "/img/resturent-meal/meal1.png",
      title: "Hydrabadi Chicken fried rice",
      description: "Description for Meal 3",
      price: "₹75",
      time:30,
      rating:4.2,
      peopleBuy:500
  },
  {
    offer:15,
    imageSrc: "/img/resturent-meal/meal-5.png",
    title: "Chicken Rol",
    description: "Description for Meal 4",
    price: "₹75",
    time:30,
    rating:4.2,
    peopleBuy:500
},
{
  offer:15,
  imageSrc: "/img/resturent-meal/meal-2.png",
  title: "Mutton Fry",
  description: "Description for Meal 4",
  price: "₹75",
  time:30,
  rating:4.2,
  peopleBuy:500
},
{
  offer:15,
  imageSrc: "/img/resturent-meal/meal-6.png",
  title: "Vegg",
  description: "Description for Meal 4",
  price: "₹75",
  time:30,
  rating:4.2,
  peopleBuy:500
},
{
  offer:15,
  imageSrc: "/img/resturent-meal/meal-3.png",
  title: "Chicken Fry",
  description: "Description for Meal 4",
  price: "₹75",
  time:30,
  rating:4.2,
  peopleBuy:500
},
{
  offer:15,
  imageSrc: "/img/resturent-meal/meal-4.png",
  title: "Egg Roll",
  description: "Description for Meal 4",
  price: "₹75",
  time:30,
  rating:4.2,
  peopleBuy:500
},
{
  offer:15,
  imageSrc: "/img/resturent-meal/meal-2.png",
  title: "Mutton Meal",
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


// added to cart on click button

function addCart(productTitle, productPrice) {
  // Check if there are already 7 items with the same name in the cart
  const itemCount = cart.filter(item => item.title === productTitle).length;
  
  if (itemCount >= 7) {
    // Display an error notification
    errorMsg("You can't add this item more than 7 quantity")
  } else {
    cart.push({ title: productTitle, price: productPrice });
    displayCart();
    successMsg(`${productTitle} added to cart`)
  }
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




// ADDED ITEM AFTER CART PAGE PROCEED TO BUY PRODUCT FUNCTION
function proceedBuy() {
  const userLoggedIn = isUserLoggedIn();
if(userLoggedIn){
  const confirmOrder = confirm(`Are you sure you want to proceed with payment?`);
  if (confirmOrder) {
    const orderNumber = generateOrderNumber();
    const orderDate = new Date();
    const orderConfirmationWindow  =window.open('','_blank');
    const orderConfirmationHTML =`
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <style>
        body {
          background-color: #f5f5f5;
      }
      .order-confirmation {
          max-width: 600px;
          margin: 0 auto;
          background-color: #fff;
          padding: 20px;
          margin-top: 30px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="order-confirmation">
          <h2 class="text-center">Order Confirmation</h2>
          <hr>
          <div class="row">
            <div class="col-md-6">
                <h4>Order Number: ${orderNumber}</h4>
            </div>
            <div class="col-md-6 text-right">
                <h4>Date: ${orderDate}</h4>
            </div>
        </div>
         
            <!-- Customer information -->
            <h3>Customer Information</h3>
            <p>Name: John Doe</p>
            <p>Email: johndoe@example.com</p>

            <!-- Shipping address -->
            <h3>Shipping Address</h3>
            <p>123 Main Street</p>
            <p>City: Anytown</p>
            <p>Country: United States</p>

            <h3>Order Summary</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                <tr style="
                display: flex;
                flex-direction: column;
            ">
                ${cart.map(item => `<td>${item.title} - ${item.price}</td>`).join('')}
                  </tr>   
                </tbody>
            </table>
            <p class="text-right"><strong>Total: ₹${calculateTotalPrice()}</strong></p>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
    </html>
    `;
    orderConfirmationWindow.document.write(orderConfirmationHTML);
    cart.length=0;
    displayCart();
    } else {
      errorMsg("Something went wrong")
    }
  } else{
    errorMsg("Please log in to proceed with the order.");
  }
}




function generateOrderNumber(){
  let orderNumber ='KBO'
  let randomIndex = Math.floor(Math.random()*1000000)
  orderNumber+=randomIndex;
  return orderNumber;
}



function errorMsg(message){
  const errorNotification = document.createElement("div");
  errorNotification.className = "notification error";
  errorNotification.innerHTML = `<ion-icon class="error-icon" name="alert-circle-outline"></ion-icon> ${message}`;
  const notificationContainer = document.getElementById("notificationContainer");
  notificationContainer.appendChild(errorNotification);
  setTimeout(() => {
    errorNotification.remove();
  }, 3000);
}



function successMsg(message){
  const cartNotification = document.createElement("div");
    cartNotification.className = "notification show";
    cartNotification.innerHTML = `<ion-icon class="verified-icon" name="checkmark-circle-outline"></ion-icon> ${message}`;
    const notificationContainer = document.getElementById("notificationContainer");
    notificationContainer.appendChild(cartNotification);
    setTimeout(() => {
      cartNotification.remove();
    }, 3000);
}


function isUserLoggedIn(){
  return true;
}



function calculateTotalPrice() {
  return cart.reduce((total, item) => total + parseFloat(item.price.replace("₹", "")), 0).toFixed(2);

}





