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
