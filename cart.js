var cost1 = parseInt(document.getElementById("rupees1").textContent);
var cost2 = parseInt(document.getElementById("rupees2").textContent);
var cost3 = parseInt(document.getElementById("rupees3").textContent);
var cost4 = parseInt(document.getElementById("rupees4").textContent);
var quantityy1 = 0;
var quantityy2 = 0; 
var quantityy3 = 0;
var quantityy4 = 0;
var q1 = document.getElementById("quantity1");
var q2 = document.getElementById("quantity2");
var q3 = document.getElementById("quantity3");
var q4 = document.getElementById("quantity4");
const reduce1 = document.getElementById("minus1");
const reduce2 = document.getElementById("minus2");
const reduce3 = document.getElementById("minus3");
const reduce4 = document.getElementById("minus4");
const addd1 = document.getElementById("add1");
const addd2 = document.getElementById("add2");
const addd3 = document.getElementById("add3");
const addd4 = document.getElementById("add4");
const totalQuantityDisplay = document.getElementById("totals");
const totalAmountDisplay = document.getElementById("amounts");
reduce1.addEventListener("click", function () {
  if (quantityy1 > 0) quantityy1--;
  q1.textContent = quantityy1;
});
reduce2.addEventListener("click", function () {
  if (quantityy2 > 0) quantityy2--;
  q2.textContent = quantityy2;
});
reduce3.addEventListener("click", function () {
  if (quantityy3 > 0) quantityy3--;
  q3.textContent = quantityy3;
});
reduce4.addEventListener("click", function () {
  if (quantityy4 > 0) quantityy4--;
  q4.textContent = quantityy4;
});

addd1.addEventListener("click", function () {
  quantityy1++;
  q1.textContent = quantityy1;
});
addd2.addEventListener("click", function () {
  quantityy2++;
  q2.textContent = quantityy2;
});
addd3.addEventListener("click", function () {
  quantityy3++;
  q3.textContent = quantityy3;
});
addd4.addEventListener("click", function () {
  quantityy4++;
  q4.textContent = quantityy4;
});

function addToCart() {
  var totalQuantity = quantityy1 + quantityy2 + quantityy3 + quantityy4;
  var totalAmount =
    (quantityy1 * cost1)+(quantityy2 * cost2)+(quantityy3 * cost3)+(quantityy4 * cost4);

  totalQuantityDisplay.textContent = totalQuantity;
  totalAmountDisplay.textContent = totalAmount;
}
