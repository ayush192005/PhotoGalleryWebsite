let locoScroll = null;

function locomotive() {

    gsap.registerPlugin(ScrollTrigger);

    // Remove old Locomotive instance if it exists
    if (locoScroll) {
        locoScroll.destroy();
        locoScroll = null;
    }

    // Remove old ScrollTrigger proxy
    ScrollTrigger.clearScrollMemory();

    // Desktop only
    if (window.innerWidth > 768) {

        locoScroll = new LocomotiveScroll({
            el: document.querySelector(".container"),
            smooth: true
        });

        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(".container", {
            scrollTop(value) {
                return arguments.length
                    ? locoScroll.scrollTo(value, 0, 0)
                    : locoScroll.scroll.instance.scroll.y;
            },

            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            },

            pinType: "transform"
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    }

    ScrollTrigger.refresh();
}

locomotive();

window.addEventListener("resize", () => {
    clearTimeout(window.resizeTimer);

    window.resizeTimer = setTimeout(() => {
        locomotive();
    }, 300);
});

function loader() {
    var tone = gsap.timeline();

    tone.from(".loader span", {
        x: 40,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
    })

    tone.to(".loader span", {
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,

    })

    tone.to(".loader", {
        opacity: 0,
        display: "none"
    })
}
loader();

function followcursor() {
    var pageContent = document.querySelector(".container");
    var cursor = document.querySelector(".cursor");
    var nav = document.querySelector("nav");

    pageContent.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })

    pageContent.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            overwrite: "auto",

        })
    })

    pageContent.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            opacity: 0,
            scale: 0,
        })
    })

    nav.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            opacity: 0,
            scale: 0,
        })
    })
    nav.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            opacity: 1,
            scale: 1,
        })
    })
}
followcursor()

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
    }, "msg")
    tl.from(".msg2", {
        x: 30,
        opacity: 0,
        duration: 0.8,
    }, "msg")

    tl.from(".pic2", {
        y: 200,
        opacity: 0,
        duration: 1,
    }, "same")

    tl.from(".title", {
        y: 40,
        opacity: 0,
        duration: 2,
    }, "same")
}
homePageAnimation()


function sectionTwoAnimations() {
    const t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: ".container",
            start: "top 30%",
            end: "top 0%",
        }
    });

    t2.from(".titleArea h1", {
        x: -50,
        opacity: 0,
        duration: 1.4,
    }, "sam");

    t2.from(".paragraphArea span", {
        y: 80,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
    });

    t2.from(".pic4", {
        x: -30,
        opacity: 0,
        duration: 0.5,
    }, "sam")
}
sectionTwoAnimations();

function sectionthreeAnimations() {
    var t3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section3",
            scroller: ".container",
            start: "top 50%",
            end: "top 0",
            invalidateOnRefresh: true,
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
            scroller: ".container",
            start: "top 50%",
            end: "top 0",
            scrub: 2,
            invalidateOnRefresh: true,
        }
    })

    t4.from(".passage1 p", {
   x: () => window.innerWidth < 768 ? -100 : -600,
        opacity: 0,
        duration: 0.8,
    }, "para1")

    t4.from(".upperDeckImage img", {
        x: 60,
        opacity: 0,
        duration: 0.8,
    }, "img1")

    t4.from(".passage2 p", {
        x: () => window.innerWidth < 768 ? 100 : 600,
        opacity: 0,
        duration: 0.8,
    }, "para1")

    t4.from(".lowerDeckImage img", {
        x: -60,
        opacity: 0,
        duration: 0.8,
    }, "img1")

}
setionfourAnimations()

function sectionFifthAnimation() {
    var t5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section5",
            scroller: ".container",
            start: "top 70%",
            end: "top 0",
            scrub: 2,
            invalidateOnRefresh: true
        }
    })

    const rowRight = document.querySelector(".rowRight");

    gsap.to(rowRight, {
        x: () => -(rowRight.scrollWidth / 2),
        duration: 20,
        ease: "none",
        repeat: -1
    });

    const rowLeft = document.querySelector(".rowLeft");

    gsap.fromTo(
        rowLeft,
        {
            x: -(rowLeft.scrollWidth / 2)
        },
        {
            x: 0,
            duration: 20,
            ease: "none",
            repeat: -1
        }
    );
}
sectionFifthAnimation()

function sectionsixthAnimation() {
    var t5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section6",
            scroller: ".container",
            start: "top 70%",
            end: "top 0",
            scrub: 2,
            invalidateOnRefresh: true,
        }
    })

    t5.from(".passage3", {
        y: 300,
        opacity: 0,
        duration: 1.5,
    })

    t5.from(".box", {
        y: 80,
        opacity: 0,
        stagger: 0.90,
        duration: 1
    });
}
sectionsixthAnimation()

function sectionseventhAnimation() {
    var swiper = new Swiper('.mySwiper', {
        effect: 'cards',
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });
}
sectionseventhAnimation();

function reachAtSections() {
    document.querySelector("#galleryBtn").addEventListener("click", function (e) {
        e.preventDefault();
        locoScroll.scrollTo("#gallery");
    });
}
reachAtSections();
