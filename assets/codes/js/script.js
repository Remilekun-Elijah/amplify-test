document.addEventListener('DOMContentLoaded', function () {
(function(){
    const redefine = document.getElementById('redefine'), typography1 = document.getElementById('typography1'), typography2 = document.getElementById('typography2'), ux1 = document.getElementById("ux1"), ux2 = document.getElementById("ux2"),
    dCustomer = document.getElementById("digital-customer"),
    manageP1 = document.getElementById("manageP1"),
    manageP3 =document.getElementById("manageP3"),
    manageP2 = document.getElementById("manageP2"),
    reminder1 = document.getElementById("reminder1"),
    reminder2 = document.getElementById("reminder2"),
    retire1 = document.getElementById("retire1"),
    retire2 = document.getElementById("retire2"),
    retire3 = document.getElementById("retire3"),
    personalize1 = document.getElementById("personalize1"),
    personalize2 = document.getElementById("personalize2"),
    rCalculator1 = document.getElementById("rCalculator1"),
    rCalculator2 = document.getElementById("rCalculator2"),
    rCalculator3 = document.getElementById("rCalculator3"),
    welcomeShow = document.getElementById("welcome-show"),
    landingPageImage = document.getElementById("landing-page-image"),
    video = document.querySelector("video"),
    project1 = document.getElementById("project1"),
    project2 = document.getElementById("project2");

  console.log($(typography1).offset().top);

    function scrollMagic(element, property, value){
      if(document.documentElement.scrollTop >= element.offsetTop-400){
        
        $(element).css("opacity", '1');
    

        $(element).css(property, value||'0px');
      
    
      }else{
        $(element).css("opacity", '0');
        
        if(property == "transform"){
          
          element.removeAttribute('style');
        }else{
          $(element).css(property,'-150px');
        }
      }
    };
    
    $(video).on('click', ()=>video.play());
    
    // remove sticky top class on smaller screen size
    if(window.innerWidth < 567){
      $(".sticky-top").removeClass('sticky-top')
    }

    window.onscroll = ()=>{
      video.play();
      console.log($(redefine).offset().top);
      console.log("Height: ",document.documentElement.scrollTop, "target: ", redefine.offsetTop );
      scrollMagic(redefine, "bottom");
      scrollMagic(typography1, "left");
      scrollMagic(typography2, "right");
      scrollMagic(ux1, "top");
      scrollMagic(ux2, "bottom");
      scrollMagic(dCustomer, "transform", "scale3d(1,1,1)");
      scrollMagic(welcomeShow, "transform", "scale3d(1,1,1)");
      scrollMagic(landingPageImage, "transform", "scale3d(1,1,1)");
      scrollMagic(video, 'bottom');
      scrollMagic(manageP1, "left");
      scrollMagic(manageP3, "left");
      scrollMagic(manageP2, "right");
      scrollMagic( reminder1, "left");
      scrollMagic( reminder2, "right");
      scrollMagic( retire1, "left");
      scrollMagic( retire3, "left");
      scrollMagic( retire2, "right");
      scrollMagic( personalize1, "left");
      scrollMagic( personalize2, "right");
      scrollMagic( rCalculator1, "left");
      scrollMagic( rCalculator3, "left");
      scrollMagic( rCalculator2, "left");
      scrollMagic( project1, "bottom");
      scrollMagic( project2, "top");
  }
})(); 
  });



