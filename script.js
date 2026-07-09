// Selecting DOM elements
const greetBtn = document.getElementById('greet-btn');
const secretMessage = document.getElementById('secret-message');

// Adding click event listener to the button
greetBtn.addEventListener('click', () => {
    // Toggle the secret greeting message visibility
    if (secretMessage.classList.contains('hidden')) {
        secretMessage.classList.remove('hidden');
        greetBtn.innerHTML = 'Thank You! <i class="fas fa-heart"></i>';
        greetBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)'; // Shifts to vibrant green
    } else {
        secretMessage.classList.add('hidden');
        greetBtn.innerHTML = 'Meet Me <i class="fas fa-hand-sparkles"></i>';
        greetBtn.style.background = 'linear-gradient(135deg, #6366f1, #4f46e5)'; // Resets to original blue gradient
    }
});
