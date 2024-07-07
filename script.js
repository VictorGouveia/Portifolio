document.getElementById('mobile-menu').addEventListener('click', function() {
    var nav = document.getElementById('nav-menu');
    if (nav.style.display === 'flex') {
      nav.style.display = 'none';
      nav.classList.remove('active');
    } else {
      nav.style.display = 'flex';
      nav.classList.add('active');
    }
  });
  