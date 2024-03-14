var customerName = "bob";

function returnCustomerName() {
  return customerName;
}

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = "someone";

function changeLeastFavoriteCustomer() {
  throw new Error("Assignment to constant variable.");
}
