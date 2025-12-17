let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});

document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent normal form submission

    // Get form values
    var name = encodeURIComponent(this.name.value);
    var email = encodeURIComponent(this.email.value);
    var number = encodeURIComponent(this.number.value);
    var message = encodeURIComponent(this.message.value);

    // WhatsApp number of the owner (use full international format, e.g., 917020303975)
    var whatsappNumber = "917020303975";

    // Create WhatsApp message
    var whatsappMessage = `Hello, my name is ${name}. Email: ${email}, Phone: ${number}. Message: ${message}`;

    // Open WhatsApp chat
    var whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank"); // open in new tab
});
