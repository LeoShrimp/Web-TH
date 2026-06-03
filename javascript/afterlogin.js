document.addEventListener("DOMContentLoaded", () => {
  const accountArea = document.getElementById("accountArea");

  const isLogin = localStorage.getItem("isLogin");

  const user = JSON.parse(localStorage.getItem("user"));

  if (isLogin === "true" && user) {
    accountArea.innerHTML = `
        <img src="/img/profile.png" class="avatar">
    `;
  } else {
    accountArea.innerHTML = `
        <a href="pages/login.html">
            <button class="btn_account">
                Đăng nhập
            </button>
        </a>
    `;
  }
});
