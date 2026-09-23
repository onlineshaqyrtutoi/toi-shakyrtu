// 1. АНИМАЦИЯЛАНҒАН КОНВЕРТТІ АШУ ЖӘНЕ МУЗЫКА
function openInvitation() {
    const overlay = document.getElementById("envelopeOverlay");
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
    
    // Музыканы қосу
    toggleMusic();
}

// 2. МУЗЫКА ЛОГИКАСЫ
let isPlaying = false;
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");
    
    if (isPlaying) {
        music.pause();
        btn.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        music.play().catch(() => {});
        btn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
}

// 3. ГҮЛ КҮЛТЕЛЕРІН (PETALS) ЖАУДЫРУ
function createPetals() {
    const container = document.getElementById("petalContainer");
    for (let i = 0; i < 25; i++) {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = Math.random() * 3 + 4 + "s";
        petal.style.width = Math.random() * 10 + 10 + "px";
        petal.style.height = petal.style.width;
        container.appendChild(petal);
    }
}
createPetals();

// 4. ТАЙМЕР
const eventDate = new Date("November 25, 2026 18:00:00").getTime();
setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance > 0) {
        document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
    }
}, 1000);

// 5. SCROLL АНИМАЦИЯСЫ (FADE-IN EFFECT)
window.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 50) {
            el.classList.add("visible");
        }
    });
});

// 6. WHATSAPP RSVP
document.getElementById("rsvpForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("guestName").value;
    const status = document.getElementById("attendance").value;
    const phone = "77001234567"; // Клиенттің номері
    
    const message = `Сәлеметсіз бе! Менің атым: ${name}. Тойға байланысты жауабым: ${status}`;
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`, '_blank');
});
