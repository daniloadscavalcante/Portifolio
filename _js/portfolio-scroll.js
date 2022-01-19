
const menuItems = document.querySelectorAll('.menu a[href^="#"]');//pega tudo que começa com # ele vai pegar

menuItems.forEach(item => {
  item.addEventListener('click', scroolToIdOnclick);
})

function scroolToIdOnclick(event) {
  event.preventDefault();
  const element = event.target; //mostran o elemento que foi clicado
  const idOfsection = element.getAttribute('href');//pega só o atributo href
  const section = document.querySelector(idOfsection).offsetTop;//pega section
  
/*
  window.scroll({
    top: section,
    behavior: "smooth",
  });
*/
smoothScrollTo(0, section);
}

/*
 * compatibilidade com outros navegadores * 
 *
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
 function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };

 



 