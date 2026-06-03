document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Mật khẩu không khớp");
    return;
  }

  const user = {
    username,
    email,
    password,
  };

  localStorage.setItem("user", JSON.stringify(user));

  showNotification("Đăng ký thành công");

  window.location.href = "login.html";
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