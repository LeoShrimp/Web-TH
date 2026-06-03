const searchMenu = document.getElementById("searchMenu");

searchMenu.addEventListener("keyup", function () {
  let currentValue = this.value.toLowerCase();

  let products = document.querySelectorAll(".product-card");

  products.forEach((products) => {
    const titleElemenet = products.querySelector("h4");
    if(!titleElemenet) return;

    if (products.textContent.toLowerCase().includes(currentValue)) {
      products.parentElement.style.display = "block";
    } else {
      products.parentElement.style.display = "none";
    }
  });
});
