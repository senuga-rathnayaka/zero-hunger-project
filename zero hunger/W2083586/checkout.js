document.getElementById('checkout-btn').addEventListener('click', function(event) {
    event.preventDefault();
    
    const form = document.getElementById('personal-info-form');
    const name = document.getElementById('name');
    const address = document.getElementById('address');
    const telephone = document.getElementById('telephone');
    const postalCode = document.getElementById('postal-code');
    const cardNumber = document.getElementById('card-number');
    const cardHolder = document.getElementById('card-holder');
    const expires = document.getElementById('expires');
    const cvc = document.getElementById('cvc');

    // Check if all required fields are filled
    if (!name.value || !address.value || !telephone.value || !postalCode.value || !cardNumber.value || !cardHolder.value || !expires.value || !cvc.value) {
        alert('Please fill out all fields before checking out.');
    } else {
        alert('Checkout successful!');
        form.submit(); // Submit the form if all fields are filled
    }
});
