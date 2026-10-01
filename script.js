/* =========================
   MUSIC
========================= */

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");

function musicToggle() {

    if (music.paused) {

        music.play();

        musicButton.innerHTML = "🔊";

    } else {

        music.pause();

        musicButton.innerHTML = "🎵";

    }

}


/* =========================
   OPEN WEBSITE
========================= */

function openWebsite() {

    const opening =
        document.getElementById("opening");

    const main =
        document.getElementById("main");

    opening.style.display = "none";

    main.classList.remove("hidden");

    music.play()
        .then(() => {
            musicButton.innerHTML = "🔊";
        })
        .catch(() => {});

    createParticles();

}


/* =========================
   SCROLL
========================= */

function scrollToSection(id) {

    document
        .getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   COUNTDOWN
========================= */

/*
    GANTI TANGGAL ULANG TAHUN
*/

const birthday =
    new Date("2026-10-02T00:00:00")
    .getTime();


function countdown() {

    const now =
        new Date().getTime();

    const distance =
        birthday - now;


    if (distance <= 0) {

        document.getElementById("days")
            .innerHTML = "00";

        document.getElementById("hours")
            .innerHTML = "00";

        document.getElementById("minutes")
            .innerHTML = "00";

        document.getElementById("seconds")
            .innerHTML = "00";

        return;
    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
            (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
            (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
            (1000 * 60))
            /
            1000
        );


    document.getElementById("days")
        .innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours")
        .innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes")
        .innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds")
        .innerHTML =
        String(seconds).padStart(2, "0");

}


setInterval(countdown, 1000);

countdown();


/* =========================
   LETTER
========================= */

function openLetter() {
    const envelope = document.getElementById("envelope");

    envelope.classList.toggle("open");
}


/* =========================
   CAKE
========================= */

const cake =
    document.querySelector(".cake");

cake.addEventListener("click", function() {

    const fire =
        document.querySelector(".fire");

    fire.style.display = "none";

    createParticles();

});


/* =========================
   PARTICLES
========================= */

function createParticles() {

    const symbols = [
        "🎉",
        "🎈",
        "✨",
        "💖",
        "⭐",
        "🎊"
    ];


    for (let i = 0; i < 80; i++) {

        const particle =
            document.createElement("div");

        particle.className =
            "particle";

        particle.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.left =
            Math.random() * 100 + "vw";


        particle.style.animationDuration =
            (2 + Math.random() * 4) + "s";


        particle.style.animationDelay =
            Math.random() + "s";


        document.body.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 6000);

    }

}


/* =========================
   AUTO FLOATING EFFECT
========================= */

setInterval(() => {

    const symbols = [
        "♡",
        "♥",
        "✨"
    ];

    const particle =
        document.createElement("div");

    particle.className =
        "particle";

    particle.innerHTML =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.animationDuration =
        "5s";

    document.body.appendChild(
        particle
    );

    setTimeout(() => {

        particle.remove();

    }, 5000);

}, 1500);