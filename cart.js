
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContent = document.getElementById('cart-content');
    const totalPriceElement = document.getElementById('total-price');


    // Function to display cart items
    function displayCartItems() {
        cartContent.innerHTML = '';

        // Check if the cart is empty
        if (cart.length === 0) {
            cartContent.innerHTML = '<p>Your cart is empty.</p>';
            totalPriceElement.textContent = '';
            return;
        }

        let totalPrice = 0; // Variable to store total price

        // Display cart items
        cart.forEach((item, index) => {
            const itemTotalPrice = item.price * item.quantity;
            totalPrice += itemTotalPrice; // Update total price

            // Create cart item element
            cartContent.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Total: $${itemTotalPrice.toFixed(2)}</p>
                <button onclick="removeFromCart(${index})">Delete</button>
            </div>
        `;
        });

        // Display total price
        totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    }

    // Initial display of cart items
    displayCartItems();

    // Function to remove an item from the cart
    window.removeFromCart = function (index) {
        cart.splice(index, 1); // Remove the item from array
        localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
        displayCartItems(); // Refresh the cart display
    }



});
