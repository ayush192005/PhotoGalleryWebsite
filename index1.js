function locoScroller(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".container"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".container", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoScroller()

function followcursor() {
    var pageContent = document.querySelector(".container");
    var cursor = document.querySelector(".cursor");
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

        })
    })

    // pageContent.addEventListener("mouseleave", function () {
    //     gsap.to(cursor, {
    //         opacity: 0,
    //         scale: 0,
    //     })
    // })
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
            trigger: ".container",
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
        y: 120,
        stagger: 0.2,
        opacity: 0,
        duration: 1.5,
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
            trigger: ".container",
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
            trigger: ".container",
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
            trigger: ".container",
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
            trigger: ".container",
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

