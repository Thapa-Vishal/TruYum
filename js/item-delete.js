if (!localStorage.getItem("customerid")) {
  window.location.href = "not-found.html";
}
var cartItems = [];
if (localStorage.getItem("cart") === null) {
  cartItems = [];
} else {
  var cart = JSON.parse(localStorage.getItem("cart"));

  cart.forEach(function cartDatas(item, index) {
    cartItems.push(item);
  });
}

let index = localStorage.getItem("del");

cartItems.splice(index, 1);

localStorage.removeItem("del");

localStorage.setItem("cart", JSON.stringify(cartItems));

window.location.href = "cart.html?message=Deleted From Cart Successfully";
