if (!localStorage.getItem("customerid")) {
  window.location.href = "not-found.html";
}
var cartItems = [];
var pricetotal = 0;
var cart = JSON.parse(localStorage.getItem("cart"));
cart.forEach((element, index) => {
  pricetotal = parseInt(pricetotal) + parseInt(element["price"]);
  cartItems.push(element);
});

if (cartItems.length === 0) {
  document.getElementById("result-data").innerHTML =
    "<h2> Cart Is Empty Please Select a Item From Menu List</h2>";
  cartItems = [];
} else {
  var table = document.createElement("table");

  table.classList.add("cartTable");

  var thead = table.createTHead();
  var tbody = table.createTBody();

  var theadRow = thead.insertRow(0);

  var nameCell = theadRow.insertCell();
  var deliveryCell = theadRow.insertCell();
  var priceCell = theadRow.insertCell();
  var blankCell = theadRow.insertCell();

  nameCell.innerText = "Name";
  deliveryCell.innerText = "Delivery";
  priceCell.innerText = "Price";
  blankCell.innerText = "Action";

  cartItems.forEach(function (item, index) {
    let tbodyRow = tbody.insertRow();

    let name = tbodyRow.insertCell();
    let delivery = tbodyRow.insertCell();
    let price = tbodyRow.insertCell();
    let del = tbodyRow.insertCell();

    name.innerText = item.name;
    delivery.innerText = item.freeDelivery;
    price.innerText = item.price;

    let deleteBut = document.createElement("button");
    deleteBut.innerText = "Delete";
    deleteBut.setAttribute("item-index", index);
    deleteBut.onclick = deleteFun;

    del.appendChild(deleteBut);
  });
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  let message = urlParams.get("message");
  document.getElementById("result").innerHTML = "<h3>" + message + "</h3>";
  document.getElementById("totalPrice").innerHTML =
    "<h4>Total Price : " + pricetotal + "</h4>";
  document.getElementById("result-data").appendChild(table);
}

function deleteFun() {
  localStorage.setItem("del", this.getAttribute("item-index"));
  window.location.href = "delete-item.html";
}
