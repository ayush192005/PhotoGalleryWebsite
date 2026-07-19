// Navigation-Animation

function homePageAnimation() {
    var tl = gsap.timeline();

    tl.from(".logo, .navs h4", {
        y: -300,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        stagger: 0.15,
    })

    tl.from(".img1", {
        x: -200,
        opacity: 0,
        duration: 1,
    }, "anim1")

    tl.from(".img2", {
        x: 200,
        opacity: 0,
        duration: 1,
    }, "anim1")

    tl.from(".msg1", {
        x: -30,
        opacity: 0,
        duration: 0.8,
    })
    tl.from(".msg2", {
        x: 30,
        opacity: 0,
        duration: 0.8,
    })

    tl.from(".pic2", {
        y: 200,
        opacity: 0,
        duration: 1,
    })

    tl.from(".title", {
        y: 40,
        opacity: 0,
        duration: 1.5,
    })
}
homePageAnimation()

function seciontwoAnimations() {
    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            start: "top 70%",
            end: "top 0%",
        }
    });

    t2.from(".titleArea h1", {
        x: -30,
        opacity: 0,
        duration: 1
    });

    t2.from(".paragraphArea p", {
        y: -100,
        opacity: 0,
        duration: 1.5,
        ease: "expoScale(0.5,7,none)",
    });

    t2.from(".pic4", {
        y: -50,
        opacity: 0,
        duration: 1
    })

}
seciontwoAnimations()

function sectionthreeAnimations() {
    var t3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section3",
            start: "top 50%",
            end: "top 0",
            scrub: 2,
        }
    })

    t3.from(".page3Heading h1", {
        y: 50,
        opacity: 0,
        duration: 2.5,
    })

    t3.from(".card1, .card2", {
        y: 100,
        opacity: 0,
        duration: 1,
    })

}
sectionthreeAnimations()

function setionfourAnimations() {
    var t4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section4",
            start: "top 50%",
            end: "top 0",
            scrub: 2,
        }
    })

    t4.from(".passage1 p", {
        x: -200,
        opacity: 0,
        duration: 0.8,
    }, "para1")

    t4.from(".upperDeckImage img", {
        x: 200,
        opacity: 0,
        duration: 0.8,
    }, "img1")

    t4.from(".passage2 p", {
        x: 200,
        opacity: 0,
        duration: 0.8,
    }, "para1")

    t4.from(".lowerDeckImage img", {
        x: -200,
        opacity: 0,
        duration: 0.8,
    }, "img1")

}
setionfourAnimations()

function sectionfifthAnimation() {
    var t5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section6",
            start: "top 50%",
            end: "top 0",
            scrub: 2,
        }

    })

    t5.from(".passage3 p", {
        y: 200,
        opacity: 0,
        duration: 0.8,
    })

    t5.from(".box1", {
        x: -40,
        opacity: 0,
        duration: 40,
    })

    t5.from(".box2", {
        x: 40,
        opacity: 0,
        duration: 40,
    })

    t5.from(".box3", {
        x: 40,
        opacity: 0,
        duration: 40,
    })

    t5.from(".box4", {
        x: -40,
        opacity: 0,
        duration: 40,
    })

    t5.from(".squarefifth", {
        x: 40,
        opacity: 0,
        duration: 40,
    })

    t5.from(".circle1", {
        x: 40,
        opacity: 0,
        duration: 40,
    })

    t5.from(".box6", {
        x: -40,
        opacity: 0,
        duration: 40,
    })

    t5.from(".box7", {
        x: 40,
        opacity: 0,
        duration: 40,
    })

    t5.from(".box8", {
        x: 40,
        opacity: 0,
        duration: 40,
    })
}
sectionfifthAnimation()

function sectionseventhAnimation() {
    var t6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section7",
            start: "top 10%",
            end: "top 0",
            // scrub: 2,
        }
    })

    t6.from(".title3 h1", {
        y: 200,
        opacity: 0,
        duration: 0.5,
    })

    t6.from(".slidingCards", {
        y: 200,
        opacity: 0,
        duration: 1,
    })

}
sectionseventhAnimation();

function sectioneightAnimation() {
    function breakTheText() {
        var h1 = document.querySelector(".containerBox8 h1");
        var h1Text = h1.textContent;
        var splittedText = h1Text.split("");
        var halfValue = Math.ceil(splittedText.length / 2);
        var clutter = "";

        splittedText.forEach(function (elem, idx) {
            if (idx < halfValue) {
                clutter += `<span class="a">${elem}</span>`;
            } else {
                clutter += `<span class="b">${elem}</span>`;
            }
        });

        h1.innerHTML = clutter;
    }

    breakTheText();

    gsap.set(".containerBox8 h1 span", {
        display: "inline-block"
    });

    var t8 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section8",
            start: "top 60%",
            end: "top 20%",
            scrub: 2,
        }
    });

    t8.from(".containerBox8 h1 .a", {
        y: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.05
    })

        .from(".containerBox8 h1 .b", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.05
        }, "<");


    gsap.to(".slidingCards", {
        x: "-50%",
        duration: 20,
        ease: "none",
        repeat: Infinity
    });

}
sectioneightAnimation();
