// HTML load hone ka wait karega
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. HAMBURGER MENU WALA CODE
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if(menuBtn && navLinks) {
        menuBtn.addEventListener("click", function() {
            navLinks.classList.toggle("show-mobile-menu");
        });
    }

    // 2. LIVE CLOCK (TIME) WALA CODE
    function updateTime() {
        const timeElement = document.querySelector('.timestamp');
        
        if (timeElement) {
            const now = new Date();
            
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            let ampm = hours >= 12 ? 'PM' : 'AM';
            
            // 12-hour format mein badalna
            hours = hours % 12;
            hours = hours ? hours : 12; // Agar 0 baje hain toh 12 dikhaye
            
            // Agar minute ya second 10 se kam hain toh aage ek '0' laga de (jaise 09)
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            
            // Time ko ek sath jod kar likhna
            const timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
            
            // HTML mein time update karna
            timeElement.textContent = timeString;
        }
    }

    // Har 1 second (1000 milliseconds) baad time ko update karo
    setInterval(updateTime, 1000);
    
    // Page load hote hi turant sahi time dikhane ke liye ek baar function call karna
    updateTime();
    // 3. LOGOS SCROLL (MARQUEE) WALA CODE
    const logosContainer = document.querySelector('.toolkit-logos');
    if (logosContainer) {
        // Logos ki list ko double kar rahe hain taaki scroll kabhi khatam na ho
        logosContainer.innerHTML += logosContainer.innerHTML;
    }
});