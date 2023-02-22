const links = document.querySelectorAll('.navbar .link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');
            sections[i].classList.add('active');
            activeLink = i;
        }
    })
})

const menuBtn = document.querySelector('.menu-btn-toggle');
  const linkGroup = document.querySelector('.link-group');
  
  menuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    linkGroup.classList.toggle('active');
  });

  window.addEventListener('resize', function() {
  if (window.innerWidth > 980) {
    document.querySelector('.menu-btn').classList.remove('active');
    document.querySelector('.link-group').classList.remove('active');
    document.querySelector('.menu-btn').style.display = 'none';
    
  } else {
    document.querySelector('.menu-btn').style.display = 'block';
  }
});

function downloadCV() {
  // Replace the URL with the actual URL of your CV file
  const url = "https://example.com/your-cv.pdf";
  
  // Create a hidden anchor element and set its href attribute to the CV file URL
  const link = document.createElement("a");
  link.setAttribute("href", "https://drive.google.com/uc?id=1VJ2QJW24w2NwzCFUyNVb1jkwiZDrdQiO&export=download");
  link.setAttribute("download", "your-cv.pdf");
  
  link.style.display = "none";
  
  // Append the anchor element to the HTML body
  document.body.appendChild(link);
  
  // Simulate a click on the anchor element to trigger the download
  link.click();
  
  // Remove the anchor element from the HTML body
  document.body.removeChild(link);
}


const achievementsSection = document.querySelector('.achievements-section');
const cards = document.querySelectorAll('.card');
let currentIndex = 0;
let animationInterval;

function animateCards(startIndex = 0) {
  // Remove zoom class from all cards
  cards.forEach(card => card.classList.remove('zoom'));

  // Add zoom class to the current card
  cards[startIndex].classList.add('zoom');

  // Start the animation loop
  animationInterval = setInterval(() => {
    // Remove zoom class from all cards
    cards.forEach(card => card.classList.remove('zoom'));

    // Add zoom class to the current card
    cards[currentIndex].classList.add('zoom');

    // Increment index or reset to 0 if at end of array
    currentIndex = (currentIndex + 1) % cards.length;
  }, 1500);
}

function startAnimation(startIndex = 0) {
  animateCards(startIndex);
}

function stopAnimation() {
  // Stop the animation loop
  clearInterval(animationInterval);
}

// Stop the animation loop if the user hovers over a card
cards.forEach((card, index) => {
  card.addEventListener('mouseenter', () => {
    stopAnimation();
    // Zoom in the current card
    cards.forEach(card => card.classList.remove('hover'));
    cards[index].classList.add('hover');
    currentIndex = index;
  });
  card.addEventListener('mouseleave', () => {
    // Zoom out the current card
    cards[index].classList.remove('hover');
    // Resume the animation loop from the current card
    startAnimation(currentIndex);
  });
});

const infoElement = document.querySelector('.info');

window.addEventListener('scroll', () => {
    const infoRect = infoElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (infoRect.top < windowHeight * 0.75) {
        infoElement.classList.add('animate');
    }
});





