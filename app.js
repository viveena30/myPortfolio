// title bar animation 

var titleText = document.title;
function titleMarquee() {

  titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
  document.title = titleText;
  setTimeout("titleMarquee()", 450);
}

// --------------------------------------------------------------------------------------------------------------------------

// intro text animation

const animatedTitle = document.getElementById('animatedTitle');

let typewriter = new Typewriter(animatedTitle, {
  loop: true,
  strings: [
    "UX/UI designer",
    "frontend developer",
    "backend developer"
  ],
  autoStart: true,

  delay: 60,
});


// --------------------------------------------------------------------------------------------------------------------------

// nav menu toggle

var navBar = document.querySelector(".nav-data");
var menu = document.querySelector(".nav-list");
var ham = document.querySelector(".toggle-menu");

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (navBar.classList.contains("toggle")) {
    navBar.classList.remove("toggle");
    ham.classList.remove("toggle");
  } else {
    navBar.classList.add("toggle");
    ham.classList.add("toggle");
  }
}

var menuLinks = document.querySelectorAll(".nav-link")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)


// --------------------------------------------------------------------------------------------------------------------------

// scroll trigger animation

// about me section animation
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.animate').forEach((el, index) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "100 700",
      toggleActions: "play none none reverse",
      onLeaveBack: self => self.disable(),

      //  markers: true
    }
  })

  tl
    .set(el, { transformOrigin: 'bottom center' })
    .fromTo(el, { opacity: 0, scale: 0.4, y: "+=100" }, { opacity: 1, scale: 1, y: 0, duration: 1.3, immediateRender: false })
})

// skills section animation

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.skill-animate').forEach((el, index) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "100 700",
      toggleActions: "play pause none none",
      onLeaveBack: self => self.disable(),
      //  markers: true
    }
  })

  tl
    .set(el, { transformOrigin: 'bottom center' })
    .fromTo(el, { opacity: 0, scale: 0.8, y: "+=100" }, { opacity: 1, scale: 1, y: 0, duration: 1.3, immediateRender: false })
})

// services section animation

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.services-animate').forEach((el, index) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "100 700",
      toggleActions: "play pause none none",
      onLeaveBack: self => self.disable(),
      //  markers: true
    }
  })


  tl
    .set(el, { transformOrigin: 'left bottom' })
    .fromTo(el, { opacity: 0, scale: 0.8, y: "+=100" }, { opacity: 1, scale: 1, y: 0, duration: 1.3, immediateRender: false })
})

// education section animation

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.education-animate').forEach((el, index) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "100 700",
      toggleActions: "play pause none none",
      onLeaveBack: self => self.disable(),

      //  markers: true
    }
  })


  tl
    .set(el, { transformOrigin: 'bottom right' })
    .fromTo(el, { opacity: 0, scale: 0.8, y: "+=100" }, { opacity: 1, scale: 1, y: 0, duration: 1.3, immediateRender: false })
})

// projects section animation

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.projects-animate').forEach((el, index) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "100 700",
      toggleActions: "play pause none none",
      onLeaveBack: self => self.disable(),

      //  markers: true
    }
  })


  tl
    .set(el, { transformOrigin: 'bottom right' })
    .fromTo(el, { opacity: 0, scale: 0.8, y: "+=100" }, { opacity: 1, scale: 1, y: 0, duration: 1.3, immediateRender: false })
})

// hero section animation

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.hero-animate').forEach((el, index) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "100 200",
      toggleActions: "play pause none none",
      //  markers: true
    }
  })


  tl
    .set(el, { transformOrigin: 'left center' })
    .fromTo(el, { opacity: 0, scale: 0.4, y: "+=100" }, { opacity: 1, scale: 1, y: 0, duration: 1.3, immediateRender: false })
})

// -----------------------------------------------------------------------------------------

// skills animation (jquery)

$('.skill-per').each(function () {
  var $this = $(this);
  var per = $this.attr('per');
  $this.css("width", per + '%');
  $({ animatedValue: 0 }).animate({ animatedValue: per }, {
    duration: 1000,
    step: function () {
      $this.attr('per', Math.floor(this.animatedValue) + '%');

    },
    complete: function () {
      $this.attr('per', Math.floor(this.animatedValue) + '%');

    }

  });
});

// -----------------------------------------------------------------------------------------------------------------------------------------

// popup for service section
$(document).ready(function () {
  $('.pop p').click(function (e) {

    $('.popup-wrap').fadeIn(500);
    $('.popup-box').removeClass('transform-out').addClass('transform-in');
    $('.main').css("opacity", "0");
    e.preventDefault();
  });

  $('.close-btn').click(function (e) {
    $('.popup-wrap').fadeOut(500);
    $('.popup-box').removeClass('transform-in').addClass('transform-out');
    $('.main').css("opacity", "1");
    e.preventDefault();
  });
})


// scroll to top ------------------------------------------------------------------

const scrollButton = document.querySelector(".scroll-top");

if (scrollButton) {
  window.addEventListener('scroll', () => {
    if (pageYOffset > (window.innerHeight * 1)) {
      scrollButton.style.display = "flex";
    } else {
      scrollButton.style.display = "none";
    }
  });
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}

// --------------------------------------------------------------------

// toggle theme

const input = document.querySelector("#chk");


input.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.setAttribute("data-theme", "dark");
  }
  else {
    document.body.setAttribute("data-theme", "light");

  }
})
