let btn = document.querySelector('.btn-mood');
let body = document.querySelector('body');

btn.onclick = function() {
    // body.classList.add('dark');
    // body.classList.remove('dark');
    body.classList.toggle('dark');
    btn.classList.toggle('fa-sun');
}

// preventDefault();