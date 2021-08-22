$(document).ready(function(){
    $(this).on("scroll",function(){document.documentElement.scrollTop>2300?$(".BacktoTop").css({opacity:"1",transiton:"all .3s"}):$(".BacktoTop").css({opacity:"0",transiton:"all .3s"}),$(".BacktoTop").on("click",function(){window.scrollBy({top:-3e5,behavior:"smooth"})})}),$(".slide .slide-et").flickity({cellAlign:"left",wrapAround:!0,contain:!0,pageDots:!0,prevNextButtons:!1}),$(".about .image .image_d .play").on("click",function(){$(".video_about").addClass("video_active")}),$(".video_about").on("click",function(){$(".video_about").removeClass("video_active")}),$(".line").on("click",function(){$(".video_about").removeClass("video_active"),$(".video_about iframe").attr("src","https://www.youtube.com/")}),AOS.init({duration:1800}),$(".slide .menu ul li a").on("click",function(o){if(""!==this.hash){o.preventDefault();const i=this.hash;$("html, body").animate({scrollTop:$(i).offset().top},800)}}),$(".menu-fixed ul li a").on("click",function(o){if(""!==this.hash){o.preventDefault();const i=this.hash;$("html, body").animate({scrollTop:$(i).offset().top},800)}}),$(window).scroll(function(){$(window).scrollTop()>700?$(".menu-fixed").slideDown(300):$(".menu-fixed").slideUp(200)}),$(".li").on("click",function(){$(".language").stop().slideUp(),$(this).next().stop().slideToggle(),$(".li img").toggleClass("active")}),$(".language_ul li a").on("click",function(){var o=$(this).html();$(".li a").html(o),$(".language_ul").stop().slideUp()})

        // hamburger
        let btn = document.querySelector('.hamburger');
        btn.addEventListener('click',function(){
            document.querySelector('.menu-mobile').classList.toggle('active');
        });
        // hambuger
        const menuBtn = document.querySelector('.hamburger');
        let menuOpen = false;
        menuBtn.addEventListener('click', () => {
            if(!menuOpen){
                menuBtn.classList.add('open');
                menuOpen = true;
            }
            else{
                menuBtn.classList.remove('open');
                menuOpen = false;
            }
        });

        let button = document.querySelector(".slide .container .row .header__top .search a");
        button.addEventListener('click', function(){
            const span = document.querySelector('.slide .container .row .header__top .search a');
            span.style.visibility = "visible";
            setTimeout(()=>{
                span.style.visibility = "hidden;";
            })
        })
});



//load-page     
$('.load-page').fadeOut(2400);