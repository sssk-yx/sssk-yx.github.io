function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = Math.random() * window.innerWidth + 'px';
    raindrop.style.animationDuration = Math.random() * 3 + 2 + 's';
    raindrop.style.animationDelay = Math.random() * 2 + 's';
    document.querySelector('.sky').appendChild(raindrop);

    setTimeout(() => {
        raindrop.remove();
    }, 5000);
}

setInterval(createRaindrop, 100);