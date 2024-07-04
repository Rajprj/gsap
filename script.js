function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("body"),
    smooth: true,
  
    // for tablet smooth
    tablet: { smooth: true },
  
    // for mobile
    smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("body", {
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

     pinType: document.querySelector('body').style.transform ? 'transform' : 'fixed'
  });
  
  // --- RED PANEL ---
 
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
  
  
}

// navanimation------
function navAnimation() {
  const nav = document.querySelector(".nav_part2");

  // Function to handle mouse enter animation
  const handleMouseEnter = () => {
    const tl = gsap.timeline();

    tl.to("nav", {
      boxShadow: "none",
      duration: 0.2,
    })
      .to(".nav_part2 h5", {
        display: "block",
        duration: 0.1,
      })
      .to(".line-left, .line-right", {
        left: "0%",
        duration: 0.3,
      })
      .to("#nav-bottom", {
        height: "22vh",
        duration: 0.3,
      })
      .to(".nav_part2 h5 span", {
        y: 0,
        duration: 0.3,
        stagger: {
          amount: 0.4,
        },
      });
  };

  // Function to handle mouse leave animation
  const handleMouseLeave = () => {
    const tl = gsap.timeline();

    tl.to(".nav_part2 h5 span", {
      y: 25,
      duration: 0.3,
      stagger: {
        amount: 0.1,
      },
    })
      .to("#nav-bottom", {
        height: "0vh",
        duration: 0.3,
      })
      .to(".line-left", {
        left: "-65%",
        duration: 0.3,
      })
      .to(".line-right", {
        left: "65%",
        duration: 0.3,
      })
      .to(".nav_part2 h5", {
        display: "none",
        duration: 0.1,
      })
      .to("nav", {
        boxShadow: "5px 12px 7px rgba(0,0,0,.2),-1px -6px 9px rgba(0,0,0,.2)",
        duration: 0.2,
      });
  };

  // Adding event listeners with debouncing to avoid rapid re-triggering
  let mouseEnterTimeout;
  let mouseLeaveTimeout;

  nav.addEventListener("mouseenter", () => {
    clearTimeout(mouseLeaveTimeout);
    mouseEnterTimeout = setTimeout(handleMouseEnter, 600); // Delay to ensure smooth transition
  });

  nav.addEventListener("mouseleave", () => {
    clearTimeout(mouseEnterTimeout);
    mouseLeaveTimeout = setTimeout(handleMouseLeave, 600); // Delay to ensure smooth transition
  });
}

//page2Animation---------
function page2Animation() {
  let elems = document.querySelectorAll(".right-elem");
  // let elemsImg = document.querySelector(".right-elem img")
  elems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });

    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });

    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 50,
        y: dets.y - elem.getBoundingClientRect().y - 120,
      });
    });
  });
}


//page3 video animation
function page3VideoAnimation() {
  let videoPlaybtn = document.querySelector(".page3-center");
  let video = document.querySelector("#page3 video");

  videoPlaybtn.addEventListener("click", function () {
    video.play();

    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
    });
  });

  video.addEventListener("click", function () {
    video.load();
    gsap.to(video, {
      transform: "scaleX(0.4) scaleY(0)",
      opacity: 0,
    });
  });
}

//page4 video animation

function page4VideoAnimation() {
  let secRight = document.querySelectorAll(".sec-right");
  
  secRight.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[5].style.opacity = 1;
      elem.childNodes[1].style.opacity = 1;
      elem.childNodes[1].style.scale = 1;
      // elem.childNodes[5].play()
    });
    
    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[5].style.opacity = 0;
      elem.childNodes[1].style.opacity = 0;
      elem.childNodes[1].style.scale = 0;
      elem.childNodes[5].load();
    });
    
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[1], {
        x: dets.x - elem.getBoundingClientRect().x - 35,
        y: dets.y - elem.getBoundingClientRect().y - 34,
      });
    });
  });

 // page5 summary errow click event 
 
}
  

//page5 sticky button 
function page5Animation(){
  let summary = document.querySelectorAll("summary")
  let firstDetail = document.querySelector("#firstDetail")
  let secDetail = document.querySelector("#secDetail")
  let pindata = document.querySelector("#left") 
  
  
    summary.forEach(function(elem){
      elem.addEventListener("click",()=>{
        elem.childNodes[5].classList.toggle("rotateArrow")
        
      })
    })
  
    function adjustDivHeight() {
      if (firstDetail.open && secDetail.open) {
        pindata.style.height = '270vh';
        
      } else if ((!firstDetail.open && secDetail.open) || (firstDetail.open && !secDetail.open)) {
        pindata.style.height = '190vh';
      } else if (!firstDetail.open && !secDetail.open) {
        pindata.style.height = '110vh';
      }
    }
  
    // Initial adjustment
    adjustDivHeight();
  
    // Add event listeners to details elements
    firstDetail.addEventListener('toggle', adjustDivHeight);
    secDetail.addEventListener('toggle', adjustDivHeight);

    let part2 = document.querySelectorAll(".part2")

part2.forEach((elem)=>{
  elem.addEventListener("mouseenter",()=>{
    
    // // console.log(elem.childNodes[3]);
    elem.style.height = "80%"
    elem.childNodes[1].style.opacity = 0
      elem.childNodes[3].style.opacity = 1
    // elem.childNodes[3].play()
  })
  
  elem.addEventListener("mouseleave",()=>{
    
    elem.style.height = "50%"
    elem.childNodes[3].style.opacity = 0
    elem.childNodes[1].style.opacity = 1
    elem.childNodes[3].load()
  })
})

}

// page6 scrollTrigger animation
function page6ScrollAnimation(){

  gsap.to(".pinbtn",{
    // x:1000,
    duration:1,
    scrollTrigger:{
      trigger:"#page5",
      start:"top 0%",
      end:"top -190%",
      toggleActions:"restart none none none",
      pin:".pinbtn",
      pinSpacing:true,
      scrub:4,
      // markers:true
    }
  })

  gsap.to("#btn-contain",{
    // x:1000,
    duration:5,
    scrollTrigger:{
      trigger:"#data-pin",
      start:"top 15%",
      end:"top -18%",
      toggleActions:"restart none none none",
      pin:"#btn-contain",
      pinSpacing:true,
      scrub:true,
      // markers:true
    }
  })


  gsap.from(".course-list .list",{
    x:0,
    duration:1,
    scrollTrigger:{
      trigger:".course-list",
      scroller:"body",
      start:"top 80%",
      end:"top 10%",
      scrub:true
    }
  })

  gsap.to(".svgImg",{
    rotate:"-190deg",
    duration:2,
    scrollTrigger:{
      trigger:"#page7",
      scroller:"body",
      start:"top 60%",
      end:"top 7%",
      scrub:true
    }
  })

 
  
}




locomotiveAnimation();
navAnimation();
page2Animation();
page3VideoAnimation();
page4VideoAnimation();
page5Animation();
page6ScrollAnimation();