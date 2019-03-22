function hide_on_scroll(obj) {
  if(typeof(obj)!=="object" || obj.nav_id===undefined){
    throw new TypeError("Argument must be an Object, also confirm NavId");
  }
  var nav_id                  = obj.nav_id;
  var nav_offset              = !!obj.nav_offset ? obj.nav_offset : 200;
  var nav_position            = !!obj.nav_position ? obj.nav_position : 'top';
  var hide_onscroll_mobile    = !!obj.hide_onscroll_mobile ? true : false;
  var mobile_width            = !!obj.mobile_width ? obj.mobile_width : 576;
  nav_position = nav_position.toLowerCase();
  var navbar = document.getElementById(nav_id);
  if(navbar==undefined){throw new TypeError("Recheck Passed Navigation Id"); }
  var nav_height = navbar.offsetHeight;
  var navClasses = document.createElement('style');
  navClasses.type = 'text/css';
  navClasses.innerHTML = 
  '.nav-scroll-up{-webkit-transform: translateY(-'+ nav_height +'px);-ms-transform: translateY(-'+ nav_height +'px);transform: translateY(-'+ nav_height +'px);}' +
  '.nav-scroll-down{-webkit-transform: translateY('+ nav_height +'px);-ms-transform: translateY('+ nav_height +'px);transform: translateY('+ nav_height +'px);}' +
  '.nav-scroll-fixed-'+ nav_position +'{position: fixed;'+ nav_position +': 0;right: 0;left: 0;z-index: 1000;}' +
  '.nav-scroll-transition{will-change: transform; -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.5, 0, 0.25, 1);transition: -webkit-transform 0.5s cubic-bezier(0.5, 0, 0.25, 1);-o-transition: transform 0.5s cubic-bezier(0.5, 0, 0.25, 1);transition: transform 0.5s cubic-bezier(0.5, 0, 0.25, 1);transition: transform 0.5s cubic-bezier(0.5, 0, 0.25, 1), -webkit-transform 0.5s cubic-bezier(0.5, 0, 0.25, 1);}';
  document.getElementsByTagName('head')[0].appendChild(navClasses);
  navbar.classList.add('nav-scroll-transition');
  navbar.classList.add('nav-scroll-fixed-' + nav_position);
  var c=0;
  var currentScrollTop = 0;
  var scrollingClass = (nav_position==='top') ? 'nav-scroll-up' : 'nav-scroll-down';
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  window.onresize = function(){ width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); }
  window.onscroll = function() {
    if(hide_onscroll_mobile==false && width<=mobile_width){
      if(navbar.classList.contains(scrollingClass)){ navbar.classList.remove(scrollingClass); }
    }
    else{
      var a = window.scrollY;
      currentScrollTop = a;
      if (c < currentScrollTop && a > (2*nav_offset)) { 
        navbar.classList.add(scrollingClass); 
      }
      else if (c > currentScrollTop && !(a <= nav_offset)) { 
        navbar.classList.remove(scrollingClass); 
      }
      c = currentScrollTop;
    }
  }
}