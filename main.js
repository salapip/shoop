const button = document.getElementById('hamburger')
const navbarNav = document.querySelector('.nav-links')

button.onclick = () => {
    navbarNav.classList.toggle('active')
}

const hamburger = document.querySelector('.nav-links')
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !button.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})