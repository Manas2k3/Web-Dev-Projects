<script>
  // Toggle the navigation menu on mobile devices
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Hide the navigation menu when a link is clicked on mobile devices
  const navLinksItems = document.querySelectorAll('.nav-links li a');

  navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
      }
    });
  });
</script>
