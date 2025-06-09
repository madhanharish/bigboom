document.addEventListener("DOMContentLoaded", function () {
  const cartItems = document.querySelectorAll(".cartitem");
  const totalQuantityElement = document.getElementById("totals");
  const totalAmountElement = document.getElementById("amounts");

  function updateCart() {
    let totalQuantity = 0;
    let totalAmount = 0;

    cartItems.forEach((item) => {
      const quantityElem = item.querySelector("#quantity");
      const quantity = parseInt(quantityElem.innerText);
      const price = parseFloat(item.querySelector("#rupees").innerText);
      totalQuantity += quantity;
      totalAmount += price * quantity;
    });

    totalQuantityElement.innerText = totalQuantity;
    totalAmountElement.innerText = totalAmount.toFixed(2);
  }

  cartItems.forEach((item) => {
    const minusBtn = item.querySelector("#minus");
    const plusBtn = item.querySelector("#plus");
    const quantityElem = item.querySelector("#quantity");
    const removeBtn = item.querySelector("#remove");

    plusBtn.addEventListener("click", () => {
      let quantity = parseInt(quantityElem.innerText);
      quantity++;
      quantityElem.innerText = quantity;
      updateCart();
    });

    minusBtn.addEventListener("click", () => {
      let quantity = parseInt(quantityElem.innerText);
      if (quantity > 1) {
        quantity--;
        quantityElem.innerText = quantity;
        updateCart();
      }
    });

    removeBtn.addEventListener("click", () => {
      item.remove();
      updateCart();
    });
  });

  updateCart(); // initial total update
});
