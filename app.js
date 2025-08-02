document.addEventListener('DOMContentLoaded', () => {
    // Handle "Read More" buttons
    const buttons = document.querySelectorAll('button[data-target]');
    console.log('Read More buttons found:', buttons.length);
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const isHidden = targetElement.classList.contains('hidden');
                targetElement.classList.toggle('hidden', !isHidden);
                button.textContent = isHidden ? 'Read Less' : 'Read More';
            } else {
                console.error('Target element not found for ID:', targetId);
            }
        });
    });
});