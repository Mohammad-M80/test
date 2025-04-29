// Button interaction (works for both mouse and touch)
const loveBtn = document.getElementById('loveBtn');
let holdTimer;

// Mouse/touch start
loveBtn.addEventListener('mousedown', startHold);
loveBtn.addEventListener('touchstart', startHold);

// Mouse/touch end
loveBtn.addEventListener('mouseup', cancelHold);
loveBtn.addEventListener('mouseleave', cancelHold);
loveBtn.addEventListener('touchend', cancelHold);

function startHold() {
    holdTimer = setTimeout(() => {
        document.getElementById('hiddenLove').style.opacity = '1';
        document.getElementById('hiddenLove').style.height = 'auto';
        loveBtn.textContent = 'I Love You';
    }, 1000);
}

function cancelHold() {
    clearTimeout(holdTimer);
}

// Simplified parallax for mobile (optional)
if (!('ontouchstart' in window)) {
    // Only enable parallax on non-touch devices
    document.addEventListener('mousemove', (e) => {
        const card = document.querySelector('.card');
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
}