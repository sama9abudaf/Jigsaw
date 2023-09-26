// let btn2 = document.getElementById('btn');
// let txt2 = document.getElementById('txt');
let btn = document.querySelector('btn-mood');
    let body = document.querySelectorAll('body');
    
    $(window).scroll(function(){
       
        if ($(window).scrollTop() > 700) {
            $(".navbar").css("background", "#203a54");
            $(".navbar .nav-link ").css("color", "white");
            $(".navbar-light .navbar-nav .nav-link:hover").css("color", "#A92D94");
         
          } else if ($(window).scrollTop() === 0) {
            // When scrolling back to the first section
            $(".navbar").css("background", "#f8f9fa");
            $(".navbar .nav-link ").css("color", "black");
            $(".navbar-light .navbar-nav .nav-link:hover").css("color", "white");
          } else {
            $(".navbar").css("background", "#f8f9fa");
            $(".navbar .nav-link ").css("color", "black");
            $(".navbar-light .navbar-nav .nav-link:hover").css("color", "white");
        


          }
    })
    
    btn.onclick = function(){
        
        body.classList.toggle('dark');
        btn.classList.toggle('fa-sun');
  }

  
    

// btn2.onclick = function() {
//     if(btn2.innerHTML == '...') {
//         txt2.style.display = 'inline';
      
//     }else {
//         txt2.style.display = 'none';
       
//     }
// }
