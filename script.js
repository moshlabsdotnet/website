// // Mesh background animation
// document.addEventListener('mousemove', (e) => {
//     const x = e.clientX / window.innerWidth * 100;
//     const y = e.clientY / window.innerHeight * 100;
//     document.querySelector('.mesh-background').style.setProperty('--x', `${x}%`);
//     document.querySelector('.mesh-background').style.setProperty('--y', `${y}%`);
// });

// Service card 3D effect
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const percentX = (e.clientX - centerX) / (rect.width / 2);
        const percentY = (e.clientY - centerY) / (rect.height / 2);
        
        card.style.transform = `
            perspective(1000px)
            rotateY(${percentX * 10}deg)
            rotateX(${-percentY * 10}deg)
            translateZ(20px)
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateZ(0)';
    });
});

document.querySelector('.terminal-redirect').addEventListener('click', () => {
  window.open('terminal/index.html', '_blank');
});