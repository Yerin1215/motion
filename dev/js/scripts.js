import { gsap } from "gsap";
import $ from jquery;

let shapeTL = gsap.timeline({});

shapeTL.from("#blue-rectangle", {duration: 1, x: -200, ease: 'elastic', backgroundColor: 'red', width: 250}, "moveShapes")
    .to("#blue-rectangle", {duration: 1, x: 150});

    $("#blue-rectangle").on("click",function(){
        shapeTL.play();
    })
    