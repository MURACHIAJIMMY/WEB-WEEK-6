// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Event Handling 🎈
    const morphButton = document.getElementById('morphButton');
    const keyDisplay = document.getElementById('keyDisplay');
    const secretBox = document.getElementById('secretBox');
    
    // Button click transformation
    let isRainbow = false;
    morphButton.addEventListener('click', () => {
        morphButton.style.backgroundColor = isRainbow 
            ? '#4CAF50' 
            : `hsl(${Math.random() * 360}deg, 100%, 50%)`;
        morphButton.textContent = isRainbow 
            ? 'Again! 🌈' 
            : 'Woah! Color!';
        isRainbow = !isRainbow;
    });

    // Keypress detection
    document.addEventListener('keydown', (e) => {
        keyDisplay.textContent = `You pressed: ${e.key.toUpperCase()} 🎹`;
    });

    // Secret double-click
    document.body.addEventListener('dblclick', () => {
        secretBox.classList.toggle('hidden');
        setTimeout(() => secretBox.classList.add('hidden'), 2000);
    });

    // Image Gallery 🖼️
    const spinButton = document.getElementById('spinButton');
    spinButton.addEventListener('click', () => {
        document.querySelectorAll('.hover-zoom').forEach(img => {
            img.classList.toggle('spin');
        });
    });

    // Form Validation 📋
    const form = document.getElementById('partyForm');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateField(input, validationFn) {
        const errorDiv = input.nextElementSibling;
        const isValid = validationFn(input.value);
        input.style.borderColor = isValid ? '#4CAF50' : '#ff4444';
        errorDiv.textContent = isValid ? '' : getErrorMessage(input);
        return isValid;
    }

    function getErrorMessage(input) {
        if (input.id === 'email') return 'Please enter a valid email 📧';
        if (input.id === 'password') return 'Password needs 8+ characters 🔒';
        return 'This field is required ✨';
    }

    // Real-time validation
    form.addEventListener('input', (e) => {
        const input = e.target;
        if (input.tagName === 'INPUT') {
            validateField(input, (value) => {
                if (input.id === 'email') return emailRegex.test(value);
                if (input.id === 'password') return value.length >= 8;
                return value.trim() !== '';
            });
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('🎉 Welcome to the party! 🎉');
        form.reset();
    });
});