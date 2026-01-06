// 1. LOADER
window.addEventListener('load', () => {
    requestAnimationFrame(() => {
        setTimeout(() => {
            const loader = document.getElementById('loader');
            if (loader) {
                loader.classList.add('opacity-0'); 
                // Quitamos el bloqueo de scroll
                document.body.classList.remove('loader-active');
                // Eliminamos del DOM después de la transición
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }
        }, 300);
    });
});

// 2. PROTECCIÓN DE IMÁGENES (WebP)
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault(); // Bloquea clic derecho
    }
}, false);

document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault(); // Bloquea arrastrar imagen
    }
}, false);

// 3. LIGHTBOX CON NAVEGACIÓN
const lightboxImg = document.getElementById("lightbox-img");
const galleryImgs = Array.from(document.querySelectorAll("#gallery img"));
let currentIndex = 0;

galleryImgs.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryImgs.length) % galleryImgs.length;
    lightboxImg.src = galleryImgs[currentIndex].src;
    lightboxImg.alt = galleryImgs[currentIndex].alt;
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryImgs.length;
    lightboxImg.src = galleryImgs[currentIndex].src;
    lightboxImg.alt = galleryImgs[currentIndex].alt;
});