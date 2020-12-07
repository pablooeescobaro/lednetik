
SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime    : 800,
    // Размер шага в пикселях 
    stepSize         : 100,

    // Дополнительные настройки:
    
    // Ускорение 
    accelerationDelta : 100,  
    // Максимальное ускорение
    accelerationMax   : 5,   

    // Поддержка клавиатуры
    keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll       : 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Поддержка тачпада
    touchpadSupport   : true,
})

// window.onscroll = function() {
//   let scrolled = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrolled >= 200){
//     document.getElementById('header').classList.add("header__scroll");
//   } else{
//     document.getElementById('header').classList.remove("header__scroll");
//   }
// }