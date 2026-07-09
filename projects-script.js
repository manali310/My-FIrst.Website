// મોડલ એલિમેન્ટ્સ સિલેક્ટ કર્યા
const modal = document.getElementById('projectModal');
const closeModalBtn = document.getElementById('closeModal');
const projectCards = document.querySelectorAll('.project-card');

const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTech = document.getElementById('modalTech');
const modalLink = document.getElementById('modalLink');

// દરેક કાર્ડ પર ક્લિક થાય ત્યારે મોડલ ખોલો
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        // HTML ડેટા એટ્રિબ્યુટ્સ માંથી વિગતો મેળવી
        const title = card.getAttribute('data-title');
        const desc = card.getAttribute('data-desc');
        const tech = card.getAttribute('data-tech');
        const link = card.getAttribute('data-link');

        // પૉપ-અપ બોક્સમાં લખાણ સેટ કર્યું
        modalTitle.innerText = title;
        modalDesc.innerText = desc;
        modalTech.innerText = tech;
        modalLink.setAttribute('href', link);

        // પૉપ-અપ બોક્સ બતાવો (Active ક્લાસ ઉમેર્યો)
        modal.classList.add('active');
    });
});

// ક્લોઝ (X) બટન પર ક્લિક કરવાથી પૉપ-અપ બંધ થાય
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// પૉપ-અપ બોક્સની બહાર ગમે ત્યાં ક્લિક કરવાથી પણ બંધ થાય
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});