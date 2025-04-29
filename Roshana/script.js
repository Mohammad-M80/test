// Simple button interaction
const loveBtn = document.getElementById('loveBtn');
let isHolding = false;
let holdTimer;

loveBtn.addEventListener('mousedown', function() {
    isHolding = true;
    holdTimer = setTimeout(() => {
        document.getElementById('hiddenLove').style.opacity = '1';
        document.getElementById('hiddenLove').style.height = 'auto';
        this.textContent = 'I Love You';
    }, 1000);
});

loveBtn.addEventListener('mouseup', function() {
    clearTimeout(holdTimer);
    if (!isHolding) return;
    isHolding = false;
});

// Simple mouse movement parallax effect
document.addEventListener('mousemove', function(e) {
    const card = document.querySelector('.card');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});