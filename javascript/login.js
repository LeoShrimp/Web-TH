document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;

  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    showToast("Chưa có tài khoản");
    return;
  }

  if (username === user.username && password === user.password) {
    showToast("Đăng nhập thành công");

    localStorage.setItem("isLogin", "true");

    setTimeout(() => {
      window.location.href = "../index.html";
      
    }, 2000);
  } else {
    showToast("Sai tài khoản hoặc mật khẩu");
  }
});

