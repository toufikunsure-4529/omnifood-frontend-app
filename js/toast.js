function errorMsg(message) {
  const errorNotification = document.createElement("div");
  errorNotification.className = "notification error";
  errorNotification.innerHTML = `<ion-icon class="error-icon" name="alert-circle-outline"></ion-icon> ${message}`;
  const notificationContainer = document.getElementById("notificationContainer");
  notificationContainer.appendChild(errorNotification);
  setTimeout(() => {
    errorNotification.remove();
  }, 3000);
}



function successMsg(message) {
  const cartNotification = document.createElement("div");
  cartNotification.className = "notification show";
  cartNotification.innerHTML = `<ion-icon class="verified-icon" name="checkmark-circle-outline"></ion-icon> ${message}`;
  const notificationContainer = document.getElementById("notificationContainer");
  notificationContainer.appendChild(cartNotification);
  setTimeout(() => {
    cartNotification.remove();
  }, 3000);
}


// HTML CODE TO APPLY THIS FILE
//   < div id = "notificationContainer" class="notification-container" >

//           </ >