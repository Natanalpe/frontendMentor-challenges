var swt = document.getElementById('theme');
    var r = document.querySelector(':root');
    var bod = document.querySelector('body');
    var icoTheme = document.getElementById('ico-theme');
    var dm = false;

    swt.addEventListener('click', () => {

      dm ? lumus(r) : nox(r);
    });
    

    function lumus(el) {
      el.style.setProperty('--bg-cont', 'hsl(0, 0%, 100%)');
      el.style.setProperty('--summary-cont', 'hsl(223, 47%, 23%)');
      el.style.setProperty('--desc-cont', 'hsl(224, 23%, 55%)');
      el.style.setProperty('--black-l', '#000');
      el.style.setProperty('--grey-p', 'hsl(225, 100%, 98%)');
      el.style.setProperty('--link-a', 'hsl(245, 75%, 52%)');
      el.style.setProperty('--shad-bd', '#cecece');
      bod.style.background = 'no-repeat url("./images/pattern-background-desktop.svg")'
      icoTheme.src = './images/sun.png';
      dm = false;
    };
    
    function nox(el) {
      el.style.setProperty('--bg-cont', 'hsl(0, 0%, 15%)');
      el.style.setProperty('--summary-cont', 'hsl(0, 0%, 100%)');
      el.style.setProperty('--desc-cont', 'hsl(0, 0%, 100%)');
      el.style.setProperty('--black-l', '#fff');
      el.style.setProperty('--grey-p', 'hsl(245, 73%, 58%)');
      el.style.setProperty('--link-a', 'hsl(0, 0%, 100%)');
      el.style.setProperty('--shad-bd', '#151515');
      bod.style.background = 'no-repeat url("./images/dm-bg.jpg")'
      icoTheme.src = './images/moon.png';
      dm = true;
    };