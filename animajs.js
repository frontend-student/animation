// gsap.from("h1",{

// y: 50,
// duration:1.5,
// color: "red",
// opacity: 0,
// iterationCount:"infinite",
// })

// gsap.to(".red",{
// x: 1000,
// duration:1.5,
// deley : 3,
// //   iterationCount:"infinite",
//   backgoundColor:"blue",
//  borderRadius :"50%",
// rotate:360,

// })

// gsap.from("h1",{
// y: 100,
// duration:1,
// deley:0,
// stagger:1,
//   opacity:0 ,
// color:"red"

// })

// gsap.to(".red",{
//   x: 1000,
//   duration:1,
//   deley : 1,
//   backgoundColor:"blue",
//  rotate:360,
//   borderRadius :"50%",
// repeat:-1,
//   yoyo:true,

// })

// let ls = gsap.timeline();

// ls.to(".red",{
// x:1000,
// duration:1.5,
// })
// ls.to(".red2",{
// x:1000,
// duration:1.5,
// // repeat:-1
// })
// ls.to(".red3",{
// x:1000,
// duration:1.5,
// })

// let tl = gsap.timeline()

// tl.from("h1", {
// y:-50,
// duration:1,
// opacity:0,
// })

// tl.from("h4", {
//   y:-50,
//   opacity:0,
// duration:1,
// stagger:0.5

// })

// tl.from("h3", {
// y:50,
// duration:1,
// opacity:0,
// scale:0.5,
// })

gsap.from(".pare1 .box", {
  scale: 0,
  duration: 1.2,
  delay: 1,
});
gsap.from(".pare2 .box", {
  scale: 0,
  duration: 1.2,
  delay: 0,
  scrollTrigger:".pare2 .box"
});
// gsap.from(".pare1 .box", {
//   scale: 0,
//   duration: 1.2,
//   delay: 1,
// });



// gsap.from(".pare3 h1",{

//   right:500,
// duration: 1.2,
// opacity: 0,
// scrollTrigger:{
//   trigger: ".pare3 h1",
//   scroll:"body",
//   scrub:2
// },
// })
// gsap.from(".pare3 h2",{
//   x:500,
// duration: 1.2,
// opacity: 0,
// scrollTrigger:{
// trigger: ".pare3 h2",
// scroll:"body",
// scrub:2,
// pin:true
// },
// })


gsap.to(".pare4 h2",{
transform: "translateX(-150%)",
scrollTrigger:{
tigger:".pare4",
scroller:"body",
scrub:2,
pin:true,

}

})











