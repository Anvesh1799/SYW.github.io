document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const clearCartButton = document.getElementById('clear-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCartClicked);
    });

    clearCartButton.addEventListener('click', clearCart);
});

function addToCartClicked(event) {
    const button = event.target;
    const product = button.parentElement;
    const productId = product.dataset.id;
    const productName = product.querySelector('h2').innerText;
    const productPrice = product.querySelector('p').innerText;

    addToCart(productId, productName, productPrice); 
}

function addToCart(id, name, price) {
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `${name} - ${price} <button class="remove-item">Remove</button>`;
    cartItem.dataset.id = id;
    document.getElementById('cart-items').appendChild(cartItem);

    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeItem);
    });
}

function removeItem(event) {
    const button = event.target;
    const cartItem = button.parentElement;
    cartItem.remove();
}

function clearCart() {
    const cartItems = document.getElementById('cart-items');
    while (cartItems.firstChild) {
        cartItems.removeChild(cartItems.firstChild);
    }
}

