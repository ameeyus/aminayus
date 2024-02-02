const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

// функция для переключения на предыдущий слайд
function prevSlide() {
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    updateSlidePosition();
}

function nextSlide() {
    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    updateSlidePosition();
}

function updateSlidePosition() {
    const newPosition = -currentIndex * slides[0].offsetWidth;
    slidesContainer.style.transform = `translateX(${newPosition}px)`;
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);




// JavaScript для управления отображением бургер-меню
// const burgerIcon = document.getElementById('burger-icon');
// const closeIcon = document.getElementById('close-icon');
// const menu = document.getElementById('menu');

// burgerIcon.addEventListener('click', function () {
//   menu.style.display = 'block';
// });

// closeIcon.addEventListener('click', function () {
//   menu.style.display = 'none';
// });

const fix = document.querySelector(".fix");

const burgerIcon = document.querySelector("#burger-icon");

burgerIcon.addEventListener("click",openM);

function openM(){
    console.log('test')
    fix.classList.add("activi")
}
const closeIcon = document.querySelector("#close-icon");

closeIcon.addEventListener("click",closeMenu);

function closeMenu() {
    fix.classList.remove("activi");
    
}


console.log(fix);


const openBtn = document.querySelector("#openBtn");
const popup = document.querySelector("#popup");
const closeBtn = document.querySelector("#closeBtn");

openBtn.addEventListener("click", function () {
    popup.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

