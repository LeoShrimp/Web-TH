// HIỆN THỊ ĐỒ TỪ MENU
const cartContainer = document.getElementById("cartContainer");

const totalPrice = document.getElementById("totalPrice");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;

    total += itemTotal;

    cartContainer.innerHTML += `

      <div class="cart-item row align-items-center">

        <div class="col-5">
          <div class="product-info">

            <img src="${item.image}" alt="">

            <div>

              <h3>${item.name}</h3>

              <p>
                Sản phẩm Morning Cup
              </p>

            </div>

          </div>
        </div>

        <div class="col-2 text-center btn-value">

          <button
            onclick="decreaseQty(${index})">
            -
          </button>

          ${item.quantity}

          <button
            onclick="increaseQty(${index})">
            +
          </button>

        </div>

        <div class="col-2 text-center price">
          ${item.price.toLocaleString()}đ
        </div>

        <div class="col-2 text-center">

          <div class="action-box">

            <span>
              ${itemTotal.toLocaleString()}đ
            </span>

            <i
              class="fa-solid fa-trash"
              onclick="removeItem(${index})">
            </i>

          </div>

        </div>

      </div>
    <hr>
    `;
  });

  totalPrice.value = total.toLocaleString() + "đ";
}

renderCart();

// TĂNG GIẢM SỐ LƯỢNG

function increaseQty(index) {
  cart[index].quantity++;

  localStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
}

function decreaseQty(index) {
  cart[index].quantity--;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
}

// THANH TOÁN
document.querySelector(".checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Giỏ hàng đang trống");

    return;
  }

  showToast("Thanh toán thành công");

  localStorage.removeItem("cart");

  setTimeout(() => {
    location.reload();
  }, 3000);
});
