let locoScroll;
function locoScroller() {

    gsap.registerPlugin(ScrollTrigger);

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
        pinType: document.querySelector(".container").style.transform
            ? "transform"
            : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
locoScroller();

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

function seciontwoAnimations() {

    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: ".container",
            start: "top 80%",
            end: "top 0%",
        }
    });

    t2.from(".titleArea h1", {
        y: 50,
        opacity: 0,
        duration: 1
    }, "same2");

    t2.from(".paragraphArea p", {
        y: 120,
        stagger: 0.2,
        opacity: 0,
        duration: 1.5,
    });

    t2.from(".pic4", {
        y: 50,
        opacity: 0,
        duration: 0.5,
    }, "same2")

}
seciontwoAnimations()

function sectionthreeAnimations() {
    var t3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section3",
            scroller: ".container",
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
            scroller: ".container",
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

function sectionFifthAnimation() {
    var t5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section5",
            scroller: ".container",
            start: "top 70%",
            end: "top 0",
            scrub: 2,
        }
    })

    t5.from(".videoSection video", {
        y: 70,
        opacity: 0,
        duration: 0.8,
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
    var t6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section7",
            scoller: ".container",
            start: "top 50%",
            end: "top 0",
            // scrub: 2,
        }
    })

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
reachAtSections()
