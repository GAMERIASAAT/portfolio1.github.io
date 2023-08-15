document.addEventListener("DOMContentLoaded", function () {

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            section.classList.add('show-animate');
        } else {
            section.classList.remove('show-animate');
        }
    }
    )
}

});
