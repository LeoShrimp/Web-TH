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

    <ul class="dropdown-menu">
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

document.addEventListener("click", (e) => {
  if (e.target.id === "logoutBtn") {
    localStorage.removeItem("isLogin");

    window.location.reload();
  }
});
