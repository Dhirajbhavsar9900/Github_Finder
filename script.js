let preloader =  document.querySelector('#preloader');
console.log(preloader);
window.addEventListener('load', () => {
    preloader.style.display = 'none';
});

async function github(){
    const res = await fetch('https://api.github.com/users/Dhiraj-Bhawsar');
    const data = await res.json();
    console.log(data);
}