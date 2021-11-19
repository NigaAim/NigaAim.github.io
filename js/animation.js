window.sr = ScrollReveal()

sr.reveal(".navbar", {
    delay: 200,
    opacity: 0,
    durration: 1500
});

sr.reveal(".top-section", {
    delay: 1000,
    opacity: 0,
    duration: 3000
});

sr.reveal(".about-section h1", {
    delay: 200,
    opacity: 0,
    duration: 2000
});

sr.reveal(".about-section h2", {
    delay: 200,
    opacity: 0,
    duration: 2000
});

sr.reveal(".about-section .context", {
    delay: 200,
    opacity: 0,
    duration: 2000
});

sr.reveal(".member-section h1", {
    delay: 200,
    opacity: 0,
    duration: 2000
});

sr.reveal(".member-section h2", {
    delay: 200,
    opacity: 0,
    duration: 2000
});

sr.reveal(".member-section ul li", {
    delay: 200,
    opacity: 0,
    origin: "bottom",
    distance: "100px",
    duration: 1000
});

sr.reveal(".member-section ul li#button", {
    delay: 600,
    opacity: 0,
    duration: 1500,
    distance: "0px"
});

sr.reveal(".member-section a", {
    delay: 200,
    opacity: 0,
    duration: 1000
});

sr.reveal(".contact-section h1", {
    delay:200,
    opacity: 0,
    duration: 1000
});

sr.reveal(".contact-section h2", {
    delay:200,
    opacity: 0,
    duration: 1000
});

sr.reveal(".contact-section ul li a", {
    delay:200,
    opacity: 0,
    duration: 1000
});

/*
function noScroll(event) {
    event.preventDefault();
}

function lockScroll() {
    // スクロール禁止(SP)
    document.addEventListener('touchmove', noScroll, { passive: false });
    // スクロール禁止(PC)
    document.addEventListener('mousewheel', noScroll, { passive: false });
}

function unlockScroll() {
    // スクロール禁止を解除(SP)
    document.removeEventListener('touchmove', noScroll, { passive: false });
    // スクロール禁止を解除(PC)
    document.removeEventListener('mousewheel', noScroll, { passive: false });
}

window.scrollTo(0, 0);
lockScroll();
setTimeout(function() {
    unlockScroll();
}, 2000);
*/