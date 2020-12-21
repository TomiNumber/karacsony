const music = document.querySelector('audio');
const image = document.querySelector('img');
const btn = document.getElementById('btn');
const xmasTree = document.getElementById('tree-container');
const song = document.getElementById('boldogat');

function christmasStart(){
    btn.classList.add('fade-out');
    btn.style.cursor = 'default';
    setTimeout('treeFadein()', 3000);
}

function treeFadein(){
    xmasTree.style.display = 'flex';
    xmasTree.classList.add('fade-in');
    music.play();
    color1();
}

function color1(){
    image.src = `img/christmas-1.svg`;
    setTimeout('color2()', 500);
}

function color2(){
    image.src = `img/christmas-2.svg`;
    setTimeout('color3()', 500);
}

function color3(){
    image.src = `img/christmas-3.svg`;
    setTimeout('color1()', 500);
}

btn.addEventListener('click', christmasStart);
