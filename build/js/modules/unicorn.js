export default function Unicorn(avatar) {

  var position = 800;
  var waiting = 10;
  var target = 0;
  var animationDuration = 0;

  //первое появление
  move(-200, 4);


  //генератор поведения
  setInterval(function() {   
    if (waiting !== 0) {
      waiting--;
    } else {
      waiting += 3;
      target = searchWay();
      console.log('unicorn: my position ' + position + 'px, moving ' + target + 'px' );
      animationDuration = (Math.abs(target) / 50);
      waiting += animationDuration;
      move(target, animationDuration);
    }
  }, 1000);

  //вспомогательные функции
  function getRandom(min, max, step) {
    return Math.round(Math.random() * (max - min) + min) * step;
  }

  function addCss (string) {
    avatar.className = 'unicorn' + ' ' + 'unicorn--' + string;
  }

  //анимация через requestAnimationFrame
  function animate(draw, duration, callback) {
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
      var timePassed = time - start;
      if (timePassed > duration) {
        timePassed = duration;
      }
      draw(timePassed);
      if (timePassed < duration) {
        requestAnimationFrame(animate);
      } else {
        if (callback) callback();
      }
    });
  }

  //поиск пути движения
  function searchWay() {
    return  getRandom(2, 12, 50) - position;
  }

  //движение
  function move(target, animationDuration) {
    if (target < 0) {
      addCss('runleft');
      animate(function(timePassed) {
        avatar.style.left = position - timePassed / 20 + 'px';
      }, 1000 * animationDuration, function() {
        position += target;
        addCss('stayright');
      });
    } else {
      addCss('runright');
      animate(function(timePassed) {
        avatar.style.left = position + timePassed / 20 + 'px';
      }, 1000 * animationDuration, function() {
        position += target;
        addCss('stayleft');
      });
    }
  }
}