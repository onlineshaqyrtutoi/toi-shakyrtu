// 1. ТАЙМЕР ЛОГИКАСЫ (Той күнін осы жерден өзгертесіз)
const eventDate = new Date("October 25, 2026 18:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".timer").innerHTML = "ТОЙ БАСТАЛДЫ!";
        return;
    }

    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

// 2. МУЗЫКА ҚОСУ / ӨШІРУ
let isPlaying = false;
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");
    
    if (isPlaying) {
        music.pause();
        btn.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        music.play();
        btn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
}

// 3. WHATSAPP-ҚА ХАБАРЛАМА ЖІБЕРУ
document.getElementById("rsvpForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("guestName").value;
    const status = document.getElementById("attendance").value;
    
    // Клиенттің (Той иесінің) WhatsApp номері (8-сіз, 7-ден бастап)
    const phone = "77001234567"; 
    
    const message = `Сәлеметсіз бе! Менің атым: ${name}. Тойға байланысты жауабым: ${status}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
});
