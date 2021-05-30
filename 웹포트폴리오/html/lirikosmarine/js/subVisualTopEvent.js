$(document).ready(function(){
    subVisualTopEvent();
    
    var resizeTimer;
    $(window).bind('resize', function( ) {
        window.clearTimeout( resizeTimer );
        resizeTimer = window.setTimeout( resizeFunction, 500 );
    });
    function resizeFunction(){
    //리사이즈시 실행할 코드
        subVisualTopEvent();
    }

    function subVisualTopEvent(){
        const subVisualBtn = document.querySelector(".ingredient_brand_visual_downbtn");
        const subVisual = document.querySelector(".ingredient_brand_visual");
        const subVisualHeight = subVisual.clientHeight;

        subVisualBtn.addEventListener("click", function(){
            window.scrollTo(0,subVisualHeight);
        });
    }
});