
function hideOnScroll(obj) {
  // Throw Error if input type is not object
  if(typeof(obj)!=="object"){
    throw new TypeError("Argument must be an Object");
  }

  // Select Navbar
  var navbar = document.querySelector('.hideOnScroll-nav');
  
  // Create and Insert Nav Classes
  var navClasses = document.createElement('style');
  navClasses.type = 'text/css';
  navClasses.innerHTML = 
    '.scrollUp { transform: translateY(-72px)!important; }' +
    '.nav-transition{will-change: transform; transition: transform 0.5s cubic-bezier(0.5, 0, 0.25, 1), -webkit-transform 0.5s cubic-bezier(0.5, 0, 0.25, 1)!important;}';
  document.getElementsByTagName('head')[0].appendChild(navClasses);
  navbar.classList.add('nav-transition');

  // Get Function Paramenters
  var offset = !!obj.YOffset ? obj.YOffset : 200 ;
  var alwaysShow = !!obj.MobileAlwaysShow ? obj.MobileAlwaysShow : false ;
  var mobileWidth = !!obj.MobileWidth ? obj.MobileWidth : 576 ;
  
  console.log(offset, alwaysShow, mobileWidth);

  // Set Global Variables
  var c=0;
  var currentScrollTop = 0;
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  // Get Current Viewport Width
  window.onresize = function(){
    width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  // Call Window OnScroll
  window.onscroll = function() {
    // Always Show on Mobile (viewport width <= mobileWidth)
    if(alwaysShow==true && width<=mobileWidth){
      if(navbar.classList.contains('scrollUp')){ navbar.classList.remove("scrollUp"); }
    }

    // Hide On Scroll for all screen if 
    //    width > mobileWidth or 
    //    MobileAlwaysShow==false
    else{
      var a = window.scrollY;
      currentScrollTop = a;
      if (c < currentScrollTop && a > (2*offset)) { navbar.classList.add("scrollUp"); }
      else if (c > currentScrollTop && !(a <= offset)) { navbar.classList.remove("scrollUp"); }
      c = currentScrollTop;
    }
  };
}

