document.addEventListener('DOMContentLoaded', () => {
    // Log message to indicate the DOM is fully loaded
    console.log('DOM fully loaded and parsed');

    // Cache DOM elements for later use
    const navbar = document.querySelector('.navdiv');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    let lastScrollTop = 0;

    // Event listener for the navbar toggle button
    navToggle.addEventListener('click', () => navLinks.classList.toggle('visible'));

    // Event listener for window scroll events
    window.addEventListener('scroll', () => {
        // Get the current scroll position
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Hide or show the navbar based on scroll direction
        navbar.style.top = scrollTop > lastScrollTop ? '-90px' : '0';

        // Add or remove the 'scrolled' class based on scroll position
        if (scrollTop === 0) {
            navbar.classList.remove('scrolled');
        } else {
            navbar.classList.add('scrolled');
        }

        // Update the last scroll position
        lastScrollTop = scrollTop;

        // Apply a scale transformation to sections based on scroll position
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            document.querySelectorAll('.sec1, .sec2, .sec3').forEach(section => {
                section.style.transform = `scale(${1 + scrollTop * 0.00005})`;
            });
        });
        
    });

    
    // Event listener for the feedback form submission
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('feedback-form');
        const confirmationMessage = document.getElementById('confirmation-message');

        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // Basic validation for form fields
            const name = document.getElementById('fname').value;
            const rating = document.getElementById('rate').value;
            const comment = document.getElementById('comment').value;

            if (!name || !rating || !comment) {
                confirmationMessage.textContent = 'Please fill in all required fields.';
                confirmationMessage.style.color = 'red';
                return;
            }

            // Simulate form submission
            confirmationMessage.textContent = 'Thank you for your feedback!';
            confirmationMessage.style.color = 'green';

            // Reset the form
            form.reset();
        });
    });    
});