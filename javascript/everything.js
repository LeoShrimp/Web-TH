//HIỂN THỊ AVATAR KHI ĐĂNG NHẬP
document.addEventListener("DOMContentLoaded", () => {
  const accountArea = document.getElementById("accountArea");

  const isLogin = localStorage.getItem("isLogin");

  const user = JSON.parse(localStorage.getItem("user"));

  if (isLogin === "true" && user) {
    accountArea.innerHTML = `
<div class="dropdown">

    <img
        src="../img/profile.png"
        class="avatar dropdown-toggle"
        data-bs-toggle="dropdown"
    >

    <ul class="dropdown-menu dropdown-menu-end">
        <li>
            <a class="dropdown-item" href="#">
                Hồ sơ
            </a>
        </li>

        <li>
            <a class="dropdown-item" href="#" id="logoutBtn">
                Đăng xuất
            </a>
        </li>
    </ul>

</div>
`;
  }
});

// NÚT ĐĂNG XUẤT
document.addEventListener("click", (e) => {
  if (e.target.id === "logoutBtn") {
    localStorage.removeItem("isLogin");

    window.location.reload();
  }
});

// CẶP NHẬT GIỎ HÀNG

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartCount = document.getElementById("cartCount");

  if (cartCount) {
    cartCount.textContent = count;
  }
}

updateCartCount();

function showNotification(message) {
  const container =
    document.getElementById("toast-container") || createToastContainer();
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
