$(document).ready(function(){
    topBtnTopEvent();
    
    var resizeTimer;
    $(window).bind('resize', function( ) {
        window.clearTimeout( resizeTimer );
        resizeTimer = window.setTimeout( resizeFunction, 500 );
    });
    function resizeFunction(){
    //리사이즈시 실행할 코드
        topBtnTopEvent();
    }

    function topBtnTopEvent(){
        const topBtn = document.querySelector("#topbtn button");

        topBtn.addEventListener("click", function(){
            window.scrollTo(0,0);
        });
    }
});