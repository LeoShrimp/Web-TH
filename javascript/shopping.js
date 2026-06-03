// THÊM HÀNG VÀO GIỎ HÀNG
const buyButtons = document.querySelectorAll(".add-cart");

buyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const product = {
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: Number(btn.dataset.price),
      image: btn.dataset.image,
      quantity: 1,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    showNotification("Đã thêm vào giỏ hàng");

    location.reload();
  });
  
});

function showNotification(message) {
  const container = document.getElementById("toast-container") || createToastContainer();
  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.innerText = message;
  
  container.appendChild(toast);
  
  // Trigger slide-in animation
  setTimeout(() => toast.classList.add("show"), 10);
  
  // Fade out and remove
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
