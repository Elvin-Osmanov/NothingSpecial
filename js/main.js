$(document).ready(function () {



    // navBar

    $(window).scroll(function () { 
        if($("html").scrollTop() >= 65){

            $("nav.navbar").addClass("scroll")
            $(".scrollUp").fadeIn()

            
            
        }else{
            $("nav.navbar").removeClass("scroll")
            $(".scrollUp").fadeOut()
            
            
        }
    });

    $(".navbar .search-icon").click(function(){

        $(this).next().removeClass("d-none")
        $(this).addClass("d-none")
        

        if(!$(".lil-modal").hasClass("d-none")){
            $(".lil-modal").addClass("d-none")

        }else{
            $(".lil-modal").removeClass("d-none")
        }
    })

    $(".navbar .close-icon").click(function(){

        $(this).prev().removeClass("d-none")
        $(this).addClass("d-none")


        if(!$(".lil-modal").hasClass("d-none")){
            $(".lil-modal").addClass("d-none")

        }else{
            $(".lil-modal").removeClass("d-none")
        }
    })

    $('a.nav-link').on('click', function(event) {
        event.preventDefault();
        $('a.nav-link').each(function () {
            $(this).removeClass("onShow");
        })

        
        $(this).addClass("onShow");


        
        
        
    });

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    $(window).on("scroll", onScroll);
    function onScroll(){
        var scrollPos = $(window).scrollTop() + 5;
        $('#navbarNav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#navbarNav ul li a').removeClass("onShow");
                currLink.addClass("onShow");
            }
            else{
                currLink.removeClass("onShow");
            }
        });
    }

    

    // events-tab
    
    $("#events .day-list li").click(function (e) { 
        e.preventDefault();
        if(!$(this).hasClass("activeList")){
            var id = $(this).attr("href");
            $(".day-list .activeList").removeClass("activeList");
            $(this).addClass("activeList");
            
            $("#events .inner-content.active-event").removeClass("active-event");
            $(id).addClass("active-event")

        }


        
    });


    


    // speakers tab

    $("#team .dots li").click(function (){
        $("#team .dots li").removeClass("activeDot")
        $(this).addClass("activeDot")
        
    })

    $("#team #first-t").click(function(){
        
        
        
        $("#team .speaker").removeClass("activeSpeaker")


        if(!$("#team .speaker.first-team").hasClass("activeSpeaker")){
            $("#team .speaker.first-team").addClass("activeSpeaker")

        }



    })
    $("#team #second-t").click(function(){
        
        $("#team .speaker").removeClass("activeSpeaker")

        if(!$("#team .speaker.second-team").hasClass("activeSpeaker")){
            $("#team .speaker.second-team").addClass("activeSpeaker")

        }

        


    })
    $("#team #third-t").click(function(){
        
        $("#team .speaker").removeClass("activeSpeaker")

        if(!$("#team .speaker.third-team").hasClass("activeSpeaker")){
            $("#team .speaker.third-team").addClass("activeSpeaker")

        }

        


    })
   
    // scroll up

    $(".scrollUp").click(function(e){

        e.preventDefault();
        $("html").animate({scrollTop: 0}, 1000);
    })



   


    

    
});


// halfSlide section 
var nextBtn=document.querySelector("#halfSlide .actions .next")
var prevBtn=document.querySelector("#halfSlide .actions .prev")


nextBtn.addEventListener("click", function(){
    var activeSlide=document.querySelector(".slider.activeSlide")
    var parentItem=document.querySelector(".parentSlider")

    if(activeSlide.previousElementSibling!=null){
        activeSlide.previousElementSibling.classList.add("activeSlide")

    }else{
        parentItem.lastElementChild.classList.add("activeSlide")
    }

    activeSlide.classList.remove("activeSlide")
    
    


})
prevBtn.addEventListener("click", function(){
    var activeSlide=document.querySelector(".slider.activeSlide")
    var parentItem=document.querySelector(".parentSlider")

    if(activeSlide.nextElementSibling!=null){
        activeSlide.nextElementSibling.classList.add("activeSlide")

    }else{
        parentItem.firstElementChild.classList.add("activeSlide")
    }

    activeSlide.classList.remove("activeSlide")


})




// time section clock

function updateTimer(deadline){
    var time = deadline - new Date()
    return{
        "days": Math.floor(time/(1000*60*60*24)),
        "hours": Math.floor((time/(1000*60*60))%24),
        "minutes": Math.floor((time/1000/60)%60),
        "seconds": Math.floor((time/1000)%60),
        "total": time
    }
}

function animateClock(span){
    span.className = "move"
    setTimeout(function(){
        span.className = ""
    },700)
}

function startTimer(id, deadline){
    var timerInterval= setInterval(function(){
        var odometerWrapper = document.getElementById(id)
        var timer = updateTimer(deadline)

        odometerWrapper.innerHTML = "<span>" + timer.days + "</span>" 
                                  + "<span>" + ":" + "</span>"
                                  + "<span>" + timer.hours + "</span>"
                                  + "<span>" + ":" + "</span>"
                                  + "<span>" + timer.minutes + "</span>"
                                  + "<span>" + ":" + "</span>"
                                  + "<span>" + timer.seconds + "</span>";

        var spans = odometerWrapper.getElementsByTagName("span")
        animateClock(spans[6])
        if(timer.seconds == 59) animateClock(spans[4])
        if(timer.minutes ==59 && timer.seconds == 59) animateClock(spans[2])
        if(timer.hours == 23 && timer.minutes ==59 && timer.seconds == 59) animateClock(spans[0])


        // 
        if(timer.total < 1){
            clearInterval(timerInterval)
            odometerWrapper.innerHTML="<span>0</span><span>0</span><span>0</span><span>0</span>"
        }



    },1000)

}


window.onload = function(){
    var deadline = new Date("September 12, 2020 00:00:00")
    startTimer("odometerWrapper",deadline)
}



// odometer

$(window).scroll(function () {
  var hT = $("#stats").offset().top,
    hH = $("#stats").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)) {
    let odometers = document.querySelectorAll(".odometer");

    let speed = 300;

    odometers.forEach((counter) => {
      let updateCount = () => {
        let target = +counter.getAttribute("data-target");
        let count = +counter.innerText;

        let inc = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + inc;
          setTimeout(updateCount, 10);
        } else {
          count.innerText = target;
        }
      };

      updateCount();
    });
  }

  
});


