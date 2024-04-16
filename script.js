let preloader =  document.querySelector('#preloader');
console.log(preloader);
window.addEventListener('load', () => {
    preloader.style.display = 'none';
});