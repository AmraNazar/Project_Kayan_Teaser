// document.addEventListener('DOMContentLoaded', () => {
//     const splashScreen = document.querySelector('.splash-screen');
//     const backgroundVideo = document.querySelector('.background-video');
//     const mainContent = document.querySelector('.main-content');

//     // Show splash screen for 2 seconds
//     setTimeout(() => {
//         // Hide splash screen
//         splashScreen.classList.add('fade-out');
        
//         // Show background video and main content
//         backgroundVideo.classList.add('fade-in');
//         mainContent.classList.add('fade-in');
//     }, 2000);
// });
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.querySelector('.splash-screen');
    const backgroundVideo = document.querySelector('.background-video');
    const backgroundFallback = document.querySelector('.background-fallback');
    const mainContent = document.querySelector('.main-content');

    // Check if video can play
    backgroundVideo.addEventListener('error', () => {
        backgroundVideo.style.display = 'none';
        backgroundFallback.style.display = 'block';
    });

    // Show splash screen for 2 seconds
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
        
        if (backgroundVideo.error) {
            backgroundFallback.classList.add('fade-in');
        } else {
            backgroundVideo.classList.add('fade-in');
        }
        
        mainContent.classList.add('fade-in');
    }, 2000);
});
