const user = JSON.parse(localStorage.getItem("user"));

document.getElementById("profileUsername").textContent = user.username;

document.getElementById("profileEmail").textContent = user.email;

document.getElementById("logoutBtn2").addEventListener("click", () => {
  console.log("Logout clicked");

  localStorage.removeItem("isLogin");
  localStorage.removeItem("currentUser");

  showToast("Đăng xuất thành công");
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 2000);
});
