
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');


function getdistancetoTop(element){   
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;    
}
function nativeScroll(distancethetop){
    window.scroll({
        top: distancethetop,
        behavior: "smooth",
    })
}
function scrolltoSection(event){
    event.preventDefault();
    const distancethetop = getdistancetoTop(event.target) -20;
    nativeScroll(distancethetop)
    smoothScrollTo(0, distancethetop, 700);
}

menuLinks.forEach(link => {
    link.addEventListener('click', scrolltoSection);
});

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== "undefined" ? duration : 400;
  
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60);
  }
  