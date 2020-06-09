$(document).ready(function () {



    // navBar

    $(window).scroll(function () { 
        if($("html").scrollTop() >= 65){

            $("nav.navbar").addClass("scroll")

            
            
        }else{
            $("nav.navbar").removeClass("scroll")
            
            
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


    // halfSlide section 
    // var nextBtn=$("#halfSlide .actions .next")
    // var prevBtn=$("#halfSlide .actions .prev")

    // nextBtn.click(function () {
    // var activeSlide=$(".slider.activeSlide")
    // var parentItem=$(".parentSlider")
    // var actibveSlidePrev=activeSlide.prev()
    

    // if(actibveSlidePrev!=null){
    //     actibveSlidePrev.addClass("activeSlide")
    // }else{
    //     parentItem.find("div.second").addClass("actibveSlide")
    // }

    // activeSlide.removeClass("activeSlide")
    
    // })
    // prevBtn.click(function () {
    // var activeSlide=$(".slider.activeSlide")
    // var parentItem=$(".parentSlider")
    // var actibveSlideNext=activeSlide.next()

    // if(actibveSlideNext!=null){
    //     actibveSlideNext.addClass("activeSlide")
    // }else{
    //     parentItem.find("div.first").addClass("actibveSlide")
    // }

    // activeSlide.removeClass("activeSlide")
    
    // })

    



    

    
});


// halfSlide section bullshit
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


