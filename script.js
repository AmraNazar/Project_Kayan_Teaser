document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.querySelector('.splash-screen');
    const backgroundVideo = document.querySelector('.background-video');
    const mainContent = document.querySelector('.main-content');

    // Show splash screen for 2 seconds
    setTimeout(() => {
        // Hide splash screen
        splashScreen.classList.add('fade-out');
        
        // Show background video and main content
        backgroundVideo.classList.add('fade-in');
        mainContent.classList.add('fade-in');
    }, 2000);
});
