// script.js
const contactButton = document.getElementById('contacto'); // Cambiado a 'contacto'
const contactFooter = document.getElementById('contacto-footer'); // Enlace de contacto en el footer

const popupContainer = document.getElementById('popup-container');
const gmailLink = document.getElementById('gmail-link');
const linkedinLink = document.getElementById('linkedin-link');

contactButton.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar que el enlace se comporte como un enlace normal
    popupContainer.style.display = 'block';
});

contactFooter.addEventListener('click', (e) => {
    e.preventDefault();
    popupContainer.style.display = 'block';
});

gmailLink.addEventListener('click', () => {
    window.location.href = 'mailto: javiercorrea9858@gmail.com';
});

linkedinLink.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/javier-stiven-correa-sua-b827b5254/', '_blank');
});

// script.js
const closeButton = document.getElementById('close-button');

closeButton.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});

//---------------------

const clickableImages = document.querySelectorAll('.image-clickable');

// Obtener el modal y sus elementos relacionados
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
const captionText = document.getElementById('caption');

// Agregar un evento de clic a cada imagen
clickableImages.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block'; // Mostrar el modal
        modalImg.src = image.src; // Establecer la imagen del modal
        captionText.innerHTML = image.alt; // Establecer la descripción del modal
    });
});

// Obtener el elemento "close" (cerrar) y agregar un evento de clic para cerrar el modal
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Ocultar el modal al hacer clic en "close"
});
