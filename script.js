/**
 * Untuk mengelola modal sertifikat, memungkinkan pengguna melihat gambar sertifikat dalam tampilan yang lebih besar
 * dan fungsionalitas zoom sederhana.
 */

const sertifikatModal = document.getElementById("sertifikatModal");
const sertifikatModalImg = document.getElementById("sertifikatModalImg");
const closeBtn = document.querySelector(".close-btn");

/**
 * Membuka modal sertifikat.
 * @param {string} imagePath - Path ke gambar sertifikat yang akan ditampilkan.
 */
function openSertifikatModal(imagePath) {
    sertifikatModal.style.display = "block";
    sertifikatModalImg.src = imagePath;
    sertifikatModalImg.classList.remove('zoomed'); // Pastikan tidak ada zoom saat dibuka
}

/**
 * Menutup modal sertifikat.
 */
function closeSertifikatModal() {
    sertifikatModal.style.display = "none";
}

/**
 * Mengganti keadaan zoom gambar sertifikat.
 * @param {HTMLImageElement} imgElement - Elemen gambar yang akan dizoom.
 */
function zoomSertifikatImg(imgElement) {
    imgElement.classList.toggle('zoomed');
}

// Menutup modal saat mengklik di luar gambar
window.onclick = function(event) {
    if (event.target == sertifikatModal) {
        closeSertifikatModal();
    }
}

// Tambahkan event listener ke tombol tutup (meskipun sudah ada di HTML)
if (closeBtn) {
    closeBtn.addEventListener('click', closeSertifikatModal);
}

/**
 * Inisialisasi Vanilla-Tilt untuk efek hover pada elemen tertentu.
 * Digunakan pada elemen project atau sertifikasi untuk sentuhan visual.
 */
function initTiltEffect() {
    // Terapkan Vanilla Tilt pada elemen sertifikasi atau project (opsional, sesuaikan selector)
    const tiltElements = document.querySelectorAll('.content-card, .service-item');
    if (tiltElements.length > 0 && typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(tiltElements, {
            max: 5,
            speed: 400,
            glare: true,
            'max-glare': 0.1,
        });
    }
}

/**
 * Fungsi untuk menginisialisasi partikel latar belakang (jika library tsparticles dimuat).
 * Ini opsional dan bisa dihilangkan jika tidak ingin menggunakan efek partikel.
 */
async function loadParticles() {
    if (typeof tsParticles !== 'undefined') {
        await tsParticles.load("tsparticles", {
            // Konfigurasi Partikel Dasar (Contoh)
            background: {
                color: {
                    value: "transparent", // Latar belakang transparan, agar latar belakang body tetap terlihat
                },
            },
            fullScreen: {
                enable: false, // Jangan ambil seluruh layar, agar tidak menutupi konten
                zIndex: 1,
            },
            particles: {
                number: {
                    value: 40,
                },
                color: {
                    value: "#ffc873", // Warna Vegas Gold
                },
                shape: {
                    type: "circle",
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                    },
                },
                size: {
                    value: 3,
                    random: true,
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                },
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse",
                    },
                    onclick: {
                        enable: true,
                        mode: "push",
                    },
                },
            },
            retina_detect: true,
        });
    }
}

// Panggil fungsi inisialisasi setelah DOM dimuat
document.addEventListener('DOMContentLoaded', () => {
    // loadParticles(); // Aktifkan jika ingin menggunakan efek partikel
    initTiltEffect();
});