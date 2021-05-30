$(document).ready(function(){
    $("#product_sub_img").slick({
        slide: 'div',
        infinite : true,
        slidesToShow : 1,
        slidesToScroll : 1,
        speed : 500,
        autoplay : true,
        autoplaySpeed : 3000,
        pauseOnHover : false,
        vertical : false,
        prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
		nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
		dotsClass : "slick-dots",
        draggable : true,
        dots : true,
        dotsClass : "slick-dots"
    });
});