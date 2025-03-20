let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id, name, price) {
    let item = cart.find(product => product.id === id);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
}

function loadCart() {
    let cartList = document.getElementById("cart-items");
    let total = 0;
    cartList.innerHTML = "";

    cart.forEach(item => {
        total += item.price * item.quantity;
        cartList.innerHTML += `<li>${item.name} - ${item.quantity} x ${item.price} VNĐ</li>`;
    });

    document.getElementById("total-price").innerText = total + " VNĐ";
}

function checkout() {
    localStorage.removeItem("cart");
    alert("Thanh toán thành công!");
}
