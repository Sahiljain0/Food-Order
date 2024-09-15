let slideIndex = 0;
showSlide(slideIndex);

// document.getElementById('prevBtn').addEventListener('click', () => changeSlide(-1));
// document.getElementById('nextBtn').addEventListener('click', () => changeSlide(1));


function changeSlide(n) {
    showSlide(slideIndex += n);
    setTimeout(()=>{
        changeSlide(1);
        startAnimation(slideIndex);
    },3000)
}

function showSlide(n) {
    const slides = document.getElementsByClassName('carousel-slide');
    let outercontainer = document.querySelectorAll('.outercontainer');

    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        outercontainer[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
    outercontainer[slideIndex].style.display = 'block';
}


  
changeSlide(1)
// 

function startAnimation(ind) {

    ind++;
    const images = document.querySelectorAll(`.images${ind}`);
    
    images.forEach((image, index) => {
        const delay = index * 20 + 15;

        image.style.transform = `translateY(-${window.innerHeight-570}px)`;
        
        setTimeout(() => {
            image.style.transition = 'transform 1s ease-in-out';
            image.style.transform = 'translateY(0)';
        }, delay);
    });
    // setTimeout(() => {
    //     startAnimation();
    // }, 2000);
}




// level 2


const slider = document.querySelector(".slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const cardWidth = 300; // Width of a single card
const numCards = 5; // Total number of cards
let currentPosition = 0;

prevBtn.addEventListener("click", () => {
    if (currentPosition > 0) {
        currentPosition -= cardWidth;
        slide();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPosition < cardWidth * (numCards - 4)) {
        currentPosition += cardWidth;
        slide();
    }
});

function slide() {
    slider.style.transform = `translateX(-${currentPosition}px)`;
}

