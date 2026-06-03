document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;

  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    showNotification("Chưa có tài khoản");
    return;
  }

  if (username === user.username && password === user.password) {
    showNotification("Đăng nhập thành công");

    localStorage.setItem("isLogin", "true");

    window.location.href = "../index.html";
  } else {
    showNotification("Sai tài khoản hoặc mật khẩu");
  }
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
function createToastContainer() {
  const container = document.createElement("div");
  container.id = "toast-container";
  container.style.position = "fixed";
  container.style.bottom = "20px";
  container.style.right = "20px";
  container.style.zIndex = "9999";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "10px";
  document.body.appendChild(container);
  return container;
}