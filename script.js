document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.querySelector('.splash-screen');
    const backgroundVideo = document.querySelector('.background-video');
    const mainContent = document.querySelector('.main-content');

    setTimeout(() => {
        splashScreen.classList.add('fade-out');
        backgroundVideo.style.display = 'block';
        mainContent.style.display = 'block';
    }, 2000);
});
