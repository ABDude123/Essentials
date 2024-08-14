// Smooth scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Open document in a new tab
function openDocument(url) {
    window.open(url, '_blank');
}

// Add selected package to the cart
function addToCart() {
    const selectedPackage = document.getElementById('price-package').value;
    const cartItems = document.getElementById('cart-items');

    const itemElement = document.createElement('div');
    itemElement.textContent = `Added to cart: ${selectedPackage}`;
    itemElement.className = 'cart-item';
    cartItems.appendChild(itemElement);
}

// Proceed to checkout (you can expand this as needed)
function checkout() {
    alert('Proceeding to checkout...');
}
