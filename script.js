<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

    var typed = new Typed("#element", {
      strings: ["Web Developer", "Graphic Designer", "Web Designer", "Video Editor"],
      typeSpeed: 50,
    });

    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
      body.classList.add('light-mode');
      toggleBtn.textContent = '☀️';
    }
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      const isLight = body.classList.contains('light-mode');
      toggleBtn.textContent = isLight ? '☀️' : '🌙';
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Scroll animation for fade-in sections
    const fadeSections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
    fadeSections.forEach(section => observer.observe(section));
