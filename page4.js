gsap.from("#nav",{
    opacity:0,
    duration:1.5,
    y:-100
})
gsap.from("#square img",{
    opacity:0,
    duration:2,
    x:400
})
gsap.from("#s1box h1",{
    opacity:0,
    duration:1.5,
    x:-400
})
gsap.from("#s1box h3",{
    opacity:0,
    duration:2,
    delay:1,
    x:-400
})
gsap.from("#S1btn",{
    opacity:0,
    duration:2,
    delay:2,
    y:50
})



gsap.from("#section2 #first .small",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #first .small",
        start:"top 80%",
        // markers:true
    },
    ease:Expo.easeInOut,
    opacity:0,
    x:80,
    duration:2.5
})
gsap.from("#section2 #second .small",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #second .small",
        start:"top 80%",
        // markers:true
    },
    ease:Expo.easeInOut,
    opacity:0,
    x:-80,
    duration:2.5
})
gsap.from("#section2 #third .small",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #third .small",
        start:"top 80%",
        // markers:true
    },
    ease:Expo.easeInOut,
    opacity:0,
    x:80,
    duration:2.5
})

gsap.from("#section2 #first .big h1",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #first .big h1",
        start:"top 80%",
        // markers:true
    },
    opacity:0,
    y:80,
    duration:1.5
})
gsap.from("#section2 #first .big p",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #first .big p",
        start:"top 80%",
        // markers:true
    },
    opacity:0,
    y:80,
    duration:1.5
})
gsap.from("#section2 #second .big h1",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #second .big h1",
        start:"top 80%",
        // markers:true
    },
    opacity:0,
    y:80,
    duration:1.5
})
gsap.from("#section2 #second .big p",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #second .big p",
        start:"top 80%",
        // markers:true
    },
    opacity:0,
    y:80,
    duration:1.5
})
gsap.from("#section2 #third .big h1",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #third .big h1",
        start:"top 80%",
        // markers:true
    },
    opacity:0,
    y:80,
    duration:1.5
})
gsap.from("#section2 #third .big p",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #third .big p",
        start:"top 80%",
        // markers:true
    },
    opacity:0,
    y:80,
    duration:1.5
})





gsap.from("#section3 img",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #third .big p",
        start:"top 60%",
        // markers:true
    },
    opacity:0
})
gsap.from("#section3 h3",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #third .big p",
        start:"top 58%",
        // markers:true
    },
    opacity:0,
    y:50,
    duration:1.5,
    delay:.5
})
gsap.from("#section3 p",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #third .big p",
        start:"top 55%",
        // markers:true
    },
    opacity:0,
    y:50,
    duration:1.5,
    delay:1
})