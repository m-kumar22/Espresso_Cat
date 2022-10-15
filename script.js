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


gsap.from("#section2 #s2up #s2one",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #s2up",
        start:"top 50%"
    },
    opacity:0,
    x:-80,
    duration:1.5
})
gsap.from("#section2 #s2up #s2two",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #s2up",
        start:"top 50%"
    },
    opacity:0,
    y:80,
    duration:1.5,
    delay:.5
})
gsap.from("#section2 #s2up #s2three",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #s2up",
        start:"top 50%"
    },
    opacity:0,
    x:80,
    duration:1.5
})
gsap.from("#section2 #s2down #s2four h1",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #s2down #s2four h1",
        start:"top 70%"
    },
    opacity:0,
    x:80,
    duration:1.5
})
gsap.from("#section2 #s2down #s2four h3",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #s2down #s2four h3",
        start:"top 70%"
    },
    opacity:0,
    x:80,
    duration:1.5,
    delay:.5
})
gsap.from("#section2 #s2down #s2four h2",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #s2down #s2four h2",
        start:"top 70%"
    },
    opacity:0,
    x:80,
    duration:1.5,
    delay:1
})
gsap.from("#section2 #s2down #s2five img",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section2 #s2down #s2five img",
        start:"top 60%"
    },
    opacity:0,
    x:-90,
    duration:1
})


gsap.from("#section3 h1",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section3 h1",
        start:"top 30%"
    },
    opacity:0,
    y:-40,
    duration:1.5
})
gsap.from("#section3 #s3box #s3bleft img",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section3 #s3box #s3bleft img",
        start:"top 51%"
    },
    opacity:0,
    x:-60,
    duration:1.5
})
gsap.from("#section3 #s3box #s3bright p",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section3 #s3box #s3bright p",
        start:"top 51%"
    },
    opacity:0,
    y:40,
    duration:1.5
})
gsap.from("#section3 #s3box #s3bright #s3btn",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section3 #s3box #s3bright #s3btn",
        start:"top 51%"
    },
    opacity:0,
    x:70,
    duration:1.5
})


gsap.from("#section4 img",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section3 #s3box #s3bright #s3btn",
        start:"top 50%"
    },
    opacity:0
})
gsap.from("#section4 h3",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section3 #s3box #s3bright #s3btn",
        start:"top 48%"
    },
    opacity:0,
    y:50,
    duration:1.5,
    delay:.5
})
gsap.from("#section4 p",{
    scrollTrigger:{
        scroller:"body",
        trigger:"#section3 #s3box #s3bright #s3btn",
        start:"top 45%"
    },
    opacity:0,
    y:50,
    duration:1.5,
    delay:1
})