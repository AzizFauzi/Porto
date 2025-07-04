// 🌙 DARK MODE TOGGLE
const toggle = document.getElementById('toggle-theme');
toggle.addEventListener('click', () => {
  const root = document.documentElement;
  const theme = root.getAttribute('data-theme');
  root.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
});

// 🧭 SCROLL SPY
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionTop = current.offsetTop - 100;
    const sectionHeight = current.offsetHeight;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// 🔝 BACK TO TOP BUTTON
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
