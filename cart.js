document.addEventListener('DOMContentLoaded', function() {
    const queryParams = new URLSearchParams(window.location.search);
    const productName = queryParams.get('name');
    const productPrice = queryParams.get('price');

    if (productName && productPrice) {
        displayCartItem(productName, productPrice);
    }
});

function displayCartItem(name, price) {
    const cartItem = document.createElement('div');
    cartItem.innerHTML = `<p>${name} - ${price}</p>`;
    document.getElementById('cart-items').appendChild(cartItem);
}
