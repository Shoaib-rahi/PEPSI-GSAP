var timel=gsap.timeline(
  {
    scrollTrigger:{
      trigger:".two",
      start:"0% 95%",
      end:"70% 50%",
      scrub:true,
      // markers:true,
      
    }
  }
);
timel.to(
  "#fanta",
  {
    
    top:"110%",
    left:"10%"
  },'slice'
);
timel.to(
  ".slice",{

  
  top:"150%",
  left:"20%"
  }
  ,'slice'
);
timel.to(
  "#oranges",{

  rotate:"360deg",
  top:"160%",
  right:"10%"
  }
  ,'slice'
);
timel.to(
  "#leaf2",{
 scale:1,
  rotate:"200deg",
  top:"110%",
  left:"80%"
  }
  ,'slice'
);
timel.to(
  "#leaf1",{

  scale:1,
  rotate:"300deg",
  top:"130%",
  left:"0%"
  }
  ,'slice'
)
var timel2=gsap.timeline(
  {
    scrollTrigger:{
      trigger:".three",
      start:"0% 95%",
      end:"20% 50%",
      scrub:true,
      // markers:true,
      
    }
  }
);
timel2.from("#slice-cut",{
  rotate:"-90deg",
  top:"110%",
  left:"-50%",
});
timel2.to(
  "#fanta",
  {
    
    top:"210%",
    left:"40%"
  },'fanta'
);
timel2.to(
  ".slice2",
  {
    top:"200%",
    left:"40%"
  }
  ,'fanta'
)


gsap.to(".four h1",
  {
    transform:"translateX(-100%)",
   scrollTrigger:{
    trigger:".four",
    scroller:"body",
    start:"top 0%",
    end:"top -180%",
    scrub:3,
 
    pin:true


   }
  }
)