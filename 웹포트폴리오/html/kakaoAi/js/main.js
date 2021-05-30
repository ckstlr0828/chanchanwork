$(document).ready(function(){
    var main_visual = false;
    var mainVisual_service_clone = false;

    mainPageEvent();

    var resizeTimer;
    $(window).bind('resize', function( ) {
        window.clearTimeout( resizeTimer );
        resizeTimer = window.setTimeout( resizeFunction, 500 );
    });
    function resizeFunction(){
    //리사이즈시 실행할 코드
        window.location.reload();
    }

    function mainPageEvent(){

        // ----------------------- main_visual_slide

        // 변수명 설정
        const mainVisual_product_slideList = document.querySelector(".mainVisual_product_slideList");
        const mainVisual_product_slideContents = document.querySelectorAll(".mainVisual_product_slideContents");
        const mainVisual_navproduct_slideList = document.querySelector(".mainVisual_navproduct_slideList");
        const mainVisual_navproduct_slideContents = document.querySelectorAll(".mainVisual_navproduct_slideContents");
        const mainVisual_textproduct_slideList = document.querySelector(".mainVisual_textproduct_slideList");
        const mainVisual_textproduct_slideContents = document.querySelectorAll(".mainVisual_textproduct_slideContents");
        const mainVisual_slide_btnPrev = document.querySelector(".mainVisual_slide_btnPrev");
        const mainVisual_slide_btnNext = document.querySelector(".mainVisual_slide_btnNext");
        const mainVisual_slideLen = mainVisual_product_slideContents.length;
        const mainVisual_slideUlWidth = 100;
        const mainVisual_slideWidth = 20;
        const mainVisual_navproduct_slideWidth = 6;
        const mainVisual_slideSpeed = 1000;
        const mainVisual_product_startNum = 0;
        const mainVisual_navproduct_startNum = 0;
        const mainVisual_textproduct_startNum = 0;
        // 변수명 설정

        // ul list width 설정
        mainVisual_product_slideList.style.width = mainVisual_slideUlWidth * (mainVisual_slideLen+2) + "%";
        mainVisual_navproduct_slideList.style.width = mainVisual_slideUlWidth * (mainVisual_slideLen+2) + "%";
        mainVisual_textproduct_slideList.style.width = mainVisual_slideUlWidth * (mainVisual_slideLen+2) + "%";
        // ul list width 설정

        if(!main_visual){
            // clone 만들기
            let mainVisual_product_slide_firstChild = mainVisual_product_slideList.firstElementChild;
            let mainVisual_product_slide_cloneFirst = mainVisual_product_slide_firstChild.cloneNode(true);
            let mainVisual_product_slide_lastChild = mainVisual_product_slideList.lastElementChild;
            let mainVisual_product_slide_cloneLast = mainVisual_product_slide_lastChild.cloneNode(true);

            let mainVisual_navproduct_slide_firstChild = mainVisual_navproduct_slideList.firstElementChild;
            let mainVisual_navproduct_slide_cloneFirst = mainVisual_navproduct_slide_firstChild.cloneNode(true);
            let mainVisual_navproduct_slide_lastChild = mainVisual_navproduct_slideList.lastElementChild;
            let mainVisual_navproduct_slide_cloneLast = mainVisual_navproduct_slide_lastChild.cloneNode(true);

            let mainVisual_textproduct_slide_firstChild = mainVisual_textproduct_slideList.firstElementChild;
            let mainVisual_textproduct_slide_cloneFirst = mainVisual_textproduct_slide_firstChild.cloneNode(true);
            let mainVisual_textproduct_slide_lastChild = mainVisual_textproduct_slideList.lastElementChild;
            let mainVisual_textproduct_slide_cloneLast = mainVisual_textproduct_slide_lastChild.cloneNode(true);
            // clone 만들기

            // clone 껴넣기
            mainVisual_product_slideList.appendChild(mainVisual_product_slide_cloneFirst);
            mainVisual_product_slideList.insertBefore(mainVisual_product_slide_cloneLast, mainVisual_product_slideList.firstElementChild);

            mainVisual_navproduct_slideList.appendChild(mainVisual_navproduct_slide_cloneFirst);
            mainVisual_navproduct_slideList.insertBefore(mainVisual_navproduct_slide_cloneLast, mainVisual_navproduct_slideList.firstElementChild);

            mainVisual_textproduct_slideList.appendChild(mainVisual_textproduct_slide_cloneFirst);
            mainVisual_textproduct_slideList.insertBefore(mainVisual_textproduct_slide_cloneLast, mainVisual_textproduct_slideList.firstElementChild);
            // clone 껴넣기
            main_visual = true;
        }

        // ul list 원위치로 설정
        mainVisual_product_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * (mainVisual_product_startNum + 1)) + "%, 0px, 0px)";
        mainVisual_navproduct_slideList.style.transform = "translate3d(-" + (mainVisual_navproduct_slideWidth * (mainVisual_navproduct_startNum + 1)) + "%, 0px, 0px)";
        mainVisual_textproduct_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * (mainVisual_textproduct_startNum + 1)) + "%, 0px, 0px)";
        // ul list 원위치로 설정

        // index 변수 설정과 class 지정
        let mainVisual_product_slide_curIndex = mainVisual_product_startNum;
        let mainVisual_product_curSlide = mainVisual_product_slideContents[mainVisual_product_slide_curIndex];
        mainVisual_product_curSlide.classList.add("mainVisual_slide_active");

        let mainVisual_navproduct_slide_curIndex = mainVisual_navproduct_startNum;
        let mainVisual_navproduct_curSlide = mainVisual_navproduct_slideContents[mainVisual_navproduct_slide_curIndex];
        mainVisual_navproduct_curSlide.classList.add("mainVisual_slide_active");

        let mainVisual_textproduct_slide_curIndex = mainVisual_textproduct_startNum;
        let mainVisual_textproduct_curSlide = mainVisual_textproduct_slideContents[mainVisual_textproduct_slide_curIndex];
        mainVisual_textproduct_curSlide.classList.add("mainVisual_slide_active");
        // index 변수 설정과 class 지정


        // 자동 슬라이드
        var mainVisual_autoslide = setInterval(function (){
            if(mainVisual_product_slide_curIndex <= mainVisual_slideLen - 1){
                mainVisual_product_slideList.style.transition = mainVisual_slideSpeed + "ms";
                mainVisual_navproduct_slideList.style.transition = mainVisual_slideSpeed + "ms";
                mainVisual_textproduct_slideList.style.transition = mainVisual_slideSpeed + "ms";

                mainVisual_product_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * (mainVisual_product_slide_curIndex + 2)) + "%, 0px, 0px)";
                mainVisual_navproduct_slideList.style.transform = "translate3d(-" + (mainVisual_navproduct_slideWidth * (mainVisual_navproduct_slide_curIndex + 2)) + "%, 0px, 0px)";
                mainVisual_textproduct_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * (mainVisual_textproduct_slide_curIndex + 2)) + "%, 0px, 0px)";
            }if(mainVisual_product_slide_curIndex === mainVisual_slideLen - 1){
                setTimeout(function(){
                    mainVisual_product_slideList.style.transition = "0ms";
                    mainVisual_navproduct_slideList.style.transition = "0ms";
                    mainVisual_textproduct_slideList.style.transition = "0ms";

                    mainVisual_product_slideList.style.transform = "translate3d(-" + mainVisual_slideWidth + "%, 0px, 0px)";
                    mainVisual_navproduct_slideList.style.transform = "translate3d(-" + mainVisual_navproduct_slideWidth + "%, 0px, 0px)";
                    mainVisual_textproduct_slideList.style.transform = "translate3d(-" + mainVisual_slideWidth + "%, 0px, 0px)";
                }, mainVisual_slideSpeed);
                mainVisual_product_slide_curIndex = -1;
                mainVisual_navproduct_slide_curIndex = -1;
                mainVisual_textproduct_slide_curIndex = -1;
            }
            mainVisual_product_curSlide.classList.remove('mainVisual_slide_active');
            mainVisual_navproduct_curSlide.classList.remove('mainVisual_slide_active');
            mainVisual_textproduct_curSlide.classList.remove('mainVisual_slide_active');
            mainVisual_product_curSlide = mainVisual_product_slideContents[++mainVisual_product_slide_curIndex];
            mainVisual_navproduct_curSlide = mainVisual_navproduct_slideContents[++mainVisual_navproduct_slide_curIndex];
            mainVisual_textproduct_curSlide = mainVisual_textproduct_slideContents[++mainVisual_textproduct_slide_curIndex];
            mainVisual_product_curSlide.classList.add('mainVisual_slide_active');
            mainVisual_navproduct_curSlide.classList.add('mainVisual_slide_active');
            mainVisual_textproduct_curSlide.classList.add('mainVisual_slide_active');
        }, 5000);


        // 자동 슬라이드

        // 클릭 이벤트
        mainVisual_slide_btnNext.addEventListener("click", function(){
            clearInterval(mainVisual_autoslide);
            if(mainVisual_product_slide_curIndex <= mainVisual_slideLen - 1){
                mainVisual_product_slideList.style.transition = mainVisual_slideSpeed + "ms";
                mainVisual_navproduct_slideList.style.transition = mainVisual_slideSpeed + "ms";
                mainVisual_textproduct_slideList.style.transition = mainVisual_slideSpeed + "ms";

                mainVisual_product_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * (mainVisual_product_slide_curIndex + 2)) + "%, 0px, 0px)";
                mainVisual_navproduct_slideList.style.transform = "translate3d(-" + (mainVisual_navproduct_slideWidth * (mainVisual_navproduct_slide_curIndex + 2)) + "%, 0px, 0px)";
                mainVisual_textproduct_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * (mainVisual_textproduct_slide_curIndex + 2)) + "%, 0px, 0px)";
            }if(mainVisual_product_slide_curIndex === mainVisual_slideLen - 1){
                setTimeout(function(){
                    mainVisual_product_slideList.style.transition = "0ms";
                    mainVisual_navproduct_slideList.style.transition = "0ms";
                    mainVisual_textproduct_slideList.style.transition = "0ms";

                    mainVisual_product_slideList.style.transform = "translate3d(-" + mainVisual_slideWidth + "%, 0px, 0px)";
                    mainVisual_navproduct_slideList.style.transform = "translate3d(-" + mainVisual_navproduct_slideWidth + "%, 0px, 0px)";
                    mainVisual_textproduct_slideList.style.transform = "translate3d(-" + mainVisual_slideWidth + "%, 0px, 0px)";
                }, mainVisual_slideSpeed);
                mainVisual_product_slide_curIndex = -1;
                mainVisual_navproduct_slide_curIndex = -1;
                mainVisual_textproduct_slide_curIndex = -1;
            }
            mainVisual_product_curSlide.classList.remove('mainVisual_slide_active');
            mainVisual_navproduct_curSlide.classList.remove('mainVisual_slide_active');
            mainVisual_textproduct_curSlide.classList.remove('mainVisual_slide_active');
            mainVisual_product_curSlide = mainVisual_product_slideContents[++mainVisual_product_slide_curIndex];
            mainVisual_navproduct_curSlide = mainVisual_navproduct_slideContents[++mainVisual_navproduct_slide_curIndex];
            mainVisual_textproduct_curSlide = mainVisual_textproduct_slideContents[++mainVisual_textproduct_slide_curIndex];
            mainVisual_product_curSlide.classList.add('mainVisual_slide_active');
            mainVisual_navproduct_curSlide.classList.add('mainVisual_slide_active');
            mainVisual_textproduct_curSlide.classList.add('mainVisual_slide_active');
        });
        
        mainVisual_slide_btnPrev.addEventListener("click", function(){
            clearInterval(mainVisual_autoslide);
            if(mainVisual_product_slide_curIndex >= 0){
                mainVisual_product_slideList.style.transition = mainVisual_slideSpeed + "ms";
                mainVisual_navproduct_slideList.style.transition = mainVisual_slideSpeed + "ms";
                mainVisual_textproduct_slideList.style.transition = mainVisual_slideSpeed + "ms";

                mainVisual_product_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * mainVisual_product_slide_curIndex) + "%, 0px, 0px)";
                mainVisual_navproduct_slideList.style.transform = "translate3d(-" + (mainVisual_navproduct_slideWidth * mainVisual_navproduct_slide_curIndex) + "%, 0px, 0px)";
                mainVisual_textproduct_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * mainVisual_textproduct_slide_curIndex) + "%, 0px, 0px)";
            }if(mainVisual_product_slide_curIndex === 0){
                setTimeout(function(){
                    mainVisual_product_slideList.style.transition = "0ms";
                    mainVisual_navproduct_slideList.style.transition = "0ms";
                    mainVisual_textproduct_slideList.style.transition = "0ms";

                    mainVisual_product_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * mainVisual_slideLen) + "%, 0px, 0px)";
                mainVisual_navproduct_slideList.style.transform = "translate3d(-" + (mainVisual_navproduct_slideWidth * mainVisual_slideLen) + "%, 0px, 0px)";
                mainVisual_textproduct_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * mainVisual_slideLen) + "%, 0px, 0px)";
                }, mainVisual_slideSpeed);
                mainVisual_product_slide_curIndex = mainVisual_slideLen;
                mainVisual_navproduct_slide_curIndex = mainVisual_slideLen;
                mainVisual_textproduct_slide_curIndex = mainVisual_slideLen;
            }
            mainVisual_product_curSlide.classList.remove('mainVisual_slide_active');
            mainVisual_navproduct_curSlide.classList.remove('mainVisual_slide_active');
            mainVisual_textproduct_curSlide.classList.remove('mainVisual_slide_active');
            mainVisual_product_curSlide = mainVisual_product_slideContents[--mainVisual_product_slide_curIndex];
            mainVisual_navproduct_curSlide = mainVisual_navproduct_slideContents[--mainVisual_navproduct_slide_curIndex];
            mainVisual_textproduct_curSlide = mainVisual_textproduct_slideContents[--mainVisual_textproduct_slide_curIndex];
            mainVisual_product_curSlide.classList.add('mainVisual_slide_active');
            mainVisual_navproduct_curSlide.classList.add('mainVisual_slide_active');
            mainVisual_textproduct_curSlide.classList.add('mainVisual_slide_active');
        });
        // 클릭 이벤트

        // ----------------------- main_visual_slide

        // ----------------------- mainVisual_service
        // 변수명 설정
        const mainVisual_service_text_slideList = document.querySelector(".mainVisual_service_text_slideList");
        const mainVisual_service_text_slideContents = document.querySelectorAll(".mainVisual_service_text_slideContents");
        const mainVisual_service_img_slideList = document.querySelector(".mainVisual_service_img_slideList");
        const mainVisual_service_img_slideContents = document.querySelectorAll(".mainVisual_service_img_slideContents");
        const mainVisual_service_slide_btnPrev = document.querySelector(".mainVisual_service_slide_btnPrev");
        const mainVisual_service_slide_btnNext = document.querySelector(".mainVisual_service_slide_btnNext");
        const mainVisual_service_slideLen = mainVisual_service_text_slideContents.length;
        const mainVisual_service_text_slideWidth = 16;
        const mainVisual_service_img_slideWidth = 100;
        const mainVisual_service_img_slideLiWidth = 12.5;
        const mainVisual_service_slideSpeed = 1000;
        const mainVisual_service_text_startNum = 0;
        const mainVisual_service_img_startNum = 0;
        // 변수명 설정
        
        // ul width 설정
        mainVisual_service_text_slideList.style.width = mainVisual_service_text_slideWidth * (8) + "rem";
        mainVisual_service_img_slideList.style.width = mainVisual_service_img_slideWidth * (8) + "%";
        // ul width 설정

        // clone 만들고 껴 넣기
        if(!mainVisual_service_clone){
            let mainVisual_service_text_slide_firstChild = mainVisual_service_text_slideList.firstElementChild;
            let mainVisual_service_text_slide_cloneFirst = mainVisual_service_text_slide_firstChild.cloneNode(true);
            let mainVisual_service_text_slide_lastChild = mainVisual_service_text_slideList.lastElementChild;
            let mainVisual_service_text_slide_clonelast = mainVisual_service_text_slide_lastChild.cloneNode(true);

            let mainVisual_service_img_slide_firstChild = mainVisual_service_img_slideList.firstElementChild;
            let mainVisual_service_img_slide_cloneFirst = mainVisual_service_img_slide_firstChild.cloneNode(true);
            let mainVisual_service_img_slide_lastChild = mainVisual_service_img_slideList.lastElementChild;
            let mainVisual_service_img_slide_clonelast = mainVisual_service_img_slide_lastChild.cloneNode(true);

            mainVisual_service_text_slideList.appendChild(mainVisual_service_text_slide_cloneFirst);
            mainVisual_service_text_slideList.insertBefore(mainVisual_service_text_slide_clonelast, mainVisual_service_text_slideList.firstElementChild);
            mainVisual_service_img_slideList.appendChild(mainVisual_service_img_slide_cloneFirst);
            mainVisual_service_img_slideList.insertBefore(mainVisual_service_img_slide_clonelast, mainVisual_service_img_slideList.firstElementChild);

            mainVisual_service_clone = true;
        }
        // clone 만들고 껴 넣기

        // ul list 원위치로 설정
        mainVisual_service_text_slideList.style.transform = "translate3d(-" + (mainVisual_service_text_slideWidth * (mainVisual_service_text_startNum + 1)) + "rem, 0px, 0px)";
        mainVisual_service_img_slideList.style.transform = "translate3d(-" + (mainVisual_service_img_slideLiWidth * (mainVisual_service_img_startNum + 1)) + "%, 0px, 0px)";
        // ul list 원위치로 설정

        // index 변수 설정과 class 지정
        let mainVisual_service_text_slide_curIndex = mainVisual_service_text_startNum;
        let mainVisual_service_text_slide_curSlide = mainVisual_service_text_slideContents[mainVisual_service_text_slide_curIndex];
        mainVisual_service_text_slide_curSlide.classList.add("mainVisual_service_text_slide_active");

        let mainVisual_service_img_slide_curIndex = mainVisual_service_img_startNum;
        let mainVisual_service_img_slide_curSlide = mainVisual_service_img_slideContents[mainVisual_service_img_slide_curIndex];
        mainVisual_service_img_slide_curSlide.classList.add("mainVisual_service_img_slide_active");
        // index 변수 설정과 class 지정

        // 자동 이벤트
        var mainVisual_service_slide_autoSlide = setInterval(function (){
            if(mainVisual_service_text_slide_curIndex <= mainVisual_service_slideLen - 1){
                mainVisual_service_text_slideList.style.transition = mainVisual_service_slideSpeed + "ms";
                mainVisual_service_img_slideList.style.transition = mainVisual_service_slideSpeed + "ms";

                mainVisual_service_text_slideList.style.transform = "translate3d(-" + (mainVisual_service_text_slideWidth * (mainVisual_service_text_slide_curIndex + 2)) + "rem, 0px, 0px)";
                mainVisual_service_img_slideList.style.transform = "translate3d(-" + (mainVisual_service_img_slideLiWidth * (mainVisual_service_img_slide_curIndex + 2)) + "%, 0px, 0px)";
            }if(mainVisual_service_text_slide_curIndex === mainVisual_service_slideLen - 1){
                setTimeout(function(){
                    mainVisual_service_text_slideList.style.transition = "0ms";
                    mainVisual_service_img_slideList.style.transition = "0ms";

                    mainVisual_service_text_slideList.style.transform = "translate3d(-" + mainVisual_service_text_slideWidth + "rem, 0px, 0px)";
                    mainVisual_service_img_slideList.style.transform = "translate3d(-" + mainVisual_service_img_slideLiWidth + "%, 0px, 0px)";
                }, mainVisual_service_slideSpeed);
                mainVisual_service_text_slide_curIndex = -1;
                mainVisual_service_img_slide_curIndex = -1;
            }
            mainVisual_service_text_slide_curSlide.classList.remove("mainVisual_service_text_slide_active");
            mainVisual_service_text_slide_curSlide = mainVisual_service_text_slideContents[++mainVisual_service_text_slide_curIndex];
            mainVisual_service_text_slide_curSlide.classList.add("mainVisual_service_text_slide_active");

            mainVisual_service_img_slide_curSlide.classList.remove("mainVisual_service_img_slide_active");
            mainVisual_service_img_slide_curSlide = mainVisual_service_img_slideContents[++mainVisual_service_img_slide_curIndex];
            mainVisual_service_img_slide_curSlide.classList.add("mainVisual_service_img_slide_active");
        }, 5000);

        // 클릭 이벤트
        mainVisual_service_slide_btnNext.addEventListener("click", function(){
            clearInterval(mainVisual_service_slide_autoSlide);
            if(mainVisual_service_text_slide_curIndex <= mainVisual_service_slideLen - 1){
                mainVisual_service_text_slideList.style.transition = mainVisual_service_slideSpeed + "ms";
                mainVisual_service_img_slideList.style.transition = mainVisual_service_slideSpeed + "ms";

                mainVisual_service_text_slideList.style.transform = "translate3d(-" + (mainVisual_service_text_slideWidth * (mainVisual_service_text_slide_curIndex + 2)) + "rem, 0px, 0px)";
                mainVisual_service_img_slideList.style.transform = "translate3d(-" + (mainVisual_service_img_slideLiWidth * (mainVisual_service_img_slide_curIndex + 2)) + "%, 0px, 0px)";
            }if(mainVisual_service_text_slide_curIndex === mainVisual_service_slideLen - 1){
                setTimeout(function(){
                    mainVisual_service_text_slideList.style.transition = "0ms";
                    mainVisual_service_img_slideList.style.transition = "0ms";

                    mainVisual_service_text_slideList.style.transform = "translate3d(-" + mainVisual_service_text_slideWidth + "rem, 0px, 0px)";
                    mainVisual_service_img_slideList.style.transform = "translate3d(-" + mainVisual_service_img_slideLiWidth + "%, 0px, 0px)";
                }, mainVisual_service_slideSpeed);
                mainVisual_service_text_slide_curIndex = -1;
                mainVisual_service_img_slide_curIndex = -1;
            }
            mainVisual_service_text_slide_curSlide.classList.remove("mainVisual_service_text_slide_active");
            mainVisual_service_text_slide_curSlide = mainVisual_service_text_slideContents[++mainVisual_service_text_slide_curIndex];
            mainVisual_service_text_slide_curSlide.classList.add("mainVisual_service_text_slide_active");

            mainVisual_service_img_slide_curSlide.classList.remove("mainVisual_service_img_slide_active");
            mainVisual_service_img_slide_curSlide = mainVisual_service_img_slideContents[++mainVisual_service_img_slide_curIndex];
            mainVisual_service_img_slide_curSlide.classList.add("mainVisual_service_img_slide_active");
        });


        mainVisual_service_slide_btnPrev.addEventListener("click", function(){
            clearInterval(mainVisual_service_slide_autoSlide);
            if(mainVisual_service_text_slide_curIndex >= 0){
                mainVisual_service_text_slideList.style.transition = mainVisual_service_slideSpeed + "ms";
                mainVisual_service_img_slideList.style.transition = mainVisual_service_slideSpeed + "ms";

                mainVisual_service_text_slideList.style.transform = "translate3d(-" + (mainVisual_service_text_slideWidth * mainVisual_service_text_slide_curIndex) + "rem, 0px, 0px)";
                mainVisual_service_img_slideList.style.transform = "translate3d(-" + (mainVisual_service_img_slideLiWidth * mainVisual_service_img_slide_curIndex) + "%, 0px, 0px)";
            }if(mainVisual_service_text_slide_curIndex === 0){
                setTimeout(function(){
                    mainVisual_service_text_slideList.style.transition = "0ms";
                    mainVisual_service_img_slideList.style.transition = "0ms";

                    mainVisual_service_text_slideList.style.transform = "translate3d(-" + (mainVisual_service_text_slideWidth * mainVisual_service_slideLen) + "rem, 0px, 0px)";
                    mainVisual_service_img_slideList.style.transform = "translate3d(-" + (mainVisual_service_img_slideLiWidth * mainVisual_service_slideLen) + "%, 0px, 0px)";
                }, mainVisual_service_slideSpeed);
                mainVisual_service_text_slide_curIndex = -1;
                mainVisual_service_img_slide_curIndex = -1;
            }
            mainVisual_service_text_slide_curSlide.classList.remove("mainVisual_service_text_slide_active");
            mainVisual_service_text_slide_curSlide = mainVisual_service_text_slideContents[--mainVisual_service_text_slide_curIndex];
            mainVisual_service_text_slide_curSlide.classList.add("mainVisual_service_text_slide_active");

            mainVisual_service_img_slide_curSlide.classList.remove("mainVisual_service_img_slide_active");
            mainVisual_service_img_slide_curSlide = mainVisual_service_img_slideContents[--mainVisual_service_img_slide_curIndex];
            mainVisual_service_img_slide_curSlide.classList.add("mainVisual_service_img_slide_active");
        });

        // ----------------------- mainVisual_service


        // ----------------------- main_introductions
        $(window).scroll(function(){
			var $scroll = $(window).scrollTop() + $(window).height()/1.2;
            var $scrollStartArea = $("#main_introductions").offset().top;
            const movetext = document.querySelector(".main_moving_text");


			if($scroll >= $scrollStartArea){
				movetext.style.transform = "translate3d(" + Math.max(120 - 0.2*window.scrollY, -80) + "rem, 0px, 0px)";
			}
		});



        // ----------------------- main_introductions
    }
});