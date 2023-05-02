// const images = [
// 	'img/01.jpg',
// 	'img/02.jpg',
// 	'img/03.jpg',
// 	'img/04.jpg',
// 	'img/05.jpg',
// 	'https://www.freecodecamp.org/news/content/images/2022/08/pexels-antonio-batinic--4164418--1-.jpg'
// ];
const images = [
	{
		image: 'img/01.webp',
		title: 'Marvel\'s Spiderman Miles Morale',
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	}, {
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	}, {
		image: 'img/03.webp',
		title: 'Fortnite',
		text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
	}, {
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	}, {
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
	}
];

const containerHighlighted = document.querySelector('.highlighted');
const containerThumbs = document.querySelector('.thumbs');

for (let i = 0; i < images.length; i++) {
	containerHighlighted.innerHTML += `<img src="${images[i].image}" alt="" class= "${i == 0 ? 'active' : ''}">`;
	containerThumbs.innerHTML += `<img src="${images[i].image}" alt="" class="${i == 0 ? 'active' : ''}">`;
}


// selezionimo le immagini nell'html
const listHighlighted = document.querySelectorAll('.highlighted img');
// selezioniamo le miniature
const listThumbs = document.querySelectorAll('.thumbs img');
// selezioniamo i bottoni
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');


let activeIndex = 0;
btnNext.addEventListener('click', next);
const caroselText = document.querySelector(".text-highlighted");
caroselText.innerHTML = write(activeIndex);
function next() {
	// dall'immagine attiva tolgo la classe active
	listHighlighted[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');
	// settiamo il nuovo valore di active index
	activeIndex++;
	if (activeIndex >= listHighlighted.length) {
		activeIndex = 0;
	}
	// alla nuova immagine attiva aggiungiamo la classe active
	listHighlighted[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	caroselText.innerHTML = write(activeIndex);
}

function prev() {
	// dall'immagine attiva tolgo la classe active
	listHighlighted[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');
	// settiamo il nuovo valore di active index
	activeIndex--;
	if (activeIndex < 0) {
		activeIndex = listHighlighted.length - 1;
	}
	// alla nuova immagine attiva aggiungiamo la classe active
	listHighlighted[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	caroselText.innerHTML = write(activeIndex);
}
btnPrev.addEventListener('click', prev);

// ciclo per aggiungere gli event listeners alle miniature
for (let i = 0; i < listThumbs.length; i++) {
	listThumbs[i].addEventListener('click',
		function () {
			console.log('cliccata la miniature in posizione ' + i)
			listHighlighted[activeIndex].classList.remove('active');
			listThumbs[activeIndex].classList.remove('active');
			activeIndex = i;
			listHighlighted[activeIndex].classList.add('active');
			listThumbs[activeIndex].classList.add('active');
			caroselText.innerHTML = write(activeIndex);
		}
	)
}
let interval;
const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const btnReverse = document.querySelector(".reverse");
btnStart.addEventListener("click", function () {
	interval = setInterval(next, 2500);
});
btnReverse.addEventListener("click", function () {
	interval = setInterval(prev, 2500);
});
btnStop.addEventListener("click", function () {
	clearInterval(interval)
});

function write(num) {
	let toReturn;
	switch (num) {
		case 0:
			toReturn = "Spiderman"
			break;
		case 1:
			toReturn = "Ratchet & Clank";
			break;
		case 2:
			toReturn = "Fortnite";
			break;
		case 3:
			toReturn = "Stray"
			break;
		case 4:
			toReturn = "Avengers";
			break;
		default:
			toReturn = "None"
			break;
	}
	console.log(num)
	return toReturn;
}
/*
btnNext ---> al click fai function() {...}
btnPrev ---> al click fai function() {...}
thumb0 ----> al click fai function() {...}
thumb1 ----> al click fai function() {...}
thumb3 ----> al click fai function() {...}
thumb4 ----> al click fai function() {...}
*/