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
    aboutContent.textContent = "Background: I have a background in computer science and have been passionate about technology since a young age. I started coding in high school and have been honing my skills ever since.";
});
aboutBtn2.addEventListener('click', () => {
    clearActive();
    aboutBtn2.classList.add('about-active');
    aboutContent.textContent = "Experience: I have experience working on various web development projects, including building responsive websites and interactive applications using modern technologies like React and Node.js.";
});
aboutBtn3.addEventListener('click', () => {
    clearActive();
    aboutBtn3.classList.add('about-active');
    aboutContent.textContent = "Education: I hold a Bachelor's degree in Computer Science from a reputable university, where I focused on software engineering and web development.";
});
aboutBtn4.addEventListener('click', () => {
    clearActive();
    aboutBtn4.classList.add('about-active');
    aboutContent.textContent = "Goals: My goal is to become a senior full-stack developer and contribute to innovative projects that make a positive impact on society.";
});
aboutBtn5.addEventListener('click', () => {
    clearActive();
    aboutBtn5.classList.add('about-active');
    aboutContent.textContent = "Values: I value teamwork, continuous learning, and creating user-friendly applications that solve real-world problems.";
});
aboutBtn6.addEventListener('click', () => {
    clearActive();
    aboutBtn6.classList.add('about-active');
    aboutContent.textContent = "Hobbies: In my free time, I enjoy hiking, reading tech blogs, and contributing to open-source projects.";
});
aboutBtn7.addEventListener('click', () => {
    clearActive();
    aboutBtn7.classList.add('about-active');
    aboutContent.textContent = "Fun Facts: I once built a website for my local community center using only HTML and CSS. It was my first major project!";
});