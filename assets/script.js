const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');

let activeSlide = 0;

function createDots () {
	for (let _ of slides) {
		dots.innerHTML +='<div class="dot"></div>';
	}
}

// Fonction pour afficher le slide actif
function displaySlide() {
	bannerImg.src = "./assets/images/slideshow/" + slides[activeSlide].image;
	document.querySelector('#banner p').innerHTML = slides[activeSlide].tagLine;
}

// Fonction pour mettre à jour le point actif
function updateActiveDot() {
	document.querySelectorAll(".dot").forEach((dot, index) => {
		if (index === activeSlide) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
} 

// Fonction pour passer au slide suivant
function nextSlide() {
	activeSlide++;
	if (activeSlide === slides.length) {
		activeSlide = 0;
	}
	displaySlide();
	updateActiveDot();
}

// Fonction pour passer au slide précédent
function previousSlide() {
	activeSlide--;
	if (activeSlide < 0) {
		activeSlide = slides.length - 1;
	}
	displaySlide();
	updateActiveDot();
}

// Écouteurs d'événements sur les flèches
arrowLeft.addEventListener('click', previousSlide);
arrowRight.addEventListener('click', nextSlide);

// Initialisation du slide actif et du point actif
createDots();
displaySlide();
updateActiveDot();