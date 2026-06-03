document.addEventListener("DOMContentLoaded", () => {
  const accountArea = document.getElementById("accountArea");

  const isLogin = localStorage.getItem("isLogin");

  const user = JSON.parse(localStorage.getItem("user"));

  if (isLogin === "true" && user) {
    accountArea.innerHTML = `
            <div class="user-menu">
                <img src="img/profile.png" class="avatar" alt="">
                <span>${user.username}</span>
            </div>
        `;
  }
});
