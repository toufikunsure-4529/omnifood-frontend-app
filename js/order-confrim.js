function getUrlParameter(name) {
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

const orderDataParam = getUrlParameter('data');
const orderData = JSON.parse(decodeURIComponent(orderDataParam));

// Populate the order confirmation page with order data
document.getElementById('orderNumber').textContent = orderData.orderNumber;
document.getElementById('orderDate').textContent = orderData.orderDate;
document.getElementById('customerName').textContent = `Name: ${orderData.customerName}`;
document.getElementById('customerEmail').textContent = `Email: ${orderData.customerEmail}`;
document.getElementById('shippingStreet').textContent = orderData.shippingAddress.street;
document.getElementById('shippingCity').textContent = `City: ${orderData.shippingAddress.city}`;
document.getElementById('shippingCountry').textContent = `Country: ${orderData.shippingAddress.country}`;

const orderItems = document.getElementById('orderItems');
orderData.cart.forEach(item => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${item.title}</td><td>${item.price}</td>`;
  orderItems.appendChild(row);
});

document.getElementById('orderTotal').textContent = `Total: ₹${orderData.total}`;



let checkStatusBtn = document.getElementById("checkStatusBtn")
checkStatusBtn.addEventListener("click", function () {
  let orderStatus = document.getElementById("order-status")
  orderStatus.style.display = "block"
})





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
