function selectSize(btn) {
  let sizes = document.querySelectorAll(".size-btn");
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].classList.remove("selected");
  }
  btn.classList.add("selected");
}

function selectChip(chip) {
  let chips = document.querySelectorAll(".chip");
  for (let i = 0; i < chips.length; i++) {
    chips[i].classList.remove("selected");
  }
  chip.classList.add("selected");
}

function changeQty(id, change) {
  let qty = document.getElementById(id);
  let num = parseInt(qty.innerText) + change;
  if (num < 1) {
    num = 1;
  }
  qty.innerText = num;
  updateTotal();
}

function updateTotal() {
  let tee = parseInt(document.getElementById("qty1").innerText);
  let jeans = parseInt(document.getElementById("qty2").innerText);

  let subtotal = tee * 399 + jeans * 1299;
  let total = subtotal + 29;

  document.getElementById("subtotal").innerText = "₹" + subtotal.toLocaleString("en-IN");
  document.getElementById("total").innerText = "₹" + total.toLocaleString("en-IN");
}
