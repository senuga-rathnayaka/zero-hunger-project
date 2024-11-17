let slideIndex = 0;
showSlides();

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Automatic Slideshow
setInterval(function () {
    slideIndex++;
    showSlides();
}, 5000); // Change image every 3 seconds
// product show side

function closeTrending() {
    document.querySelector(".trending").style.display = "none";
}
// go down to products

document.addEventListener("DOMContentLoaded", (event) => {
    const viewAllButton = document.querySelector(".view-all");
    const productsSection = document.querySelector(".products.main.flexwrap");

    viewAllButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent the default link behavior
        productsSection.scrollIntoView({behavior: "smooth"});
    });
});
// Select relevant elements

// Select relevant elements
// Select relevant elements
const addToCartButtons = document.querySelectorAll(".primary-button");
const cartItemsContainer = document.querySelector(".cart-items");
const cartIcon = document.querySelector(".iscart");
const cartPopup = document.querySelector(".cart-popup");
const checkoutButton = document.querySelector(".checkout-button");
const closeButton = document.querySelector(".close-button");

let cart = [];

// Function to update cart popup
function updateCart() {
    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `
      <div class="cart-item-details">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="item-info">
          <h4>${item.name}</h4>
          <p>Price: USD ${item.price.toFixed(2)}</p>
          <input type="number" value="${item.quantity}" min="1" class="item-quantity" data-index="${index}">
        </div>
      </div>
      <div class="cart-item-total">
        <p>Total: USD ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div class="cart-item-actions">
        <button class="delete-button" data-index="${index}">Delete</button>
      </div>
    `;
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.price * item.quantity;
    });

    document.querySelector(".cart-total").textContent = `Total: USD ${totalPrice.toFixed(2)}`;
    cartIcon.querySelector(".item-number").textContent = cart.length;

    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const index = button.dataset.index;
            cart.splice(index, 1);
            updateCart();
        });
    });

    // Check if the cart is empty
    if (cart.length === 0) {
        checkoutButton.classList.add("empty-cart");
        closeButton.classList.add("empty-cart");
    } else {
        checkoutButton.classList.remove("empty-cart");
        closeButton.classList.remove("empty-cart");
    }
}

// Attach event listener to each add to cart button
// Attach event listener to each add to cart button
addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const productElement = button.closest(".item2");
        const productName = productElement.querySelector(".main-links a").textContent.trim();
        const productPrice = parseFloat(
            productElement.querySelector(".price .current").textContent.trim().replace("USD : ", "")
        );
        const productImage = productElement.querySelector(".thumbnail img").src;

        const product = {
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1,
        };

        const existingProductIndex = cart.findIndex((item) => item.name === product.name);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push(product);
        }
        updateCart();
        showPopupAlert(); // Show popup alert when item is added to cart
        cartPopup.classList.add("open"); // Show cart popup when item is added
    });
});

// Event listener for cart icon click to toggle cart popup visibility
cartIcon.addEventListener("click", () => {
    cartPopup.classList.toggle("open");
    if (cartPopup.classList.contains("open")) {
        updateCart();
    }
});

// Event listener for quantity change in the cart items
cartItemsContainer.addEventListener("change", (event) => {
    if (event.target.classList.contains("item-quantity")) {
        const index = event.target.dataset.index;
        const newQuantity = parseInt(event.target.value, 10);
        if (!isNaN(newQuantity) && newQuantity >= 1) {
            cart[index].quantity = newQuantity;
            updateCart();
        } else {
            event.target.value = cart[index].quantity;
        }
    }
});

// Event listener for checkout button
checkoutButton.addEventListener("click", () => {
    // Redirect to checkout.html
    window.location.href = "checkout.html";
});

// Event listener for close button
closeButton.addEventListener("click", () => {
    cartPopup.classList.remove("open"); // Hide cart popup when close button is clicked
});

// JavaScript for "Scroll to Top" Button
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.querySelector(".scroll-to-top");

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = "flex";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Scroll to top when the button is clicked
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

// Function to show the popup alert
function showPopupAlert() {
    const popup = document.querySelector(".popup-alert");
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000); // Adjust the timeout as needed
}

// Function to close the popup alert
function closeAlert() {
    const popup = document.querySelector(".popup-alert");
    popup.style.display = "none";
}
