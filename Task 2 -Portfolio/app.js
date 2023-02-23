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



function Repo1() {
  window.open("https://github.com/Janita-Phatak/V-FixMyCity/tree/master"); // replace with your own GitHub repo URL
}

function Repo2() {
  window.open("https://github.com/Janita-Phatak/Library-Management/tree/master"); // replace with your own GitHub repo URL
}


const info = document.querySelector('.info');
const options = {
  rootMargin: '-50px 0px',
  threshold: 0
};

function animateOnScroll() {
  const topInView = info.getBoundingClientRect().top < window.innerHeight;
  const bottomInView = info.getBoundingClientRect().bottom > 0;
  if (topInView && bottomInView) {
    info.classList.add('visible');
  } else {
    info.classList.remove('visible');
  }
}

window.addEventListener('scroll', animateOnScroll);

const name = "Janita";
const nameElem = document.getElementById("name");

for (let i = 0; i < name.length; i++) {
  setTimeout(function() {
    nameElem.textContent += name[i];
  }, i * 400);
}



const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
  card.style.setProperty('--card-index', index);

  card.addEventListener('mouseenter', () => {
    card.classList.add('is-hovered');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('is-hovered');
  });
});




// Add "active" class to first link by default
document.querySelector('.link:first-child').classList.add('active');

window.addEventListener('scroll', function() {
  const navLinks = document.querySelectorAll('.link');
  const sections = document.querySelectorAll('section');
  let currentSectionIndex = 0;
  
  // Loop through the sections to find the one currently in view
  for (let i = 0; i < sections.length; i++) {
    const sectionTop = sections[i].getBoundingClientRect().top;
    const sectionBottom = sections[i].getBoundingClientRect().bottom;
    
    // Check if section is in view (at least 50% of it)
    if (sectionTop <= (window.innerHeight / 2) && sectionBottom >= (window.innerHeight / 2)) {
      currentSectionIndex = i;
    }
  }
  
  // Remove "active" class from all links
  navLinks.forEach((link) => link.classList.remove('active'));
  
  // Add "active" class to corresponding link
  navLinks[currentSectionIndex].classList.add('active');
});
