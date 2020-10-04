if (!localStorage.getItem("adminid")) {
  window.location.href = "not-found.html";
}

let menuItems = [];

window.onload = function () {
  let menu = JSON.parse(localStorage.getItem("menu"));
  menu.forEach(function (item, index) {
    menuItems.push(item);
  });
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const index = urlParams.get("index");
  let menuItem = menuItems[index];

  document.getElementById("iname").value = menuItem.name;
  document.getElementById("iprice").value = menuItem.price;
  let activeRadio = document.getElementsByName("iactive");
  if (menuItem.active === "Yes") {
    activeRadio[0].checked = true;
  } else {
    activeRadio[1].checked = true;
  }
  document.getElementById("idate").value = menuItem.dateOfLaunch;
  let selectedList = document.getElementById("fcategory");
  let catindex = selectedList.indexOf(menuItem.category);
  document.getElementById("fcategory").selectIndex = catindex;
  let freecheck = document.getElementById("fDiv");
  if (menuItem["freeDelivery"] === "Yes") {
    freecheck.checked = true;
  }
};

function itemEdit() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const index = urlParams.get("index");
  let menuItem = menuItems[index];
  var name = document.getElementById("iname").value;
  var price = document.getElementById("iprice").value;
  var active = document.getElementsByName("iactive")[0].value;
  var dol = document.getElementById("idate").value;
  var categoryList = document.getElementById("fcategory");
  var category = categoryList.options[categoryList.selectedIndex].value;

  menuItem["name"] = name;
  menuItem["price"] = price;
  menuItem["active"] = active;
  menuItem["dateOfLaunch"] = dol;
  menuItem["category"] = category;

  menuItems[index] = menuItem;
  localStorage.setItem("menu", JSON.stringify(menuItems));

  document.getElementById("result").innerHTML =
    "<h3>Changes successfully saved</h3>";
}
