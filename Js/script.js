const
  features = document.getElementById('features'),
  company = document.getElementById('company'),
  mnFeatures = document.getElementById('mn-features'),
  mnCompany = document.getElementById('mn-company'),
  fArrow = document.getElementById('F-arrow'),
  cArrow = document.getElementById('c-arrow'),
  up = "./images/icon-arrow-up.svg",
  down = "./images/icon-arrow-down.svg",
  menuToggle = document.getElementById('menu-toggle'),
  menuOpen = `<img src="./images/icon-menu.svg" alt />`,
  menuClose = `<img src="./images/icon-close-menu.svg" alt />`;

let
  featuresIsOpen = false,
  companyIsOpen = false,
  menuIsOpen = false;

features.addEventListener('click', () => {
  if (!featuresIsOpen) {
    mnFeatures.style.display = "block";
    mnFeatures.style.opacity = 1;
    fArrow.src = up;
  } else {
    mnFeatures.style.opacity = 0;
    mnFeatures.style.display = "none";
    fArrow.src = down;
  }
  featuresIsOpen = !featuresIsOpen;
});

company.addEventListener('click', () => {
    if (!companyIsOpen) {
    mnCompany.style.display = "block";
    mnCompany.style.opacity = 1;
    cArrow.src = up;
  } else {
    mnCompany.style.opacity = 0;
    mnCompany.style.display = "none";
    cArrow.src = down;
  }
  companyIsOpen = !companyIsOpen;
});

menuToggle.addEventListener('click', () => {
  if (menuIsOpen) {
    menuToggle.innerHTML = menuOpen;
    document.querySelector('.nav-menu').style.right = "-100%";
  } else {
    menuToggle.innerHTML = menuClose;
    document.querySelector('.nav-menu').style.right = "0%";
  }
  menuIsOpen = !menuIsOpen;
})
