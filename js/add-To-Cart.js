if (!localStorage.getItem("customerid")) {
  window.location.href = "not-found.html";
}
var menuItems = [];
var cartItems = [];

if (localStorage.getItem("cart") === null) {
  cartItems = [];
} else {
  var cart = JSON.parse(localStorage.getItem("cart"));
  function cartAdding(item, index) {
    cartItems.push(item);
  }

  cart.forEach(cartAdding);
}

var menuvar = JSON.parse(localStorage.getItem("menu"));
function menuAdding(item, index) {
  menuItems.push(item);
}
menuvar.forEach(menuAdding);

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const index = urlParams.get("index");

var menuItem = menuItems[index];

var cartItem = {
  name: menuItem["name"],
  freeDelivery: menuItem["freeDelivery"],
  price: menuItem["price"]
};
cartItems.push(cartItem);
localStorage.setItem("cart", JSON.stringify(cartItems));
window.location.href =
  "menu-item-list-customer.html?msg=Added To Cart Successfully";
