document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;

  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Chưa có tài khoản");
    return;
  }

  if (username === user.username && password === user.password) {
    alert("Đăng nhập thành công");

    localStorage.setItem("isLogin", "true");

    window.location.href = "../index.html";
  } else {
    showNotification("Sai tài khoản hoặc mật khẩu");
  }
});

