$(document).ready(function(){

    var mql_1 = window.matchMedia("screen and (min-width:1280px)");
    var mql_2 = window.matchMedia("screen and (min-width:1024px) and (max-width:1280px)");
    var mql_3 = window.matchMedia("screen and (max-width:1023px)");
    var ingredientProduct1_Clone = false;
    var ingredientProduct2_Clone = false;
    var ingredientProduct3_Clone = false;
    var ingredientProduct4_Clone = false;
    var ingredientProduct5_Clone = false;

    let ingredientProduct_2_text_slide_fisrstChild;
    let ingredientProduct_2_text_slide_cloneFisrst;
    let ingredientProduct_2_text_slide_lastChild;
    let ingredientProduct_2_text_slide_cloneLast;

    let ingredientProduct_2_img_slide_fisrstChild;
    let ingredientProduct_2_img_slide_cloneFisrst;
    let ingredientProduct_2_img_slide_lastChild;
    let ingredientProduct_2_img_slide_cloneLast;

    ingredientProductEvent();
    
    var resizeTimer;
    $(window).bind('resize', function( ) {
        window.clearTimeout( resizeTimer );
        resizeTimer = window.setTimeout( resizeFunction, 500 );
    });
    function resizeFunction(){
    //리사이즈시 실행할 코드
        window.location.reload();
    }

    function ingredientProductEvent(){
        // Slide 1
        // 변수명 설정
        const ingredientProduct_1_text_slideList = document.querySelector(".ingredientProduct_1_text_slideList");
        const ingredientProduct_1_img_slideList = document.querySelector(".ingredientProduct_1_img_slideList");
        const ingredientProduct_1_text_slideContents = document.querySelectorAll(".ingredientProduct_1_text_slideContents");
        const ingredientProduct_1_img_slideContents = document.querySelectorAll(".ingredientProduct_1_img_slideContents");
        const ingredientProduct_1_slide_btnPrev = document.querySelector(".ingredientProduct_1_slide_btnPrev");
        const ingredientProduct_1_slide_btnNext = document.querySelector(".ingredientProduct_1_slide_btnNext");
        const ingredientProduct_1_slideLen = ingredientProduct_1_text_slideContents.length;
        if(mql_1.matches){
            var ingredientProduct_1_text_slideWidth = 320;
        }else if(mql_2.matches){
            var ingredientProduct_1_text_slideWidth = 300;
        }else if(mql_3.matches){
            var ingredientProduct_1_text_slideUlWidth = 100;
            var ingredientProduct_1_text_slideWidth = 25;
        }
        const ingredientProduct_1_img_slideUlWidth = 50;
        const ingredientProduct_1_img_slideWidth = 25;
        const ingredientProduct_1_slideSpeed = 1000;
        const ingredientProduct_1_startNum = 0;
        const ingredientProduct_1_img_startNum = 0;
        // 변수명 설정

        // ullist width 설정
        if(mql_1.matches){
            ingredientProduct_1_text_slideList.style.width = ingredientProduct_1_text_slideWidth * (4) + "px";
        }else if(mql_2.matches){
            ingredientProduct_1_text_slideList.style.width = ingredientProduct_1_text_slideWidth * (4) + "px";
        }else if(mql_3.matches){
            ingredientProduct_1_text_slideList.style.width = ingredientProduct_1_text_slideUlWidth * (4) + "%";
        }
        ingredientProduct_1_img_slideList.style.width = ingredientProduct_1_img_slideUlWidth * (4) + "%";
        // ullist width 설정

        if(!ingredientProduct1_Clone){
            // clone 만들기
            let ingredientProduct_1_text_slide_fisrstChild = ingredientProduct_1_text_slideList.firstElementChild;
            let ingredientProduct_1_text_slide_cloneFisrst = ingredientProduct_1_text_slide_fisrstChild.cloneNode(true);
            let ingredientProduct_1_text_slide_lastChild = ingredientProduct_1_text_slideList.lastElementChild;
            let ingredientProduct_1_text_slide_cloneLast = ingredientProduct_1_text_slide_lastChild.cloneNode(true);

            let ingredientProduct_1_img_slide_fisrstChild = ingredientProduct_1_img_slideList.firstElementChild;
            let ingredientProduct_1_img_slide_cloneFisrst = ingredientProduct_1_img_slide_fisrstChild.cloneNode(true);
            let ingredientProduct_1_img_slide_lastChild = ingredientProduct_1_img_slideList.lastElementChild;
            let ingredientProduct_1_img_slide_cloneLast = ingredientProduct_1_img_slide_lastChild.cloneNode(true);
            // clone 만들기

            // 만든 clone 껴넣기
            ingredientProduct_1_text_slideList.appendChild(ingredientProduct_1_text_slide_cloneFisrst);
            ingredientProduct_1_text_slideList.insertBefore(ingredientProduct_1_text_slide_cloneLast, ingredientProduct_1_text_slideList.firstElementChild);

            ingredientProduct_1_img_slideList.appendChild(ingredientProduct_1_img_slide_cloneFisrst);
            ingredientProduct_1_img_slideList.insertBefore(ingredientProduct_1_img_slide_cloneLast, ingredientProduct_1_img_slideList.firstElementChild);
            // 만든 clone 껴넣기

            ingredientProduct1_Clone = true;
        }
        // ul list 원위치로 설정
        if(mql_1.matches){
            ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_text_slideWidth * (ingredientProduct_1_startNum + 1)) + "px, 0px, 0px)";
        }else if(mql_2.matches){
            ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_text_slideWidth * (ingredientProduct_1_startNum + 1)) + "px, 0px, 0px)";
        }else if(mql_3.matches){
            ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_text_slideWidth * (ingredientProduct_1_startNum + 1)) + "%, 0px, 0px)";
        }
        ingredientProduct_1_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_img_slideWidth * (ingredientProduct_1_startNum + 1)) + "%, 0px, 0px)";
        // ul list 원위치로 설정

        // index 변수 설정과 class 지정
        let ingredientProduct_1_text_slide_curIndex = ingredientProduct_1_startNum;
        let ingredientProduct_1_text_curSlide = ingredientProduct_1_text_slideContents[ingredientProduct_1_text_slide_curIndex];
        ingredientProduct_1_text_curSlide.classList.add("ingredientProduct_1_text_slide_active");

        let ingredientProduct_1_img_slide_curIndex = ingredientProduct_1_img_startNum;
        let ingredientProduct_1_img_curSlide = ingredientProduct_1_img_slideContents[ingredientProduct_1_img_slide_curIndex];
        ingredientProduct_1_img_curSlide.classList.add("showproduct_explanation");
        // index 변수 설정과 class 지정

        // 클릭 이벤트 설정 
        var ingredientProduct_1_autoSlide = setInterval(function (){
            if(ingredientProduct_1_text_slide_curIndex <= ingredientProduct_1_slideLen - 1){
                ingredientProduct_1_text_slideList.style.transition = ingredientProduct_1_slideSpeed + "ms";
                ingredientProduct_1_img_slideList.style.transition = ingredientProduct_1_slideSpeed + "ms";

                if(mql_1.matches){
                    ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_text_slideWidth * (ingredientProduct_1_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_2.matches){
                    ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_text_slideWidth * (ingredientProduct_1_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_3.matches){
                    ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_text_slideWidth * (ingredientProduct_1_text_slide_curIndex + 2)) + "%, 0px, 0px)";
                }
                ingredientProduct_1_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_img_slideWidth * (ingredientProduct_1_img_slide_curIndex + 2)) + "%, 0px, 0px)";
            }if(ingredientProduct_1_text_slide_curIndex === ingredientProduct_1_slideLen - 1){
                setTimeout(function(){
                    ingredientProduct_1_text_slideList.style.transition = "0ms";
                    ingredientProduct_1_img_slideList.style.transition = "0ms";

                    if(mql_1.matches){
                        ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + ingredientProduct_1_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_2.matches){
                        ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + ingredientProduct_1_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_3.matches){
                        ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + ingredientProduct_1_text_slideWidth + "%, 0px, 0px)";
                    }
                    ingredientProduct_1_img_slideList.style.transform = "translate3d(-" + ingredientProduct_1_img_slideWidth + "%, 0px, 0px)";
                }, ingredientProduct_1_slideSpeed);
                ingredientProduct_1_text_slide_curIndex = -1;
                ingredientProduct_1_img_slide_curIndex = -1;
            }
            ingredientProduct_1_text_curSlide.classList.remove('ingredientProduct_1_text_slide_active');
            ingredientProduct_1_text_curSlide = ingredientProduct_1_text_slideContents[++ingredientProduct_1_text_slide_curIndex];
            ingredientProduct_1_text_curSlide.classList.add('ingredientProduct_1_text_slide_active');

            ingredientProduct_1_img_curSlide.classList.remove('showproduct_explanation');
            ingredientProduct_1_img_curSlide = ingredientProduct_1_img_slideContents[++ingredientProduct_1_img_slide_curIndex];
            ingredientProduct_1_img_curSlide.classList.add('showproduct_explanation');
        }, 5000);

        ingredientProduct_1_slide_btnNext.addEventListener("click", function(){
            clearInterval(ingredientProduct_1_autoSlide);

            if(ingredientProduct_1_text_slide_curIndex <= ingredientProduct_1_slideLen - 1){
                ingredientProduct_1_text_slideList.style.transition = ingredientProduct_1_slideSpeed + "ms";
                ingredientProduct_1_img_slideList.style.transition = ingredientProduct_1_slideSpeed + "ms";

                if(mql_1.matches){
                    ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_text_slideWidth * (ingredientProduct_1_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_2.matches){
                    ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_text_slideWidth * (ingredientProduct_1_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_3.matches){
                    ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_text_slideWidth * (ingredientProduct_1_text_slide_curIndex + 2)) + "%, 0px, 0px)";
                }
                ingredientProduct_1_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_img_slideWidth * (ingredientProduct_1_img_slide_curIndex + 2)) + "%, 0px, 0px)";
            }if(ingredientProduct_1_text_slide_curIndex === ingredientProduct_1_slideLen - 1){
                setTimeout(function(){
                    ingredientProduct_1_text_slideList.style.transition = "0ms";
                    ingredientProduct_1_img_slideList.style.transition = "0ms";

                    if(mql_1.matches){
                        ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + ingredientProduct_1_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_2.matches){
                        ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + ingredientProduct_1_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_3.matches){
                        ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + ingredientProduct_1_text_slideWidth + "%, 0px, 0px)";
                    }
                    ingredientProduct_1_img_slideList.style.transform = "translate3d(-" + ingredientProduct_1_img_slideWidth + "%, 0px, 0px)";
                }, ingredientProduct_1_slideSpeed);
                ingredientProduct_1_text_slide_curIndex = -1;
                ingredientProduct_1_img_slide_curIndex = -1;
            }
            ingredientProduct_1_text_curSlide.classList.remove('ingredientProduct_1_text_slide_active');
            ingredientProduct_1_text_curSlide = ingredientProduct_1_text_slideContents[++ingredientProduct_1_text_slide_curIndex];
            ingredientProduct_1_text_curSlide.classList.add('ingredientProduct_1_text_slide_active');

            ingredientProduct_1_img_curSlide.classList.remove('showproduct_explanation');
            ingredientProduct_1_img_curSlide = ingredientProduct_1_img_slideContents[++ingredientProduct_1_img_slide_curIndex];
            ingredientProduct_1_img_curSlide.classList.add('showproduct_explanation');
        });

        ingredientProduct_1_slide_btnPrev.addEventListener("click", function(){
            clearInterval(ingredientProduct_1_autoSlide);

            if(ingredientProduct_1_text_slide_curIndex >= 0){
                ingredientProduct_1_text_slideList.style.transition = ingredientProduct_1_slideSpeed + "ms";
                ingredientProduct_1_img_slideList.style.transition = ingredientProduct_1_slideSpeed + "ms";

                if(mql_1.matches){
                    ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_text_slideWidth * ingredientProduct_1_text_slide_curIndex) + "px, 0px, 0px)";
                }else if(mql_2.matches){
                    ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_text_slideWidth * ingredientProduct_1_text_slide_curIndex) + "px, 0px, 0px)";
                }else if(mql_3.matches){
                    ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_text_slideWidth * ingredientProduct_1_text_slide_curIndex) + "%, 0px, 0px)";
                }
                ingredientProduct_1_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_img_slideWidth * ingredientProduct_1_img_slide_curIndex) + "%, 0px, 0px)";
            }if(ingredientProduct_1_text_slide_curIndex === 0){
                setTimeout(function(){
                    ingredientProduct_1_text_slideList.style.transition = "0ms";
                    ingredientProduct_1_img_slideList.style.transition = "0ms";

                    if(mql_1.matches){
                        ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_text_slideWidth * ingredientProduct_1_slideLen) + "px, 0px, 0px)";
                    }else if(mql_2.matches){
                        ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_text_slideWidth * ingredientProduct_1_slideLen) + "px, 0px, 0px)";
                    }else if(mql_3.matches){
                        ingredientProduct_1_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_text_slideWidth * ingredientProduct_1_slideLen) + "%, 0px, 0px)";
                    }
                    ingredientProduct_1_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_1_img_slideWidth * ingredientProduct_1_slideLen) + "%, 0px, 0px)";
                }, ingredientProduct_1_slideSpeed);
                ingredientProduct_1_text_slide_curIndex = ingredientProduct_1_slideLen;
                ingredientProduct_1_img_slide_curIndex = ingredientProduct_1_slideLen;
            }
            ingredientProduct_1_text_curSlide.classList.remove('ingredientProduct_1_text_slide_active');
            ingredientProduct_1_text_curSlide = ingredientProduct_1_text_slideContents[--ingredientProduct_1_text_slide_curIndex];
            ingredientProduct_1_text_curSlide.classList.add('ingredientProduct_1_text_slide_active');

            ingredientProduct_1_img_curSlide.classList.remove('showproduct_explanation');
            ingredientProduct_1_img_curSlide = ingredientProduct_1_img_slideContents[--ingredientProduct_1_img_slide_curIndex];
            ingredientProduct_1_img_curSlide.classList.add('showproduct_explanation');
        });
        // 클릭 이벤트 설정 
        // Slide 1


        // Slide 2
        // 변수명 설정
        const ingredientProduct_2_text_slideList = document.querySelector(".ingredientProduct_2_text_slideList");
        const ingredientProduct_2_img_slideList = document.querySelector(".ingredientProduct_2_img_slideList");
        const ingredientProduct_2_text_slideContents = document.querySelectorAll(".ingredientProduct_2_text_slideContents");
        const ingredientProduct_2_img_slideContents = document.querySelectorAll(".ingredientProduct_2_img_slideContents");
        const ingredientProduct_2_slide_btnPrev = document.querySelector(".ingredientProduct_2_slide_btnPrev");
        const ingredientProduct_2_slide_btnNext = document.querySelector(".ingredientProduct_2_slide_btnNext");
        const ingredientProduct_2_slideLen = ingredientProduct_2_text_slideContents.length;
        if(mql_1.matches){
            var ingredientProduct_2_text_slideWidth = 320;
        }else if(mql_2.matches){
            var ingredientProduct_2_text_slideWidth = 300;
        }else if(mql_3.matches){
            var ingredientProduct_2_text_slideUlWidth = 100;
            var ingredientProduct_2_text_slideWidth = 25;
        }
        const ingredientProduct_2_img_slideUlWidth = 50;
        const ingredientProduct_2_img_slideWidth = 25;
        const ingredientProduct_2_slideSpeed = 1000;
        const ingredientProduct_2_startNum = 0;
        const ingredientProduct_2_img_startNum = 0;
        // 변수명 설정

        // ullist width 설정
        if(mql_1.matches){
            ingredientProduct_2_text_slideList.style.width = ingredientProduct_2_text_slideWidth * (ingredientProduct_2_slideLen+2) + "px";
        }else if(mql_2.matches){
            ingredientProduct_2_text_slideList.style.width = ingredientProduct_2_text_slideWidth * (ingredientProduct_2_slideLen+2) + "px";
        }else if(mql_3.matches){
            ingredientProduct_2_text_slideList.style.width = ingredientProduct_2_text_slideUlWidth * (ingredientProduct_2_slideLen+2) + "%";
        }
        ingredientProduct_2_img_slideList.style.width = ingredientProduct_2_img_slideUlWidth * (ingredientProduct_2_slideLen+2) + "%";
        // ullist width 설정
        

        if(!ingredientProduct2_Clone){
            // clone 만들기
            ingredientProduct_2_text_slide_fisrstChild = ingredientProduct_2_text_slideList.firstElementChild;
            ingredientProduct_2_text_slide_cloneFisrst = ingredientProduct_2_text_slide_fisrstChild.cloneNode(true);
            ingredientProduct_2_text_slide_lastChild = ingredientProduct_2_text_slideList.lastElementChild;
            ingredientProduct_2_text_slide_cloneLast = ingredientProduct_2_text_slide_lastChild.cloneNode(true);

            ingredientProduct_2_img_slide_fisrstChild = ingredientProduct_2_img_slideList.firstElementChild;
            ingredientProduct_2_img_slide_cloneFisrst = ingredientProduct_2_img_slide_fisrstChild.cloneNode(true);
            ingredientProduct_2_img_slide_lastChild = ingredientProduct_2_img_slideList.lastElementChild;
            ingredientProduct_2_img_slide_cloneLast = ingredientProduct_2_img_slide_lastChild.cloneNode(true);
            // clone 만들기
            ingredientProduct2_Clone = true;
        }

        // 만든 clone 껴넣기
        ingredientProduct_2_text_slideList.appendChild(ingredientProduct_2_text_slide_cloneFisrst);
        ingredientProduct_2_text_slideList.insertBefore(ingredientProduct_2_text_slide_cloneLast, ingredientProduct_2_text_slideList.firstElementChild);

        ingredientProduct_2_img_slideList.appendChild(ingredientProduct_2_img_slide_cloneFisrst);
        ingredientProduct_2_img_slideList.insertBefore(ingredientProduct_2_img_slide_cloneLast, ingredientProduct_2_img_slideList.firstElementChild);
        // 만든 clone 껴넣기

        // ul list 원위치로 설정
        if(mql_1.matches){
            ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_text_slideWidth * (ingredientProduct_2_startNum + 1)) + "px, 0px, 0px)";
        }else if(mql_2.matches){
            ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_text_slideWidth * (ingredientProduct_2_startNum + 1)) + "px, 0px, 0px)";
        }else if(mql_3.matches){
            ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_text_slideWidth * (ingredientProduct_2_startNum + 1)) + "%, 0px, 0px)";
        }
        ingredientProduct_2_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_img_slideWidth * (ingredientProduct_2_startNum + 1)) + "%, 0px, 0px)";
        // ul list 원위치로 설정

        // index 변수 설정과 class 지정
        let ingredientProduct_2_text_slide_curIndex = ingredientProduct_2_startNum;
        let ingredientProduct_2_text_curSlide = ingredientProduct_2_text_slideContents[ingredientProduct_2_text_slide_curIndex];
        ingredientProduct_2_text_curSlide.classList.add("ingredientProduct_2_text_slide_active");

        let ingredientProduct_2_img_slide_curIndex = ingredientProduct_2_img_startNum;
        let ingredientProduct_2_img_curSlide = ingredientProduct_2_img_slideContents[ingredientProduct_2_img_slide_curIndex];
        ingredientProduct_2_img_curSlide.classList.add("showproduct_explanation");
        // index 변수 설정과 class 지정

        // 클릭 이벤트 설정 
        var ingredientProduct_2_autoSlide = setInterval(function (){
            if(ingredientProduct_2_text_slide_curIndex <= ingredientProduct_2_slideLen - 1){
                ingredientProduct_2_text_slideList.style.transition = ingredientProduct_2_slideSpeed + "ms";
                ingredientProduct_2_img_slideList.style.transition = ingredientProduct_2_slideSpeed + "ms";

                if(mql_1.matches){
                    ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_text_slideWidth * (ingredientProduct_2_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_2.matches){
                    ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_text_slideWidth * (ingredientProduct_2_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_3.matches){
                    ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_text_slideWidth * (ingredientProduct_2_text_slide_curIndex + 2)) + "%, 0px, 0px)";
                }
                ingredientProduct_2_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_img_slideWidth * (ingredientProduct_2_img_slide_curIndex + 2)) + "%, 0px, 0px)";
            }if(ingredientProduct_2_text_slide_curIndex === ingredientProduct_2_slideLen - 1){
                setTimeout(function(){
                    ingredientProduct_2_text_slideList.style.transition = "0ms";
                    ingredientProduct_2_img_slideList.style.transition = "0ms";

                    if(mql_1.matches){
                        ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + ingredientProduct_2_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_2.matches){
                        ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + ingredientProduct_2_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_3.matches){
                        ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + ingredientProduct_2_text_slideWidth + "%, 0px, 0px)";
                    }
                    ingredientProduct_2_img_slideList.style.transform = "translate3d(-" + ingredientProduct_2_img_slideWidth + "%, 0px, 0px)";
                }, ingredientProduct_2_slideSpeed);
                ingredientProduct_2_text_slide_curIndex = -1;
                ingredientProduct_2_img_slide_curIndex = -1;
            }
            ingredientProduct_2_text_curSlide.classList.remove('ingredientProduct_2_text_slide_active');
            ingredientProduct_2_text_curSlide = ingredientProduct_2_text_slideContents[++ingredientProduct_2_text_slide_curIndex];
            ingredientProduct_2_text_curSlide.classList.add('ingredientProduct_2_text_slide_active');

            ingredientProduct_2_img_curSlide.classList.remove('showproduct_explanation');
            ingredientProduct_2_img_curSlide = ingredientProduct_2_img_slideContents[++ingredientProduct_2_img_slide_curIndex];
            ingredientProduct_2_img_curSlide.classList.add('showproduct_explanation');
        }, 5000);

        ingredientProduct_2_slide_btnNext.addEventListener("click", function(){
            clearInterval(ingredientProduct_2_autoSlide);

            if(ingredientProduct_2_text_slide_curIndex <= ingredientProduct_2_slideLen - 1){
                ingredientProduct_2_text_slideList.style.transition = ingredientProduct_2_slideSpeed + "ms";
                ingredientProduct_2_img_slideList.style.transition = ingredientProduct_2_slideSpeed + "ms";

                if(mql_1.matches){
                    ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_text_slideWidth * (ingredientProduct_2_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_2.matches){
                    ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_text_slideWidth * (ingredientProduct_2_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_3.matches){
                    ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_text_slideWidth * (ingredientProduct_2_text_slide_curIndex + 2)) + "%, 0px, 0px)";
                }
                ingredientProduct_2_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_img_slideWidth * (ingredientProduct_2_img_slide_curIndex + 2)) + "%, 0px, 0px)";
            }if(ingredientProduct_2_text_slide_curIndex === ingredientProduct_2_slideLen - 1){
                setTimeout(function(){
                    ingredientProduct_2_text_slideList.style.transition = "0ms";
                    ingredientProduct_2_img_slideList.style.transition = "0ms";

                    if(mql_1.matches){
                        ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + ingredientProduct_2_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_2.matches){
                        ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + ingredientProduct_2_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_3.matches){
                        ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + ingredientProduct_2_text_slideWidth + "%, 0px, 0px)";
                    }
                    ingredientProduct_2_img_slideList.style.transform = "translate3d(-" + ingredientProduct_2_img_slideWidth + "%, 0px, 0px)";
                }, ingredientProduct_2_slideSpeed);
                ingredientProduct_2_text_slide_curIndex = -1;
                ingredientProduct_2_img_slide_curIndex = -1;
            }
            ingredientProduct_2_text_curSlide.classList.remove('ingredientProduct_2_text_slide_active');
            ingredientProduct_2_text_curSlide = ingredientProduct_2_text_slideContents[++ingredientProduct_2_text_slide_curIndex];
            ingredientProduct_2_text_curSlide.classList.add('ingredientProduct_2_text_slide_active');

            ingredientProduct_2_img_curSlide.classList.remove('showproduct_explanation');
            ingredientProduct_2_img_curSlide = ingredientProduct_2_img_slideContents[++ingredientProduct_2_img_slide_curIndex];
            ingredientProduct_2_img_curSlide.classList.add('showproduct_explanation');
        });

        ingredientProduct_2_slide_btnPrev.addEventListener("click", function(){
            clearInterval(ingredientProduct_2_autoSlide);
            
            if(ingredientProduct_2_text_slide_curIndex >= 0){
                ingredientProduct_2_text_slideList.style.transition = ingredientProduct_2_slideSpeed + "ms";
                ingredientProduct_2_img_slideList.style.transition = ingredientProduct_2_slideSpeed + "ms";

                if(mql_1.matches){
                    ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_text_slideWidth * ingredientProduct_2_text_slide_curIndex) + "px, 0px, 0px)";
                }else if(mql_2.matches){
                    ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_text_slideWidth * ingredientProduct_2_text_slide_curIndex) + "px, 0px, 0px)";
                }else if(mql_3.matches){
                    ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_text_slideWidth * ingredientProduct_2_text_slide_curIndex) + "%, 0px, 0px)";
                }
                ingredientProduct_2_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_img_slideWidth * ingredientProduct_2_img_slide_curIndex) + "%, 0px, 0px)";
            }if(ingredientProduct_2_text_slide_curIndex === 0){
                setTimeout(function(){
                    ingredientProduct_2_text_slideList.style.transition = "0ms";
                    ingredientProduct_2_img_slideList.style.transition = "0ms";

                    if(mql_1.matches){
                        ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_text_slideWidth * ingredientProduct_2_slideLen) + "px, 0px, 0px)";
                    }else if(mql_2.matches){
                        ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_text_slideWidth * ingredientProduct_2_slideLen) + "px, 0px, 0px)";
                    }else if(mql_3.matches){
                        ingredientProduct_2_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_text_slideWidth * ingredientProduct_2_slideLen) + "%, 0px, 0px)";
                    }
                    ingredientProduct_2_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_2_img_slideWidth * ingredientProduct_2_slideLen) + "%, 0px, 0px)";
                }, ingredientProduct_2_slideSpeed);
                ingredientProduct_2_text_slide_curIndex = ingredientProduct_2_slideLen;
                ingredientProduct_2_img_slide_curIndex = ingredientProduct_2_slideLen;
            }
            ingredientProduct_2_text_curSlide.classList.remove('ingredientProduct_2_text_slide_active');
            ingredientProduct_2_text_curSlide = ingredientProduct_2_text_slideContents[--ingredientProduct_2_text_slide_curIndex];
            ingredientProduct_2_text_curSlide.classList.add('ingredientProduct_2_text_slide_active');

            ingredientProduct_2_img_curSlide.classList.remove('showproduct_explanation');
            ingredientProduct_2_img_curSlide = ingredientProduct_2_img_slideContents[--ingredientProduct_2_img_slide_curIndex];
            ingredientProduct_2_img_curSlide.classList.add('showproduct_explanation');
        });
        // 클릭 이벤트 설정 
        // Slide 2

        // Slide 3
        // 변수명 설정
        const ingredientProduct_3_text_slideList = document.querySelector(".ingredientProduct_3_text_slideList");
        const ingredientProduct_3_img_slideList = document.querySelector(".ingredientProduct_3_img_slideList");
        const ingredientProduct_3_text_slideContents = document.querySelectorAll(".ingredientProduct_3_text_slideContents");
        const ingredientProduct_3_img_slideContents = document.querySelectorAll(".ingredientProduct_3_img_slideContents");
        const ingredientProduct_3_slide_btnPrev = document.querySelector(".ingredientProduct_3_slide_btnPrev");
        const ingredientProduct_3_slide_btnNext = document.querySelector(".ingredientProduct_3_slide_btnNext");
        const ingredientProduct_3_slideLen = ingredientProduct_3_text_slideContents.length;
        if(mql_1.matches){
            var ingredientProduct_3_text_slideWidth = 320;
        }else if(mql_2.matches){
            var ingredientProduct_3_text_slideWidth = 300;
        }else if(mql_3.matches){
            var ingredientProduct_3_text_slideUlWidth = 100;
            var ingredientProduct_3_text_slideWidth = 25;
        }
        const ingredientProduct_3_img_slideUlWidth = 50;
        const ingredientProduct_3_img_slideWidth = 25;
        const ingredientProduct_3_slideSpeed = 1000;
        const ingredientProduct_3_startNum = 0;
        const ingredientProduct_3_img_startNum = 0;
        // 변수명 설정

        // ullist width 설정
        if(mql_1.matches){
            ingredientProduct_3_text_slideList.style.width = ingredientProduct_3_text_slideWidth * (ingredientProduct_3_slideLen+2) + "px";
        }else if(mql_2.matches){
            ingredientProduct_3_text_slideList.style.width = ingredientProduct_3_text_slideWidth * (ingredientProduct_3_slideLen+2) + "px";
        }else if(mql_3.matches){
            ingredientProduct_3_text_slideList.style.width = ingredientProduct_3_text_slideUlWidth * (ingredientProduct_3_slideLen+2) + "%";
        }
        ingredientProduct_3_img_slideList.style.width = ingredientProduct_3_img_slideUlWidth * (ingredientProduct_3_slideLen+2) + "%";
        // ullist width 설정

        if(!ingredientProduct3_Clone){
            // clone 만들기
            let ingredientProduct_3_text_slide_fisrstChild = ingredientProduct_3_text_slideList.firstElementChild;
            let ingredientProduct_3_text_slide_cloneFisrst = ingredientProduct_3_text_slide_fisrstChild.cloneNode(true);
            let ingredientProduct_3_text_slide_lastChild = ingredientProduct_3_text_slideList.lastElementChild;
            let ingredientProduct_3_text_slide_cloneLast = ingredientProduct_3_text_slide_lastChild.cloneNode(true);

            let ingredientProduct_3_img_slide_fisrstChild = ingredientProduct_3_img_slideList.firstElementChild;
            let ingredientProduct_3_img_slide_cloneFisrst = ingredientProduct_3_img_slide_fisrstChild.cloneNode(true);
            let ingredientProduct_3_img_slide_lastChild = ingredientProduct_3_img_slideList.lastElementChild;
            let ingredientProduct_3_img_slide_cloneLast = ingredientProduct_3_img_slide_lastChild.cloneNode(true);
            // clone 만들기

            // 만든 clone 껴넣기
            ingredientProduct_3_text_slideList.appendChild(ingredientProduct_3_text_slide_cloneFisrst);
            ingredientProduct_3_text_slideList.insertBefore(ingredientProduct_3_text_slide_cloneLast, ingredientProduct_3_text_slideList.firstElementChild);

            ingredientProduct_3_img_slideList.appendChild(ingredientProduct_3_img_slide_cloneFisrst);
            ingredientProduct_3_img_slideList.insertBefore(ingredientProduct_3_img_slide_cloneLast, ingredientProduct_3_img_slideList.firstElementChild);
            // 만든 clone 껴넣기
            ingredientProduct3_Clone = true;
        }

        // ul list 원위치로 설정
        if(mql_1.matches){
            ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_text_slideWidth * (ingredientProduct_3_startNum + 1)) + "px, 0px, 0px)";
        }else if(mql_2.matches){
            ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_text_slideWidth * (ingredientProduct_3_startNum + 1)) + "px, 0px, 0px)";
        }else if(mql_3.matches){
            ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_text_slideWidth * (ingredientProduct_3_startNum + 1)) + "%, 0px, 0px)";
        }
        ingredientProduct_3_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_img_slideWidth * (ingredientProduct_3_startNum + 1)) + "%, 0px, 0px)";
        // ul list 원위치로 설정

        // index 변수 설정과 class 지정
        let ingredientProduct_3_text_slide_curIndex = ingredientProduct_3_startNum;
        let ingredientProduct_3_text_curSlide = ingredientProduct_3_text_slideContents[ingredientProduct_3_text_slide_curIndex];
        ingredientProduct_3_text_curSlide.classList.add("ingredientProduct_3_text_slide_active");

        let ingredientProduct_3_img_slide_curIndex = ingredientProduct_3_img_startNum;
        let ingredientProduct_3_img_curSlide = ingredientProduct_3_img_slideContents[ingredientProduct_3_img_slide_curIndex];
        ingredientProduct_3_img_curSlide.classList.add("showproduct_explanation");
        // index 변수 설정과 class 지정

        // 클릭 이벤트 설정 
        var ingredientProduct_3_autoSlide = setInterval(function (){
            if(ingredientProduct_3_text_slide_curIndex <= ingredientProduct_3_slideLen - 1){
                ingredientProduct_3_text_slideList.style.transition = ingredientProduct_3_slideSpeed + "ms";
                ingredientProduct_3_img_slideList.style.transition = ingredientProduct_3_slideSpeed + "ms";

                if(mql_1.matches){
                    ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_text_slideWidth * (ingredientProduct_3_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_2.matches){
                    ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_text_slideWidth * (ingredientProduct_3_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_3.matches){
                    ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_text_slideWidth * (ingredientProduct_3_text_slide_curIndex + 2)) + "%, 0px, 0px)";
                }
                ingredientProduct_3_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_img_slideWidth * (ingredientProduct_3_img_slide_curIndex + 2)) + "%, 0px, 0px)";
            }if(ingredientProduct_3_text_slide_curIndex === ingredientProduct_3_slideLen - 1){
                setTimeout(function(){
                    ingredientProduct_3_text_slideList.style.transition = "0ms";
                    ingredientProduct_3_img_slideList.style.transition = "0ms";

                    if(mql_1.matches){
                        ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + ingredientProduct_3_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_2.matches){
                        ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + ingredientProduct_3_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_3.matches){
                        ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + ingredientProduct_3_text_slideWidth + "%, 0px, 0px)";
                    }
                    ingredientProduct_3_img_slideList.style.transform = "translate3d(-" + ingredientProduct_3_img_slideWidth + "%, 0px, 0px)";
                }, ingredientProduct_3_slideSpeed);
                ingredientProduct_3_text_slide_curIndex = -1;
                ingredientProduct_3_img_slide_curIndex = -1;
            }
            ingredientProduct_3_text_curSlide.classList.remove('ingredientProduct_3_text_slide_active');
            ingredientProduct_3_text_curSlide = ingredientProduct_3_text_slideContents[++ingredientProduct_3_text_slide_curIndex];
            ingredientProduct_3_text_curSlide.classList.add('ingredientProduct_3_text_slide_active');

            ingredientProduct_3_img_curSlide.classList.remove('showproduct_explanation');
            ingredientProduct_3_img_curSlide = ingredientProduct_3_img_slideContents[++ingredientProduct_3_img_slide_curIndex];
            ingredientProduct_3_img_curSlide.classList.add('showproduct_explanation');
        }, 5000);

        ingredientProduct_3_slide_btnNext.addEventListener("click", function(){
            clearInterval(ingredientProduct_3_autoSlide);

            if(ingredientProduct_3_text_slide_curIndex <= ingredientProduct_3_slideLen - 1){
                ingredientProduct_3_text_slideList.style.transition = ingredientProduct_3_slideSpeed + "ms";
                ingredientProduct_3_img_slideList.style.transition = ingredientProduct_3_slideSpeed + "ms";

                if(mql_1.matches){
                    ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_text_slideWidth * (ingredientProduct_3_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_2.matches){
                    ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_text_slideWidth * (ingredientProduct_3_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_3.matches){
                    ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_text_slideWidth * (ingredientProduct_3_text_slide_curIndex + 2)) + "%, 0px, 0px)";
                }
                ingredientProduct_3_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_img_slideWidth * (ingredientProduct_3_img_slide_curIndex + 2)) + "%, 0px, 0px)";
            }if(ingredientProduct_3_text_slide_curIndex === ingredientProduct_3_slideLen - 1){
                setTimeout(function(){
                    ingredientProduct_3_text_slideList.style.transition = "0ms";
                    ingredientProduct_3_img_slideList.style.transition = "0ms";

                    if(mql_1.matches){
                        ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + ingredientProduct_3_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_2.matches){
                        ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + ingredientProduct_3_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_3.matches){
                        ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + ingredientProduct_3_text_slideWidth + "%, 0px, 0px)";
                    }
                    ingredientProduct_3_img_slideList.style.transform = "translate3d(-" + ingredientProduct_3_img_slideWidth + "%, 0px, 0px)";
                }, ingredientProduct_3_slideSpeed);
                ingredientProduct_3_text_slide_curIndex = -1;
                ingredientProduct_3_img_slide_curIndex = -1;
            }
            ingredientProduct_3_text_curSlide.classList.remove('ingredientProduct_3_text_slide_active');
            ingredientProduct_3_text_curSlide = ingredientProduct_3_text_slideContents[++ingredientProduct_3_text_slide_curIndex];
            ingredientProduct_3_text_curSlide.classList.add('ingredientProduct_3_text_slide_active');

            ingredientProduct_3_img_curSlide.classList.remove('showproduct_explanation');
            ingredientProduct_3_img_curSlide = ingredientProduct_3_img_slideContents[++ingredientProduct_3_img_slide_curIndex];
            ingredientProduct_3_img_curSlide.classList.add('showproduct_explanation');
        });

        ingredientProduct_3_slide_btnPrev.addEventListener("click", function(){
            clearInterval(ingredientProduct_3_autoSlide);
            
            if(ingredientProduct_3_text_slide_curIndex >= 0){
                ingredientProduct_3_text_slideList.style.transition = ingredientProduct_3_slideSpeed + "ms";
                ingredientProduct_3_img_slideList.style.transition = ingredientProduct_3_slideSpeed + "ms";

                if(mql_1.matches){
                    ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_text_slideWidth * ingredientProduct_3_text_slide_curIndex) + "px, 0px, 0px)";
                }else if(mql_2.matches){
                    ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_text_slideWidth * ingredientProduct_3_text_slide_curIndex) + "px, 0px, 0px)";
                }else if(mql_3.matches){
                    ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_text_slideWidth * ingredientProduct_3_text_slide_curIndex) + "%, 0px, 0px)";
                }
                ingredientProduct_3_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_img_slideWidth * ingredientProduct_3_img_slide_curIndex) + "%, 0px, 0px)";
            }if(ingredientProduct_3_text_slide_curIndex === 0){
                setTimeout(function(){
                    ingredientProduct_3_text_slideList.style.transition = "0ms";
                    ingredientProduct_3_img_slideList.style.transition = "0ms";

                    if(mql_1.matches){
                        ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_text_slideWidth * ingredientProduct_3_slideLen) + "px, 0px, 0px)";
                    }else if(mql_2.matches){
                        ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_text_slideWidth * ingredientProduct_3_slideLen) + "px, 0px, 0px)";
                    }else if(mql_3.matches){
                        ingredientProduct_3_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_text_slideWidth * ingredientProduct_3_slideLen) + "%, 0px, 0px)";
                    }
                    ingredientProduct_3_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_3_img_slideWidth * ingredientProduct_3_slideLen) + "%, 0px, 0px)";
                }, ingredientProduct_3_slideSpeed);
                ingredientProduct_3_text_slide_curIndex = ingredientProduct_3_slideLen;
                ingredientProduct_3_img_slide_curIndex = ingredientProduct_3_slideLen;
            }
            ingredientProduct_3_text_curSlide.classList.remove('ingredientProduct_3_text_slide_active');
            ingredientProduct_3_text_curSlide = ingredientProduct_3_text_slideContents[--ingredientProduct_3_text_slide_curIndex];
            ingredientProduct_3_text_curSlide.classList.add('ingredientProduct_3_text_slide_active');

            ingredientProduct_3_img_curSlide.classList.remove('showproduct_explanation');
            ingredientProduct_3_img_curSlide = ingredientProduct_3_img_slideContents[--ingredientProduct_3_img_slide_curIndex];
            ingredientProduct_3_img_curSlide.classList.add('showproduct_explanation');
        });
        // 클릭 이벤트 설정 
        // Slide 3


        // Slide 4
        // 변수명 설정
        const ingredientProduct_4_text_slideList = document.querySelector(".ingredientProduct_4_text_slideList");
        const ingredientProduct_4_img_slideList = document.querySelector(".ingredientProduct_4_img_slideList");
        const ingredientProduct_4_text_slideContents = document.querySelectorAll(".ingredientProduct_4_text_slideContents");
        const ingredientProduct_4_img_slideContents = document.querySelectorAll(".ingredientProduct_4_img_slideContents");
        const ingredientProduct_4_slide_btnPrev = document.querySelector(".ingredientProduct_4_slide_btnPrev");
        const ingredientProduct_4_slide_btnNext = document.querySelector(".ingredientProduct_4_slide_btnNext");
        const ingredientProduct_4_slideLen = ingredientProduct_4_text_slideContents.length;
        if(mql_1.matches){
            var ingredientProduct_4_text_slideWidth = 320;
        }else if(mql_2.matches){
            var ingredientProduct_4_text_slideWidth = 300;
        }else if(mql_3.matches){
            var ingredientProduct_4_text_slideUlWidth = 100;
            var ingredientProduct_4_text_slideWidth = 25;
        }
        const ingredientProduct_4_img_slideUlWidth = 50;
        const ingredientProduct_4_img_slideWidth = 25;
        const ingredientProduct_4_slideSpeed = 1000;
        const ingredientProduct_4_startNum = 0;
        const ingredientProduct_4_img_startNum = 0;
        // 변수명 설정

        // ullist width 설정
        if(mql_1.matches){
            ingredientProduct_4_text_slideList.style.width = ingredientProduct_4_text_slideWidth * (ingredientProduct_4_slideLen+2) + "px";
        }else if(mql_2.matches){
            ingredientProduct_4_text_slideList.style.width = ingredientProduct_4_text_slideWidth * (ingredientProduct_4_slideLen+2) + "px";
        }else if(mql_3.matches){
            ingredientProduct_4_text_slideList.style.width = ingredientProduct_4_text_slideUlWidth * (ingredientProduct_4_slideLen+2) + "%";
        }
        ingredientProduct_4_img_slideList.style.width = ingredientProduct_4_img_slideUlWidth * (ingredientProduct_4_slideLen+2) + "%";
        // ullist width 설정

        if(!ingredientProduct4_Clone){
            // clone 만들기
            let ingredientProduct_4_text_slide_fisrstChild = ingredientProduct_4_text_slideList.firstElementChild;
            let ingredientProduct_4_text_slide_cloneFisrst = ingredientProduct_4_text_slide_fisrstChild.cloneNode(true);
            let ingredientProduct_4_text_slide_lastChild = ingredientProduct_4_text_slideList.lastElementChild;
            let ingredientProduct_4_text_slide_cloneLast = ingredientProduct_4_text_slide_lastChild.cloneNode(true);

            let ingredientProduct_4_img_slide_fisrstChild = ingredientProduct_4_img_slideList.firstElementChild;
            let ingredientProduct_4_img_slide_cloneFisrst = ingredientProduct_4_img_slide_fisrstChild.cloneNode(true);
            let ingredientProduct_4_img_slide_lastChild = ingredientProduct_4_img_slideList.lastElementChild;
            let ingredientProduct_4_img_slide_cloneLast = ingredientProduct_4_img_slide_lastChild.cloneNode(true);
            // clone 만들기

            // 만든 clone 껴넣기
            ingredientProduct_4_text_slideList.appendChild(ingredientProduct_4_text_slide_cloneFisrst);
            ingredientProduct_4_text_slideList.insertBefore(ingredientProduct_4_text_slide_cloneLast, ingredientProduct_4_text_slideList.firstElementChild);

            ingredientProduct_4_img_slideList.appendChild(ingredientProduct_4_img_slide_cloneFisrst);
            ingredientProduct_4_img_slideList.insertBefore(ingredientProduct_4_img_slide_cloneLast, ingredientProduct_4_img_slideList.firstElementChild);
            // 만든 clone 껴넣기
            ingredientProduct4_Clone = true;
        }

        // ul list 원위치로 설정
        if(mql_1.matches){
            ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_text_slideWidth * (ingredientProduct_4_startNum + 1)) + "px, 0px, 0px)";
        }else if(mql_2.matches){
            ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_text_slideWidth * (ingredientProduct_4_startNum + 1)) + "px, 0px, 0px)";
        }else if(mql_3.matches){
            ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_text_slideWidth * (ingredientProduct_4_startNum + 1)) + "%, 0px, 0px)";
        }
        ingredientProduct_4_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_img_slideWidth * (ingredientProduct_4_startNum + 1)) + "%, 0px, 0px)";
        // ul list 원위치로 설정

        // index 변수 설정과 class 지정
        let ingredientProduct_4_text_slide_curIndex = ingredientProduct_4_startNum;
        let ingredientProduct_4_text_curSlide = ingredientProduct_4_text_slideContents[ingredientProduct_4_text_slide_curIndex];
        ingredientProduct_4_text_curSlide.classList.add("ingredientProduct_4_text_slide_active");

        let ingredientProduct_4_img_slide_curIndex = ingredientProduct_4_img_startNum;
        let ingredientProduct_4_img_curSlide = ingredientProduct_4_img_slideContents[ingredientProduct_4_img_slide_curIndex];
        ingredientProduct_4_img_curSlide.classList.add("showproduct_explanation");
        // index 변수 설정과 class 지정

        // 클릭 이벤트 설정 
        var ingredientProduct_4_autoSlide = setInterval(function (){
            if(ingredientProduct_4_text_slide_curIndex <= ingredientProduct_4_slideLen - 1){
                ingredientProduct_4_text_slideList.style.transition = ingredientProduct_4_slideSpeed + "ms";
                ingredientProduct_4_img_slideList.style.transition = ingredientProduct_4_slideSpeed + "ms";

                if(mql_1.matches){
                    ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_text_slideWidth * (ingredientProduct_4_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_2.matches){
                    ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_text_slideWidth * (ingredientProduct_4_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_3.matches){
                    ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_text_slideWidth * (ingredientProduct_4_text_slide_curIndex + 2)) + "%, 0px, 0px)";
                }
                ingredientProduct_4_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_img_slideWidth * (ingredientProduct_4_img_slide_curIndex + 2)) + "%, 0px, 0px)";
            }if(ingredientProduct_4_text_slide_curIndex === ingredientProduct_4_slideLen - 1){
                setTimeout(function(){
                    ingredientProduct_4_text_slideList.style.transition = "0ms";
                    ingredientProduct_4_img_slideList.style.transition = "0ms";

                    if(mql_1.matches){
                        ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + ingredientProduct_4_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_2.matches){
                        ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + ingredientProduct_4_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_3.matches){
                        ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + ingredientProduct_4_text_slideWidth + "%, 0px, 0px)";
                    }
                    ingredientProduct_4_img_slideList.style.transform = "translate3d(-" + ingredientProduct_4_img_slideWidth + "%, 0px, 0px)";
                }, ingredientProduct_4_slideSpeed);
                ingredientProduct_4_text_slide_curIndex = -1;
                ingredientProduct_4_img_slide_curIndex = -1;
            }
            ingredientProduct_4_text_curSlide.classList.remove('ingredientProduct_4_text_slide_active');
            ingredientProduct_4_text_curSlide = ingredientProduct_4_text_slideContents[++ingredientProduct_4_text_slide_curIndex];
            ingredientProduct_4_text_curSlide.classList.add('ingredientProduct_4_text_slide_active');

            ingredientProduct_4_img_curSlide.classList.remove('showproduct_explanation');
            ingredientProduct_4_img_curSlide = ingredientProduct_4_img_slideContents[++ingredientProduct_4_img_slide_curIndex];
            ingredientProduct_4_img_curSlide.classList.add('showproduct_explanation');
        }, 5000);

        ingredientProduct_4_slide_btnNext.addEventListener("click", function(){
            clearInterval(ingredientProduct_4_autoSlide);

            if(ingredientProduct_4_text_slide_curIndex <= ingredientProduct_4_slideLen - 1){
                ingredientProduct_4_text_slideList.style.transition = ingredientProduct_4_slideSpeed + "ms";
                ingredientProduct_4_img_slideList.style.transition = ingredientProduct_4_slideSpeed + "ms";

                if(mql_1.matches){
                    ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_text_slideWidth * (ingredientProduct_4_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_2.matches){
                    ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_text_slideWidth * (ingredientProduct_4_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_3.matches){
                    ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_text_slideWidth * (ingredientProduct_4_text_slide_curIndex + 2)) + "%, 0px, 0px)";
                }
                ingredientProduct_4_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_img_slideWidth * (ingredientProduct_4_img_slide_curIndex + 2)) + "%, 0px, 0px)";
            }if(ingredientProduct_4_text_slide_curIndex === ingredientProduct_4_slideLen - 1){
                setTimeout(function(){
                    ingredientProduct_4_text_slideList.style.transition = "0ms";
                    ingredientProduct_4_img_slideList.style.transition = "0ms";

                    if(mql_1.matches){
                        ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + ingredientProduct_4_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_2.matches){
                        ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + ingredientProduct_4_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_3.matches){
                        ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + ingredientProduct_4_text_slideWidth + "%, 0px, 0px)";
                    }
                    ingredientProduct_4_img_slideList.style.transform = "translate3d(-" + ingredientProduct_4_img_slideWidth + "%, 0px, 0px)";
                }, ingredientProduct_4_slideSpeed);
                ingredientProduct_4_text_slide_curIndex = -1;
                ingredientProduct_4_img_slide_curIndex = -1;
            }
            ingredientProduct_4_text_curSlide.classList.remove('ingredientProduct_4_text_slide_active');
            ingredientProduct_4_text_curSlide = ingredientProduct_4_text_slideContents[++ingredientProduct_4_text_slide_curIndex];
            ingredientProduct_4_text_curSlide.classList.add('ingredientProduct_4_text_slide_active');

            ingredientProduct_4_img_curSlide.classList.remove('showproduct_explanation');
            ingredientProduct_4_img_curSlide = ingredientProduct_4_img_slideContents[++ingredientProduct_4_img_slide_curIndex];
            ingredientProduct_4_img_curSlide.classList.add('showproduct_explanation');
        });

        ingredientProduct_4_slide_btnPrev.addEventListener("click", function(){
            clearInterval(ingredientProduct_4_autoSlide);
            
            if(ingredientProduct_4_text_slide_curIndex >= 0){
                ingredientProduct_4_text_slideList.style.transition = ingredientProduct_4_slideSpeed + "ms";
                ingredientProduct_4_img_slideList.style.transition = ingredientProduct_4_slideSpeed + "ms";

                if(mql_1.matches){
                    ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_text_slideWidth * ingredientProduct_4_text_slide_curIndex) + "px, 0px, 0px)";
                }else if(mql_2.matches){
                    ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_text_slideWidth * ingredientProduct_4_text_slide_curIndex) + "px, 0px, 0px)";
                }else if(mql_3.matches){
                    ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_text_slideWidth * ingredientProduct_4_text_slide_curIndex) + "%, 0px, 0px)";
                }
                ingredientProduct_4_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_img_slideWidth * ingredientProduct_4_img_slide_curIndex) + "%, 0px, 0px)";
            }if(ingredientProduct_4_text_slide_curIndex === 0){
                setTimeout(function(){
                    ingredientProduct_4_text_slideList.style.transition = "0ms";
                    ingredientProduct_4_img_slideList.style.transition = "0ms";

                    if(mql_1.matches){
                        ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_text_slideWidth * ingredientProduct_4_slideLen) + "px, 0px, 0px)";
                    }else if(mql_2.matches){
                        ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_text_slideWidth * ingredientProduct_4_slideLen) + "px, 0px, 0px)";
                    }else if(mql_3.matches){
                        ingredientProduct_4_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_text_slideWidth * ingredientProduct_4_slideLen) + "%, 0px, 0px)";
                    }
                    ingredientProduct_4_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_4_img_slideWidth * ingredientProduct_4_slideLen) + "%, 0px, 0px)";
                }, ingredientProduct_4_slideSpeed);
                ingredientProduct_4_text_slide_curIndex = ingredientProduct_4_slideLen;
                ingredientProduct_4_img_slide_curIndex = ingredientProduct_4_slideLen;
            }
            ingredientProduct_4_text_curSlide.classList.remove('ingredientProduct_4_text_slide_active');
            ingredientProduct_4_text_curSlide = ingredientProduct_4_text_slideContents[--ingredientProduct_4_text_slide_curIndex];
            ingredientProduct_4_text_curSlide.classList.add('ingredientProduct_4_text_slide_active');

            ingredientProduct_4_img_curSlide.classList.remove('showproduct_explanation');
            ingredientProduct_4_img_curSlide = ingredientProduct_4_img_slideContents[--ingredientProduct_4_img_slide_curIndex];
            ingredientProduct_4_img_curSlide.classList.add('showproduct_explanation');
        });
        // 클릭 이벤트 설정 
        // Slide 4



        // Slide 5
        // 변수명 설정
        const ingredientProduct_5_text_slideList = document.querySelector(".ingredientProduct_5_text_slideList");
        const ingredientProduct_5_img_slideList = document.querySelector(".ingredientProduct_5_img_slideList");
        const ingredientProduct_5_text_slideContents = document.querySelectorAll(".ingredientProduct_5_text_slideContents");
        const ingredientProduct_5_img_slideContents = document.querySelectorAll(".ingredientProduct_5_img_slideContents");
        const ingredientProduct_5_slide_btnPrev = document.querySelector(".ingredientProduct_5_slide_btnPrev");
        const ingredientProduct_5_slide_btnNext = document.querySelector(".ingredientProduct_5_slide_btnNext");
        const ingredientProduct_5_slideLen = ingredientProduct_5_text_slideContents.length;
        if(mql_1.matches){
            var ingredientProduct_5_text_slideWidth = 320;
        }else if(mql_2.matches){
            var ingredientProduct_5_text_slideWidth = 300;
        }else if(mql_3.matches){
            var ingredientProduct_5_text_slideUlWidth = 100;
            var ingredientProduct_5_text_slideWidth = 25;
        }
        const ingredientProduct_5_img_slideUlWidth = 50;
        const ingredientProduct_5_img_slideWidth = 25;
        const ingredientProduct_5_slideSpeed = 1000;
        const ingredientProduct_5_startNum = 0;
        const ingredientProduct_5_img_startNum = 0;
        // 변수명 설정

        // ullist width 설정
        if(mql_1.matches){
            ingredientProduct_5_text_slideList.style.width = ingredientProduct_5_text_slideWidth * (ingredientProduct_5_slideLen+2) + "px";
        }else if(mql_2.matches){
            ingredientProduct_5_text_slideList.style.width = ingredientProduct_5_text_slideWidth * (ingredientProduct_5_slideLen+2) + "px";
        }else if(mql_3.matches){
            ingredientProduct_5_text_slideList.style.width = ingredientProduct_5_text_slideUlWidth * (ingredientProduct_5_slideLen+2) + "%";
        }
        ingredientProduct_5_img_slideList.style.width = ingredientProduct_5_img_slideUlWidth * (ingredientProduct_5_slideLen+2) + "%";
        // ullist width 설정

        if(!ingredientProduct5_Clone){
            // clone 만들기
            let ingredientProduct_5_text_slide_fisrstChild = ingredientProduct_5_text_slideList.firstElementChild;
            let ingredientProduct_5_text_slide_cloneFisrst = ingredientProduct_5_text_slide_fisrstChild.cloneNode(true);
            let ingredientProduct_5_text_slide_lastChild = ingredientProduct_5_text_slideList.lastElementChild;
            let ingredientProduct_5_text_slide_cloneLast = ingredientProduct_5_text_slide_lastChild.cloneNode(true);

            let ingredientProduct_5_img_slide_fisrstChild = ingredientProduct_5_img_slideList.firstElementChild;
            let ingredientProduct_5_img_slide_cloneFisrst = ingredientProduct_5_img_slide_fisrstChild.cloneNode(true);
            let ingredientProduct_5_img_slide_lastChild = ingredientProduct_5_img_slideList.lastElementChild;
            let ingredientProduct_5_img_slide_cloneLast = ingredientProduct_5_img_slide_lastChild.cloneNode(true);
            // clone 만들기

            // 만든 clone 껴넣기
            ingredientProduct_5_text_slideList.appendChild(ingredientProduct_5_text_slide_cloneFisrst);
            ingredientProduct_5_text_slideList.insertBefore(ingredientProduct_5_text_slide_cloneLast, ingredientProduct_5_text_slideList.firstElementChild);

            ingredientProduct_5_img_slideList.appendChild(ingredientProduct_5_img_slide_cloneFisrst);
            ingredientProduct_5_img_slideList.insertBefore(ingredientProduct_5_img_slide_cloneLast, ingredientProduct_5_img_slideList.firstElementChild);
            // 만든 clone 껴넣기
            ingredientProduct5_Clone = true;
        }

        // ul list 원위치로 설정
        if(mql_1.matches){
            ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_text_slideWidth * (ingredientProduct_5_startNum + 1)) + "px, 0px, 0px)";
        }else if(mql_2.matches){
            ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_text_slideWidth * (ingredientProduct_5_startNum + 1)) + "px, 0px, 0px)";
        }else if(mql_3.matches){
            ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_text_slideWidth * (ingredientProduct_5_startNum + 1)) + "%, 0px, 0px)";
        }
        ingredientProduct_5_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_img_slideWidth * (ingredientProduct_5_startNum + 1)) + "%, 0px, 0px)";
        // ul list 원위치로 설정

        // index 변수 설정과 class 지정
        let ingredientProduct_5_text_slide_curIndex = ingredientProduct_5_startNum;
        let ingredientProduct_5_text_curSlide = ingredientProduct_5_text_slideContents[ingredientProduct_5_text_slide_curIndex];
        ingredientProduct_5_text_curSlide.classList.add("ingredientProduct_5_text_slide_active");

        let ingredientProduct_5_img_slide_curIndex = ingredientProduct_5_img_startNum;
        let ingredientProduct_5_img_curSlide = ingredientProduct_5_img_slideContents[ingredientProduct_5_img_slide_curIndex];
        ingredientProduct_5_img_curSlide.classList.add("showproduct_explanation");
        // index 변수 설정과 class 지정

        // 클릭 이벤트 설정 
        var ingredientProduct_5_autoSlide = setInterval(function (){
            if(ingredientProduct_5_text_slide_curIndex <= ingredientProduct_5_slideLen - 1){
                ingredientProduct_5_text_slideList.style.transition = ingredientProduct_5_slideSpeed + "ms";
                ingredientProduct_5_img_slideList.style.transition = ingredientProduct_5_slideSpeed + "ms";

                if(mql_1.matches){
                    ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_text_slideWidth * (ingredientProduct_5_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_2.matches){
                    ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_text_slideWidth * (ingredientProduct_5_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_3.matches){
                    ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_text_slideWidth * (ingredientProduct_5_text_slide_curIndex + 2)) + "%, 0px, 0px)";
                }
                ingredientProduct_5_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_img_slideWidth * (ingredientProduct_5_img_slide_curIndex + 2)) + "%, 0px, 0px)";
            }if(ingredientProduct_5_text_slide_curIndex === ingredientProduct_5_slideLen - 1){
                setTimeout(function(){
                    ingredientProduct_5_text_slideList.style.transition = "0ms";
                    ingredientProduct_5_img_slideList.style.transition = "0ms";

                    if(mql_1.matches){
                        ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + ingredientProduct_5_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_2.matches){
                        ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + ingredientProduct_5_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_3.matches){
                        ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + ingredientProduct_5_text_slideWidth + "%, 0px, 0px)";
                    }
                    ingredientProduct_5_img_slideList.style.transform = "translate3d(-" + ingredientProduct_5_img_slideWidth + "%, 0px, 0px)";
                }, ingredientProduct_5_slideSpeed);
                ingredientProduct_5_text_slide_curIndex = -1;
                ingredientProduct_5_img_slide_curIndex = -1;
            }
            ingredientProduct_5_text_curSlide.classList.remove('ingredientProduct_5_text_slide_active');
            ingredientProduct_5_text_curSlide = ingredientProduct_5_text_slideContents[++ingredientProduct_5_text_slide_curIndex];
            ingredientProduct_5_text_curSlide.classList.add('ingredientProduct_5_text_slide_active');

            ingredientProduct_5_img_curSlide.classList.remove('showproduct_explanation');
            ingredientProduct_5_img_curSlide = ingredientProduct_5_img_slideContents[++ingredientProduct_5_img_slide_curIndex];
            ingredientProduct_5_img_curSlide.classList.add('showproduct_explanation');
        }, 5000);

        ingredientProduct_5_slide_btnNext.addEventListener("click", function(){
            clearInterval(ingredientProduct_5_autoSlide);

            if(ingredientProduct_5_text_slide_curIndex <= ingredientProduct_5_slideLen - 1){
                ingredientProduct_5_text_slideList.style.transition = ingredientProduct_5_slideSpeed + "ms";
                ingredientProduct_5_img_slideList.style.transition = ingredientProduct_5_slideSpeed + "ms";

                if(mql_1.matches){
                    ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_text_slideWidth * (ingredientProduct_5_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_2.matches){
                    ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_text_slideWidth * (ingredientProduct_5_text_slide_curIndex + 2)) + "px, 0px, 0px)";
                }else if(mql_3.matches){
                    ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_text_slideWidth * (ingredientProduct_5_text_slide_curIndex + 2)) + "%, 0px, 0px)";
                }
                ingredientProduct_5_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_img_slideWidth * (ingredientProduct_5_img_slide_curIndex + 2)) + "%, 0px, 0px)";
            }if(ingredientProduct_5_text_slide_curIndex === ingredientProduct_5_slideLen - 1){
                setTimeout(function(){
                    ingredientProduct_5_text_slideList.style.transition = "0ms";
                    ingredientProduct_5_img_slideList.style.transition = "0ms";

                    if(mql_1.matches){
                        ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + ingredientProduct_5_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_2.matches){
                        ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + ingredientProduct_5_text_slideWidth + "px, 0px, 0px)";
                    }else if(mql_3.matches){
                        ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + ingredientProduct_5_text_slideWidth + "%, 0px, 0px)";
                    }
                    ingredientProduct_5_img_slideList.style.transform = "translate3d(-" + ingredientProduct_5_img_slideWidth + "%, 0px, 0px)";
                }, ingredientProduct_5_slideSpeed);
                ingredientProduct_5_text_slide_curIndex = -1;
                ingredientProduct_5_img_slide_curIndex = -1;
            }
            ingredientProduct_5_text_curSlide.classList.remove('ingredientProduct_5_text_slide_active');
            ingredientProduct_5_text_curSlide = ingredientProduct_5_text_slideContents[++ingredientProduct_5_text_slide_curIndex];
            ingredientProduct_5_text_curSlide.classList.add('ingredientProduct_5_text_slide_active');

            ingredientProduct_5_img_curSlide.classList.remove('showproduct_explanation');
            ingredientProduct_5_img_curSlide = ingredientProduct_5_img_slideContents[++ingredientProduct_5_img_slide_curIndex];
            ingredientProduct_5_img_curSlide.classList.add('showproduct_explanation');
        });

        ingredientProduct_5_slide_btnPrev.addEventListener("click", function(){
            clearInterval(ingredientProduct_5_autoSlide);
            
            if(ingredientProduct_5_text_slide_curIndex >= 0){
                ingredientProduct_5_text_slideList.style.transition = ingredientProduct_5_slideSpeed + "ms";
                ingredientProduct_5_img_slideList.style.transition = ingredientProduct_5_slideSpeed + "ms";

                if(mql_1.matches){
                    ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_text_slideWidth * ingredientProduct_5_text_slide_curIndex) + "px, 0px, 0px)";
                }else if(mql_2.matches){
                    ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_text_slideWidth * ingredientProduct_5_text_slide_curIndex) + "px, 0px, 0px)";
                }else if(mql_3.matches){
                    ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_text_slideWidth * ingredientProduct_5_text_slide_curIndex) + "%, 0px, 0px)";
                }
                ingredientProduct_5_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_img_slideWidth * ingredientProduct_5_img_slide_curIndex) + "%, 0px, 0px)";
            }if(ingredientProduct_5_text_slide_curIndex === 0){
                setTimeout(function(){
                    ingredientProduct_5_text_slideList.style.transition = "0ms";
                    ingredientProduct_5_img_slideList.style.transition = "0ms";

                    if(mql_1.matches){
                        ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_text_slideWidth * ingredientProduct_5_slideLen) + "px, 0px, 0px)";
                    }else if(mql_2.matches){
                        ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_text_slideWidth * ingredientProduct_5_slideLen) + "px, 0px, 0px)";
                    }else if(mql_3.matches){
                        ingredientProduct_5_text_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_text_slideWidth * ingredientProduct_5_slideLen) + "%, 0px, 0px)";
                    }
                    ingredientProduct_5_img_slideList.style.transform = "translate3d(-" + (ingredientProduct_5_img_slideWidth * ingredientProduct_5_slideLen) + "%, 0px, 0px)";
                }, ingredientProduct_5_slideSpeed);
                ingredientProduct_5_text_slide_curIndex = ingredientProduct_5_slideLen;
                ingredientProduct_5_img_slide_curIndex = ingredientProduct_5_slideLen;
            }
            ingredientProduct_5_text_curSlide.classList.remove('ingredientProduct_5_text_slide_active');
            ingredientProduct_5_text_curSlide = ingredientProduct_5_text_slideContents[--ingredientProduct_5_text_slide_curIndex];
            ingredientProduct_5_text_curSlide.classList.add('ingredientProduct_5_text_slide_active');

            ingredientProduct_5_img_curSlide.classList.remove('showproduct_explanation');
            ingredientProduct_5_img_curSlide = ingredientProduct_5_img_slideContents[--ingredientProduct_5_img_slide_curIndex];
            ingredientProduct_5_img_curSlide.classList.add('showproduct_explanation');
        });
        // 클릭 이벤트 설정 
        // Slide 5
    }
});