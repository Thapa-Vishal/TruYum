var menuItems = [];
if (localStorage.getItem("menu") === null) {
  menuItems = [
    {
      id: 1,
      name: "Sandwich",
      price: 99,
      active: "Yes",
      dateOfLaunch: "15/03/2017",
      category: "Main Course",
      freeDelivery: "Yes"
    },
    {
      id: 2,
      name: "Burger",
      price: 129,
      active: "Yes",
      dateOfLaunch: "23/12/2017",
      category: "Main Course",
      freeDelivery: "No"
    },
    {
      id: 3,
      name: "Pizza",
      price: 149,
      active: "Yes",
      dateOfLaunch: "21/08/2017",
      category: "Main Course",
      freeDelivery: "No"
    },
    {
      id: 4,
      name: "French Fries",
      price: 57,
      active: "No",
      dateOfLaunch: "02/07/2017",
      category: "Starter",
      freeDelivery: "Yes"
    },
    {
      id: 5,
      name: "Chocolate Brownies",
      price: 32,
      active: "Yes",
      dateOfLaunch: "02/11/2022",
      category: "Dessert",
      freeDelivery: "Yes"
    }
  ];
  localStorage.setItem("menu", JSON.stringify(menuItems));
} else {
  var menuvar = JSON.parse(localStorage.getItem("menu"));
  function menuFill(item, index) {
    menuItems.push(item);
  }
  menuvar.forEach(menuFill);
}
if (document.title === "Admin Menu List" && localStorage.getItem("adminid")) {
  var table = document.getElementById("item-table");
  var tableContent = "";
  function tableCreate(item, index) {
    tableContent =
      tableContent +
      "<tr id = '" +
      item["id"] +
      "'>" +
      "<td>" +
      item["name"] +
      "</td>" +
      "<td>" +
      item["price"] +
      "</td>" +
      "<td>" +
      item["active"] +
      "</td>" +
      "<td>" +
      item["dateOfLaunch"] +
      "</td>" +
      "<td>" +
      item["category"] +
      "</td>" +
      "<td>" +
      item["freeDelivery"] +
      "</td>" +
      "<td>" +
      "<button><a href = 'edit-menu-item.html?index=" +
      index +
      "'>Edit</a></button></td>" +
      "</tr>";
  }

  menuItems.forEach(tableCreate);
  table.innerHTML =
    "<tr><th>Name</th><th>Price</th> <th>Active</th><th>Date Of Launch</th><th>Category</th><th>Free Delivery</th><th>Action</th></tr>" +
    tableContent;
} else if (
  document.title === "Customer Menu List" &&
  localStorage.getItem("customerid")
) {
  var custable = document.getElementById("item-table");

  tableContent = "";
  function createCusTable(item, index) {
    tableContent =
      tableContent +
      "<tr id = '" +
      item["id"] +
      "'>" +
      "<td>" +
      item["name"] +
      "</td>" +
      "<td>" +
      item["price"] +
      "</td>" +
      "</td>" +
      "<td>" +
      item["category"] +
      "</td>" +
      "<td>" +
      item["freeDelivery"] +
      "</td>" +
      "<td>" +
      "<button><a href = 'add-To-Cart.html?index=" +
      index +
      "'>Add to Cart</a></button></td>" +
      "</tr>";
  }

  menuItems.forEach(createCusTable);
  custable.innerHTML =
    "<tr><th>Name</th><th>Price</th><th>Category</th><th>Free Delivery</th><th>Action</th></tr>" +
    tableContent;

  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  const message = urlParams.get("msg");
  if (message != null) {
    document.getElementById("result").innerHTML = "<h3>" + message + "</h3>";
  }
} else {
  window.location.href = "not-found.html";
}
