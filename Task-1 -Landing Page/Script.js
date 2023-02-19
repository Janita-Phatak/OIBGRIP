const navLinks = document.querySelectorAll('nav a');
const homeLink = navLinks[0]; // Assumes "Home" link is the first link in the navigation

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    // Remove "active" class from "Home" link
//    homeLink.classList.remove('active');
   Link.classList.remove('active');

    // Add "active" class to hovered link
    link.classList.add('active');
  });
});

var banners = document.querySelectorAll('.banner');
var dots = document.querySelectorAll('.dot');
var currentBanner = 0;

function showBanner(n) {
  banners[currentBanner].style.opacity = '0';
  dots[currentBanner].classList.remove('active');
  currentBanner = (n + banners.length) % banners.length;
  banners[currentBanner].style.opacity = '1';
  dots[currentBanner].classList.add('active');
}

setInterval(() => {
  showBanner(currentBanner + 1);
}, 4000);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showBanner(i);
  });
});

 // JavaScript to add animation classes on scroll
 const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-up');
    } else {
      entry.target.classList.remove('animate-up');
    }
  });
});

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  observer.observe(card);
});


// Get all the icon elements
const icons = document.querySelectorAll('.footer-icons .fa');

// Set the initial icon index to 0
let currentIconIndex = 0;

// Define a function to change the color of the icons
function changeIconColor() {
  // Set the color of the current icon to blue
  icons[currentIconIndex].style.color = '#14c0eb';

  // Set the color of the previous icon to white
  if (currentIconIndex > 0) {
    icons[currentIconIndex - 1].style.color = '#fff';
  } else {
    icons[icons.length - 1].style.color = '#fff';
  }

  // Increment the icon index
  currentIconIndex = (currentIconIndex + 1) % icons.length;
}

// Call the changeIconColor function every 2 seconds
setInterval(changeIconColor, 2000);

const adAppealText = document.querySelector('.ad-appeal-text');
  const adAppealTrigger = document.querySelector('.ad-appeal');

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkAdAppealText() {
    if (isElementInViewport(adAppealTrigger)) {
      adAppealText.classList.add('animated');
    } else {
      adAppealText.classList.remove('animated');
    }
  }

  window.addEventListener('scroll', checkAdAppealText);
  window.addEventListener('resize', checkAdAppealText);

