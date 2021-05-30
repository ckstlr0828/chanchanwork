$(document).ready(function(){
    var scroll_distance = 100;
    var transparent = true;
    document.addEventListener("scroll", function(){
        if($(document).scrollTop() > scroll_distance ) {
            if(transparent) {
                transparent = false;
                $('header').addClass('changeColor');
                $('#menubtn_box input[id="menu_btn"] + label span').css('background-color','#000');
                $('#logo img').prop('src','img/kia_logo_black.png');
            }
        } else {
            if( !transparent ) {
                transparent = true;
                $('header').removeClass('changeColor');
                $('#menubtn_box input[id="menu_btn"] + label span').css('background-color','#fff');
                $('#logo img').prop('src','img/kia_logo_white.png');
            }
        }
    });

    window.addEventListener("scroll", function(){
        if($(document).scrollTop() > scroll_distance ) {
            if(transparent) {
                transparent = false;
                $('header').addClass('changeColor');
                $('#menubtn_box input[id="menu_btn"] + label span').css('background-color','#000');
                $('#logo img').prop('src','img/kia_logo_black.png');
            }
        } else {
            if( !transparent ) {
                transparent = true;
                $('header').removeClass('changeColor');
                $('#menubtn_box input[id="menu_btn"] + label span').css('background-color','#fff');
                $('#logo img').prop('src','img/kia_logo_white.png');
            }
        }
    });
    topBtnTopEvent();

    function topBtnTopEvent(){
        const topBtn = document.querySelector("#top_btn");

        topBtn.addEventListener("click", function(){
            window.scrollTo(0,0);
        });
    }
});