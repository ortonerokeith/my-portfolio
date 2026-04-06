/* =========================
   GALLERY FILTER
========================= */

function filterGallery(category) {
    let items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        if (category === 'all') {
            item.style.display = "block";
        } else {
            if (item.classList.contains(category)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        }
    });
}

/* =========================
   LIGHTBOX OPEN
========================= */

function openLightbox(img) {
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
}

/* =========================
   LIGHTBOX CLOSE
========================= */

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

/* =========================
   CLOSE LIGHTBOX ON ESC KEY
========================= */

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});

/* =========================
   OPTIONAL: CLOSE WHEN CLICKING OUTSIDE IMAGE
========================= */

document.addEventListener("click", function(event) {
    let lightbox = document.getElementById("lightbox");

    if (event.target === lightbox) {
        closeLightbox();
    }
});

