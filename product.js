let cart = JSON.parse(localStorage.getItem('cart')) || [];
let storeName = 'Dreamy Doodle Warehouse'

function addToCart(button) {
    // Get product details from the button's parent element
    const productElement = button.parentElement;
    const productId = productElement.getAttribute('data-id');
    const productName = productElement.getAttribute('data-name');
    const productPrice = parseFloat(productElement.getAttribute('data-price'));

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1; // Increment quantity if already in cart
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    // Save the cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(); // Initial update on page load
}


function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-btn').textContent = `Cart (${cartCount})`;
}


// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

function submitContactForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can handle sending the data, e.g. via an API or email
    // For now, we'll just simulate a successful submission.
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Display a response message
    document.getElementById('response-message').textContent = "Thank you for contacting us! We will get back to you shortly.";

    // Reset the form
    document.getElementById('contact-form').reset();
}
