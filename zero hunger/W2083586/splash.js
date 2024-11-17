document.addEventListener('DOMContentLoaded', () => {
  // Animate the loading page
  setTimeout(() => {
    document.querySelector('.loading-page').animate(
      [
        { opacity: 1 },
        { opacity: 0 }
      ],
      {
        duration: 1500,
        fill: 'forwards'
      }
    );

    setTimeout(() => {
      document.querySelector('.loading-page').style.display = 'none';
    }, 1500);
  }, 3500);

  // Animate the logo name and group members
  const logoName = document.querySelector('.logo-name');
  logoName.animate(
    [
      { transform: 'translateY(50px)', opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 }
    ],
    {
      duration: 2000,
      delay: 500,
      fill: 'forwards'
    }
  );

  const groupMembers = document.querySelectorAll('.group-members span');
  groupMembers.forEach((member, index) => {
    member.animate(
      [
        { opacity: 0 },
        { opacity: 1 }
      ],
      {
        duration: 2000,
        delay: 500 + index * 300, // Adjust delay for staggered animation
        fill: 'forwards'
      }
    );
  });

  // Animate the "Welcome Viewers!" part
  setTimeout(() => {
    document.querySelector('.container').animate(
      [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' }
      ],
      {
        duration: 1000,
        fill: 'forwards'
      }
    );
  }, 5000); // Adjust the delay if needed

  // Redirect to home.html after the swipe-up animation
  function redirectToHomePage() {
    setTimeout(function() {
      window.location.href = "home.html";
    }, 6000); // 6000 milliseconds = 6 seconds
  }
  
  redirectToHomePage();
});
