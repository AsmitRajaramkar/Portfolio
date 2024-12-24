// Smooth Scroll
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Form Submission Alert
  const form = document.querySelector('#contact form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will connect you very soon');
    form.reset();
  });
  