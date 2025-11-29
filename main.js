const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseenter', () => {
    const randomX = (Math.random() - 0.5) * (window.innerWidth - 200);
    const randomY = (Math.random() - 0.5) * (window.innerHeight - 200);
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    // Return to original position after 2 seconds
    setTimeout(() => {
        noBtn.style.transform = 'translate(0, 0)';
    }, 2000);
});