const pricePerGram = 8;
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart() {
    const quantity = parseInt(document.getElementById("quantity").value);
    cart = [{ name: "Zafferano in stimmi", quantity, price: pricePerGram }];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const cartDiv = document.getElementById("cart");
    const totalP = document.getElementById("total");

    if (cart.length === 0) {
        cartDiv.innerHTML = "<p>Il carrello è vuoto</p>";
        totalP.innerText = "";
        return;
    }

    const item = cart[0];
    const total = item.quantity * item.price;

    cartDiv.innerHTML = `<p>${item.name} – ${item.quantity} g</p>`;
    totalP.innerText = `Totale stimato: €${total},00`;
}

function sendEmailOrder() {
    if (cart.length === 0) return;

    const item = cart[0];
    const total = item.quantity * item.price;

    const subject = "Ordine zafferano";
    const body = `Buongiorno,%0D%0A%0D%0A` +
        `vorrei ordinare:%0D%0A` +
        `${item.name} - ${item.quantity} g%0D%0A` +
        `Totale stimato: €${total},00%0D%0A%0D%0A` +
        `Grazie`;

    window.location.href = `mailto:francisov02@gmail.com?subject=${subject}&body=${body}`;
}

function sendWhatsAppOrder() {
    if (cart.length === 0) return;

    const item = cart[0];
    const total = item.quantity * item.price;

    const message = `Buongiorno, vorrei ordinare ${item.quantity} g di zafferano. Totale stimato €${total},00`;
    const phone = "3311325465";

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

renderCart();