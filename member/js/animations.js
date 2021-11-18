window.sr = ScrollReveal()

sr.reveal(".navbar", {
    opacity: 0,
    delay: 200,
    duration: 1000
});

sr.reveal(".profile-section h1", {
    opacity: 0,
    delay: 200,
    duration: 1500
});

sr.reveal(".profile-section h2", {
    opacity: 0,
    delay: 500,
    duration: 500,
    origin: "bottom",
    distance: "50px",
    easing: 'linear'
});

sr.reveal(".profile-section img", {
    opacity: 0,
    delay: 700,
    duration: 500,
    origin: "bottom",
    distance: "100px",
    easing: 'linear'
});

sr.reveal(".profile-section .context", {
    opacity: 0,
    delay: 1000,
    duration: 1500
});