import { animate, createDrawable, onScroll } from 'animejs';

// 1. Draw the background path as we scroll
animate(createDrawable('#scrollPath'), {
  draw: ['0 0', '0 1'],
  ease: 'linear',
  autoplay: onScroll({
    sync: true,
    enter: 'top top',
    leave: 'bottom bottom'
  })
});

// 2. Animate cards into view (Fade + Slide)
const sections = document.querySelectorAll('.card');
sections.forEach(section => {
  animate(section, {
    opacity: [0, 1],
    translateY: [100, 0],
    duration: 800,
    autoplay: onScroll({
      enter: 'top 90%', // Starts when the card is near the bottom of the screen
    })
  });
});
