adminData = {
  id: "vishal",
  password: "1234"
};
cusData = {
  id: "vishal",
  password: "1234"
};
function adminLogin() {
  var adminid = document.getElementById("adminId").value;
  var adminpass = document.getElementById("adminPass").value;
  if (adminid === adminData.id && adminpass === adminData.password) {
    localStorage.setItem("adminid", true);
    window.location.href = "menu-item-list-admin.html";
  } else {
    document.getElementById("result").innerHTML = "Inccorect Credentials";
  }
}
function customerLogin() {
  var cusid = document.getElementById("customerId").value;
  var cuspass = document.getElementById("customerPass").value;
  if (cusid === cusData.id && cuspass === cusData.password) {
    localStorage.setItem("customerid", true);
    window.location.href = "menu-item-list-customer.html";
  } else {
    document.getElementById("result").innerHTML = "Incorrect Credentials";
  }
}
