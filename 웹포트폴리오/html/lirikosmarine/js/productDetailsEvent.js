$(document).ready(function(){
    var mql_1 = window.matchMedia("screen and (min-width:1024px)");
    var mql_2 = window.matchMedia("screen and (min-width:768px) and (max-width:1023px)");
    var mql_3 = window.matchMedia("screen and (min-width:480px) and (max-width:767px)");

    $(window).scroll(function(){
        var productScroll = $(window).scrollTop() + $(window).height();
        
        if(mql_1.matches){
             if(productScroll > $("#product_sub_info").offset().top){
                $("#product_title_wrap").css({"position":"absolute","top":"auto", "bottom":"9.5rem"});
            }else{
                $("#product_title_wrap").css({"position":"fixed", "top":"6rem","bottom":"auto"});
            }
        }else if(mql_2.matches){
            if(productScroll > $("#product_sub_info").offset().top){
                $("#product_title_wrap").css({"position":"absolute","top":"auto", "bottom":"6rem"});
            }else{
                $("#product_title_wrap").css({"position":"fixed", "top":"6rem", "bottom":"7.35rem"});
            }

        }else if(mql_3.matches){
            if(productScroll > $("#product_sub_info").offset().top){
                $("#product_title_wrap").css({"position":"relative","top":"auto", "bottom":"-1.65rem"});
            }else{
                $("#product_title_wrap").css({"position":"relative", "top":"2rem", "bottom":"-1.65rem"});
            }
        }else{
            if(productScroll > $("#product_sub_info").offset().top){
                $("#product_title_wrap").css({"position":"relative","top":"auto", "bottom":"-1.65rem"});
            }else{
                $("#product_title_wrap").css({"position":"relative", "top":"2rem", "bottom":"-1.65rem"});
            }
        }
    });
});