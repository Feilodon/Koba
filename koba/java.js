// окно бронирования
const openBookingButtons = document.querySelectorAll('.open-booking-btn');
const closeBookingBtn = document.getElementById('closeModalBtn');
const bookingModal = document.getElementById('modalOverlay');

openBookingButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (bookingModal) {
            bookingModal.classList.add('active');
        }
    });
});

if (closeBookingBtn && bookingModal) {
    closeBookingBtn.addEventListener('click', () => {
        bookingModal.classList.remove('active');
    });
}

if (bookingModal) {
    bookingModal.addEventListener('click', (event) => {
        if (event.target === bookingModal) {
            bookingModal.classList.remove('active');
        }
    });
}


// пдф файл меню
const openMenuButtons = document.querySelectorAll('.open-menu-btn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const menuModal = document.getElementById('menuModal');

openMenuButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); 
        
        if (menuModal) {
            menuModal.style.display = 'block';
        }
    });
});

if (closeMenuBtn && menuModal) {
    closeMenuBtn.addEventListener('click', () => {
        menuModal.style.display = 'none';
    });
}

window.addEventListener('click', (event) => {
    if (menuModal && event.target === menuModal) {
        menuModal.style.display = 'none';
    }
});
