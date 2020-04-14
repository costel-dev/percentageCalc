let billAmount = document.getElementById("bill-amount");
let percentage = document.getElementById("percentage");

function calculate() {
  let tipAmount = parseFloat(billAmount.value * (percentage.value / 100));
  // console.log(tipAmount);
  let total = parseFloat(billAmount.value) + tipAmount;
  // console.log(total);
  document.getElementById("tip-amount").value = "€ " + tipAmount;
  document.getElementById("total").value = "€ " + total;
}
