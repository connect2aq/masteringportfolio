const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
});

function heroSectionAnimation() {
  //WITH Timelines (cleaner, more versatile)
  //var tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
  var tl = gsap.timeline();
  tl.from('#heroline1', { y: -400, duration: 1 });
  tl.from('#heroline2', { opacity: 0, x: 400, duration: 1 });
  tl.from('#heroline3', { opacity: 0, y: 400, duration: 1 });

  // gsap.from('#heroline1', { y: -400 });
  // gsap.from('#heroline2', { x: 400 });
  // gsap.from('#heroline3', { y: 400 });
}

function circleMouseFollow() {
  window.addEventListener('mousemove', function (e) {
    // console.log(e.clientX, e.clientY);
    let mouseElement = this.document.querySelector('#minicircle');
    mouseElement.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}

circleMouseFollow();
heroSectionAnimation();

document.querySelectorAll('.projectitem').forEach((elem) => {
  var oldX = 0;

  elem.addEventListener('mouseleave', (e) => {
    gsap.to(elem.querySelector('img'), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });
  elem.addEventListener('mousemove', (e) => {
    var diff = e.clientY - elem.getBoundingClientRect().top;
    var xMovement = e.clientX - oldX;
    oldX = e.clientX;

    gsap.to(elem.querySelector('img'), {
      opacity: 1,
      top: diff,
      left: e.clientX,
      rotate: gsap.utils.clamp(-20, 20, xMovement),
    });
  });
});
