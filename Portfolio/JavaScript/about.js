const aboutBtn1 = document.getElementById('aboutBtn1');
const aboutBtn2 = document.getElementById('aboutBtn2');
const aboutBtn3 = document.getElementById('aboutBtn3');
const aboutBtn4 = document.getElementById('aboutBtn4');
const aboutBtn5 = document.getElementById('aboutBtn5');
const aboutBtn6 = document.getElementById('aboutBtn6');
const aboutBtn7 = document.getElementById('aboutBtn7');

const aboutContent = document.getElementById('aboutContent');

function clearActive() {
    aboutBtn1.classList.remove('about-active');
    aboutBtn2.classList.remove('about-active');
    aboutBtn3.classList.remove('about-active');
    aboutBtn4.classList.remove('about-active');
    aboutBtn5.classList.remove('about-active');
    aboutBtn6.classList.remove('about-active');
    aboutBtn7.classList.remove('about-active');
}

aboutBtn1.addEventListener('click', () => {
    clearActive();
    aboutBtn1.classList.add('about-active');
    aboutContent.textContent = "Ye.";
});
aboutBtn2.addEventListener('click', () => {
    clearActive();
    aboutBtn2.classList.add('about-active');
    aboutContent.textContent = "Ye.";
});
aboutBtn3.addEventListener('click', () => {
    clearActive();
    aboutBtn3.classList.add('about-active');
    aboutContent.textContent = "Ye.";
});
aboutBtn4.addEventListener('click', () => {
    clearActive();
    aboutBtn4.classList.add('about-active');
    aboutContent.textContent = "Ye.";
});
aboutBtn5.addEventListener('click', () => {
    clearActive();
    aboutBtn5.classList.add('about-active');
    aboutContent.textContent = "Ye.";
});
aboutBtn6.addEventListener('click', () => {
    clearActive();
    aboutBtn6.classList.add('about-active');
    aboutContent.textContent = "Ye.";
});
aboutBtn7.addEventListener('click', () => {
    clearActive();
    aboutBtn7.classList.add('about-active');
    aboutContent.textContent = "Ye.";
});