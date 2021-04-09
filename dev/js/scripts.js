import { gsap } from "gsap";
import $ from jquery;

gsap.to("#blue-rectangle", { duration: 3, x: 200, ease: 'elastic', backgroundColor: 'red', width: 250});
gsap.from("#blue-rectangle", { duration: 5, x: 1000, y:70, rotate:1200});