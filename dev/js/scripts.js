// import { gsap } from "gsap";



// gsap.to("#red-circle", { duration: 3, x: 350});
// gsap.to("#red-circle", { duration: 3, x: 700, rotate: 720, scale: 3, delay:1});
// gsap.to("#red-circle", { duration: 3, x: 200, ease: 'elastic', width: 500, delay:1});
// gsap.to("#red-circle", { duration: 3, x: 500, scale: -3, width:30, delay:3});
// gsap.to("#red-circle", { duration: 2, x: 30, rotate: 90, delay:6});
// gsap.to("#red-circle", { duration: 5, x: 2000, delay:8});
// gsap.to("#red-circle", { duration: 5, x: -150, delay:10});
// gsap.to("#red-circle", { duration: 2, x: -150, rotate: 180, delay:12});


import { gsap } from "gsap";
import $ from jsquery;

let shapeTL = gsap.timeline({paused:true});

shapeTL.to("#red-circle", { duration: 3, x: 350});
    .to("#red-circle", { duration: 3, x: 700, rotate: 720, scale: 3, delay:1});
.to("#red-circle", { duration: 3, x: 200, ease: 'elastic', width: 500, delay:1});
.to("#red-circle", { duration: 3, x: 500, scale: -3, width:30, delay:3});
.to("#red-circle", { duration: 2, x: 30, rotate: 90, delay:6});
.to("#red-circle", { duration: 5, x: 2000, delay:8});
.to("#red-circle", { duration: 5, x: -150, delay:10});
.to("#red-circle", { duration: 2, x: -150, rotate: 180, delay:12});

$("#red-circle").on("click",function(){
    shapeTL.play();
})