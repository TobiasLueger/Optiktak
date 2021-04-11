/** 
 * 
 * Own partials
 * 
 * **/

function stageAnimation() {
    console.log("Stage Animation Init");

    var app = document.querySelector('.stage-content h1');

    var typewriter = new Typewriter(app, {
        loop: true,
        delay: 20,
        deleteSpeed: 20,
    });

      var images = new Array("img/stage/animation/animation_1.jpg","img/stage/animation/animation_2.jpg","img/stage/animation/animation_3.jpg","img/stage/animation/animation_4.jpg","img/stage/animation/animation_5.jpg","img/stage/animation/animation_6.jpg");

      var slices = 64;
      var numImages = images.length;
      var imageIndex = 0;
      var count = 0;

      var containerOne = document.createElement('div');
      containerOne.className = 'image one';
      var containerTwo = document.createElement('div');
      containerTwo.className = 'image two';

      for(var i = 0; i < slices; i++) {
        var div = document.createElement('div');
        containerOne.appendChild(div);
        var div = document.createElement('div');
        containerTwo.appendChild(div);
      }

      document.querySelector(".stage-picture").appendChild(containerOne);
      document.querySelector(".stage-picture").appendChild(containerTwo);

      function switchImages(){
        var newContainer = document.querySelectorAll('.image')[(count % 2)];
        var oldContainer = document.querySelectorAll('.image')[((count+1) % 2)];
        if(imageIndex >= numImages) imageIndex = 0;
        var im = new Image();
        im.addEventListener('load', function(){
          var nodes = newContainer.childNodes;
          for(var i = 0; i < nodes.length; i++) {
            nodes[i].style.backgroundImage = 'url('+images[imageIndex]+')';
          }
          newContainer.classList.add('animate-in');
          newContainer.classList.remove('animate-out');
          oldContainer.classList.add('animate-out');
          oldContainer.classList.remove('animate-in');
          newContainer.style.opacity = 1;
          oldContainer.style.opacity = 0;
          count++;
          imageIndex++;
        });
        im.src = images[imageIndex];
      }

      typewriter.callFunction(function(){
          switchImages();
        })
        .typeString('Mit<span class="colored"> Optik Tack </span>modisch auf Zack')
        .pauseFor(2500)
        .deleteAll()
        .callFunction(function(){
          switchImages();
        })
        .typeString('<span class="colored"> Optik Tack </span>– ein Tick mehr Durchblick als anderswo')
        .pauseFor(2500)
        .deleteAll()
        .callFunction(function(){
          switchImages();
        })
        .typeString('Tragen Sie’s mit (modischer) Fassung! -<span class="colored"> Optik Tack </span>')
        .pauseFor(2500)
        .deleteAll()
        .callFunction(function(){
          switchImages();
        })
        .typeString('Klare Sicht und gute Laune –<span class="colored"> Optik Tack </span>')
        .pauseFor(2500)
        .deleteAll()
        .callFunction(function(){
          switchImages();
        })
        .typeString('Mit Kind und Kegel zu<span class="colored"> Optik Tack </span>')
        .pauseFor(2500)
        .deleteAll()
        .callFunction(function(){
          switchImages();
        })
        .typeString('Schutz und Schönheit – Sonnenbrillen von<span class="colored"> Optik Tack </span>')
        .pauseFor(2500)
        .deleteAll()
        .start();

}

function navigationInit() {
    const navItems = document.querySelectorAll("nav ul li a");
    console.log(navItems)



    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("click", function() {
            document.querySelector("li a.is-active").classList.remove("is-active");
            navItems[i].classList.add("is-active");

            if (document.querySelector(".nav-container").classList.contains("is-active")) {
              document.querySelector(".nav-container").classList.remove("is-active");
              document.querySelector(".burger-menu").classList.remove("checked");
            }
        });
      }
}

function menuInit() {
  const burgerMenu = document.querySelector(".burger-menu");
  const navContainer = document.querySelector(".nav-container");

  burgerMenu.addEventListener("click", function() {
    burgerMenu.classList.toggle("checked");
    navContainer.classList.toggle("is-active");
  });
}

function backUpInit() {
  document.querySelector(".footer-back-up").addEventListener("click", function(){
    document.documentElement.scrollTop = 0;
  });
}

function socialChipInit() {
  document.querySelector(".social-chip").addEventListener("click", function(){
    document.querySelector(".social-chip").classList.toggle("is-active");
  });
}

function formInit() {
  $(".form").parsley();
}


function init() {

  window.addEventListener('load', function(){
    menuInit()
    navigationInit();
    stageAnimation();
    backUpInit();
    socialChipInit();
    formInit();
  });  
    
}

init();

