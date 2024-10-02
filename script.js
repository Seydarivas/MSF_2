document.getElementById('yesButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');
});

document.getElementById('noButton').addEventListener('click', function() {
    const button = document.getElementById('noButton');
    const offset = Math.floor(Math.random() * 50) - 25; // Mover entre -25 y 25 píxeles
    button.style.transform = `translate(${offset}px, ${offset}px)`;
});
