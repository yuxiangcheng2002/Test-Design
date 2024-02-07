function animateDisappearance(tag) {
    const images = document.querySelectorAll('.image');
    images.forEach(image => {
        if (tag === '0') {
            image.classList.remove('fade-out');
            image.style.display = 'flex';
        } else {
            const tags = image.getAttribute('data-tags').split(',').map(t => t.trim());
            if (!tags.includes(tag)) {
                image.classList.add('fade-out');
                setTimeout(() => image.style.display = 'none', 1000);
            } else {
                image.classList.remove('fade-out');
                image.style.display = 'flex'; 
            }
        }
    });
}