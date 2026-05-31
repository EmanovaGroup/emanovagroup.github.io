/* ==========================
LOADER
========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
        document.getElementById("loader");

        if(loader){

            loader.classList.add("hide");

        }

    }, 1500);

});


/* ==========================
NAVBAR SCROLL
========================== */

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(!navbar) return;

    if(window.scrollY > 100){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});


/* ==========================
COUNTERS
========================== */

const counters =
document.querySelectorAll(".counter");

const runCounter = (counter) => {

    const target =
    parseInt(counter.dataset.target);

    const speed = 100;

    const update = () => {

        const count =
        parseInt(counter.innerText);

        const increment =
        Math.ceil(target / speed);

        if(count < target){

            counter.innerText =
            count + increment;

            setTimeout(update, 20);

        }else{

            counter.innerText =
            target + "+";

        }

    };

    update();

};

const counterSection =
document.querySelector(".counter-section");

let counterStarted = false;

window.addEventListener("scroll", () => {

    if(!counterSection) return;

    const sectionTop =
    counterSection.getBoundingClientRect().top;

    const triggerPoint =
    window.innerHeight - 150;

    if(sectionTop < triggerPoint &&
    !counterStarted){

        counters.forEach(counter => {

            runCounter(counter);

        });

        counterStarted = true;
    }

});


/* ==========================
REVEAL ANIMATION
========================== */

const reveals =
document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach((section) => {

        const sectionTop =
        section.getBoundingClientRect().top;

        const trigger =
        window.innerHeight - 100;

        if(sectionTop < trigger){

            section.classList.add("active");

        }

    });

}

window.addEventListener(
"scroll",
revealSections
);

window.addEventListener(
"load",
revealSections
);


/* ==========================
SMOOTH NAV LINKS
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
    "click",
    function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================
PARALLAX HERO
========================== */

window.addEventListener("scroll", () => {

    const hero =
    document.querySelector(".hero");

    if(!hero) return;

    let offset =
    window.pageYOffset;

    hero.style.backgroundPositionY =
    offset * 0.5 + "px";

});


/* ==========================
PROJECT CARD HOVER EFFECT
========================== */

const cards =
document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px)";

    });

});


/* ==========================
CONSOLE MESSAGE
========================== */

console.log(
"%cEMANOVA GROUP",
"color:#D4AF37;font-size:20px;font-weight:bold;"
);

console.log(
"Modern Gücün Estetiği"
);
