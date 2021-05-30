$(document).ready(function(){
    var mql_1 = window.matchMedia("screen and (max-width : 767px)");
    var mql_2 = window.matchMedia("screen and (min-width : 1024px)");
    var mql_3 = window.matchMedia("screen and (min-width:768px) and (max-width:1023px)");
    var mql_4 = window.matchMedia("screen and (max-width : 767px)");

    var main_visualClone = false;
    var main_brandStoryClone = false;
    var main_whatsNewClone = false;

    mainSizeEvent();

    var resizeTimer;
    

    $(window).bind('resize', function( ) {
        window.clearTimeout( resizeTimer );
        resizeTimer = window.setTimeout( resizeFunction, 500 );
    });
    function resizeFunction(){
    //리사이즈시 실행할 코드
        window.location.reload();
    }

    function mainSizeEvent (){


        if(mql_1.matches){
            var reactive_visual = true;
        }else{
            var reactive_visual = false;
        }
        
        // ---------------------- main_visual
        // 변수명 설정
        const mainVisual_1_slideList = document.querySelector('.mainvisual_1_slidelist');
        const mainVisual_1_slideContents = document.querySelectorAll('.mainvisual_1_slidecontent');
        const mainVisual_2_slideList = document.querySelector('.mainvisual_2_slidelist');
        const mainVisual_2_slideContents = document.querySelectorAll('.mainvisual_2_slidecontent');
        const mainVisual_3_slideList = document.querySelector('.mainvisual_3_slidelist');
        const mainVisual_3_slideContents = document.querySelectorAll('.mainvisual_3_slidecontent');
        const mainVisual_slide_btnPrev = document.querySelector('.mainvisual_slide_btn_prev');
        const mainVisual_slide_btnNext = document.querySelector('.mainvisual_slide_btn_next');
        const mainVisual_slideLen = mainVisual_1_slideContents.length;
        if(reactive_visual === true){
            var mainVisual_slideWidth = 100;
        }else{
            var mainVisual_slideWidth = 50;
        }
        const mainVisual_slideHeight = 100;
        const mainVisual_slideSpeed = 1000;
        const mainVisual_slide_1_startNum = 0;
        const mainVisual_slide_2_startNum = 0;
        const mainVisual_slide_3_startNum = 0;
        // 변수명 설정
        
        // ullist width 설정
        mainVisual_1_slideList.style.width = mainVisual_slideWidth * (7) + "vw";
        mainVisual_2_slideList.style.width = mainVisual_slideWidth * (7) + "vw";
        // ullist width 설정
    
        if (!main_visualClone) {
        // clone 만들기
            let mainVisual_1_slide_fisrstChild = mainVisual_1_slideList.firstElementChild;
            let mainVisual_1_slide_cloneFisrst = mainVisual_1_slide_fisrstChild.cloneNode(true);
            let mainVisual_1_slide_lastChild = mainVisual_1_slideList.lastElementChild;
            let mainVisual_1_slide_cloneLast = mainVisual_1_slide_lastChild.cloneNode(true);
            let mainVisual_2_slide_firstClild = mainVisual_2_slideList.firstElementChild;
            let mainVisual_2_slide_cloneFirst = mainVisual_2_slide_firstClild.cloneNode(true);
            let mainVisual_2_slide_lastClild = mainVisual_2_slideList.lastElementChild;
            let mainVisual_2_slide_cloneLast = mainVisual_2_slide_lastClild.cloneNode(true);
            let mainVisual_3_slide_firstClild = mainVisual_3_slideList.firstElementChild;
            let mainVisual_3_slide_cloneFirst = mainVisual_3_slide_firstClild.cloneNode(true);
            let mainVisual_3_slide_lastClild = mainVisual_3_slideList.lastElementChild;
            let mainVisual_3_slide_cloneLast = mainVisual_3_slide_lastClild.cloneNode(true);
            // clone 만들기
        
            // 만든 clone 껴넣기
            mainVisual_1_slideList.appendChild(mainVisual_1_slide_cloneFisrst);
            mainVisual_1_slideList.insertBefore(mainVisual_1_slide_cloneLast, mainVisual_1_slideList.firstElementChild);
            mainVisual_2_slideList.appendChild(mainVisual_2_slide_cloneFirst);
            mainVisual_2_slideList.insertBefore(mainVisual_2_slide_cloneLast, mainVisual_2_slideList.firstElementChild);
            mainVisual_3_slideList.appendChild(mainVisual_3_slide_cloneFirst);
            mainVisual_3_slideList.insertBefore(mainVisual_3_slide_cloneLast, mainVisual_3_slideList.firstElementChild);
            // 만든 clone 껴넣기

            main_visualClone = true;
        }
    
        // ul list 원위치로 설정 
        mainVisual_1_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * (mainVisual_slide_1_startNum + 1)) + "vw, 0px, 0px)";
        mainVisual_2_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * (mainVisual_slide_1_startNum + 1)) + "vw, 0px, 0px)";
        mainVisual_3_slideList.style.transform = "translate3d(0px, -" + (mainVisual_slideHeight * (mainVisual_slide_1_startNum + 1)) + "%,  0px)";
        // ul list 원위치로 설정 
    
        // index 변수 설정과 class 지정
        let mainVisual_1_slide_curIndex = mainVisual_slide_1_startNum;
        let mainVisual_1_curSlide = mainVisual_1_slideContents[mainVisual_1_slide_curIndex];
        mainVisual_1_curSlide.classList.add('mainVisual_1_slide_active');
    
        let mainVisual_2_slide_curIndex = mainVisual_slide_2_startNum;
        let mainVisual_2_curSlide = mainVisual_2_slideContents[mainVisual_2_slide_curIndex];
        mainVisual_2_curSlide.classList.add('mainVisual_2_slide_active');
    
        let mainVisual_3_slide_curIndex = mainVisual_slide_3_startNum;
        let mainVisual_3_curSlide = mainVisual_3_slideContents[mainVisual_3_slide_curIndex];
        mainVisual_3_curSlide.classList.add('mainVisual_3_slide_active');
        // index 변수 설정과 class 지정

        // 자동 슬라이드
        var mainVisual_autoslide = setInterval(function (){
            if(mainVisual_1_slide_curIndex <= mainVisual_slideLen - 1){
                mainVisual_1_slideList.style.transition = mainVisual_slideSpeed + "ms";
                mainVisual_2_slideList.style.transition = mainVisual_slideSpeed + "ms";
                mainVisual_3_slideList.style.transition = mainVisual_slideSpeed + "ms";
    
                mainVisual_1_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * (mainVisual_1_slide_curIndex + 2)) + "vw, 0px, 0px)";
                mainVisual_2_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * (mainVisual_2_slide_curIndex + 2)) + "vw, 0px, 0px)";
                mainVisual_3_slideList.style.transform = "translate3d(0px, -" + (mainVisual_slideHeight * (mainVisual_3_slide_curIndex + 2)) + "%, 0px)";
            }if(mainVisual_1_slide_curIndex === mainVisual_slideLen - 1){
                setTimeout(function(){
                    mainVisual_1_slideList.style.transition = "0ms";
                    mainVisual_2_slideList.style.transition = "0ms";
                    mainVisual_3_slideList.style.transition = "0ms";
    
                    mainVisual_1_slideList.style.transform = "translate3d(-" + mainVisual_slideWidth + "vw, 0px, 0px)";
                    mainVisual_2_slideList.style.transform = "translate3d(-" + mainVisual_slideWidth + "vw, 0px, 0px)";
                    mainVisual_3_slideList.style.transform = "translate3d(0px, -" + mainVisual_slideHeight + "%, 0px)";
                }, mainVisual_slideSpeed);
                mainVisual_1_slide_curIndex = -1;
                mainVisual_2_slide_curIndex = -1;
                mainVisual_3_slide_curIndex = -1;
            }
            mainVisual_1_curSlide.classList.remove('mainVisual_1_slide_active');
            mainVisual_2_curSlide.classList.remove('mainVisual_2_slide_active');
            mainVisual_3_curSlide.classList.remove('mainVisual_3_slide_active');
            mainVisual_1_curSlide = mainVisual_1_slideContents[++mainVisual_1_slide_curIndex];
            mainVisual_2_curSlide = mainVisual_2_slideContents[++mainVisual_2_slide_curIndex];
            mainVisual_3_curSlide = mainVisual_3_slideContents[++mainVisual_3_slide_curIndex];
            mainVisual_1_curSlide.classList.add('mainVisual_1_slide_active');
            mainVisual_2_curSlide.classList.add('mainVisual_2_slide_active');
            mainVisual_3_curSlide.classList.add('mainVisual_3_slide_active');
       }, 5000);
    
        // 자동 슬라이드
    
    
        // 클릭 이벤트 설정
        mainVisual_slide_btnNext.addEventListener('click', function(){
            clearInterval(mainVisual_autoslide);
            if(mainVisual_1_slide_curIndex <= mainVisual_slideLen - 1){
                mainVisual_1_slideList.style.transition = mainVisual_slideSpeed + "ms";
                mainVisual_2_slideList.style.transition = mainVisual_slideSpeed + "ms";
                mainVisual_3_slideList.style.transition = mainVisual_slideSpeed + "ms";
    
                mainVisual_1_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * (mainVisual_1_slide_curIndex + 2)) + "vw, 0px, 0px)";
                mainVisual_2_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * (mainVisual_1_slide_curIndex + 2)) + "vw, 0px, 0px)";
                mainVisual_3_slideList.style.transform = "translate3d(0px, -" + (mainVisual_slideHeight * (mainVisual_1_slide_curIndex + 2)) + "%, 0px)";
            }if(mainVisual_1_slide_curIndex === mainVisual_slideLen - 1){
                setTimeout(function(){
                    mainVisual_1_slideList.style.transition = "0ms";
                    mainVisual_2_slideList.style.transition = "0ms";
                    mainVisual_3_slideList.style.transition = "0ms";
    
                    mainVisual_1_slideList.style.transform = "translate3d(-" + mainVisual_slideWidth + "vw, 0px, 0px)";
                    mainVisual_2_slideList.style.transform = "translate3d(-" + mainVisual_slideWidth + "vw, 0px, 0px)";
                    mainVisual_3_slideList.style.transform = "translate3d(0px, -" + mainVisual_slideHeight + "%, 0px)";
                }, mainVisual_slideSpeed);
                mainVisual_1_slide_curIndex = -1;
                mainVisual_2_slide_curIndex = -1;
                mainVisual_3_slide_curIndex = -1;
            }
            mainVisual_1_curSlide.classList.remove('mainVisual_1_slide_active');
            mainVisual_2_curSlide.classList.remove('mainVisual_2_slide_active');
            mainVisual_3_curSlide.classList.remove('mainVisual_3_slide_active');
            mainVisual_1_curSlide = mainVisual_1_slideContents[++mainVisual_1_slide_curIndex];
            mainVisual_2_curSlide = mainVisual_2_slideContents[++mainVisual_2_slide_curIndex];
            mainVisual_3_curSlide = mainVisual_3_slideContents[++mainVisual_3_slide_curIndex];
            mainVisual_1_curSlide.classList.add('mainVisual_1_slide_active');
            mainVisual_2_curSlide.classList.add('mainVisual_2_slide_active');
            mainVisual_3_curSlide.classList.add('mainVisual_3_slide_active');
        });
    
        mainVisual_slide_btnPrev.addEventListener('click', function(){
            clearInterval(mainVisual_autoslide);
            if(mainVisual_1_slide_curIndex >= 0){
                mainVisual_1_slideList.style.transition = mainVisual_slideSpeed + "ms";
                mainVisual_2_slideList.style.transition = mainVisual_slideSpeed + "ms";
                mainVisual_3_slideList.style.transition = mainVisual_slideSpeed + "ms";
    
                mainVisual_1_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * mainVisual_1_slide_curIndex) + "vw, 0px, 0px)";
                mainVisual_2_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * mainVisual_1_slide_curIndex) + "vw, 0px, 0px)";
                mainVisual_3_slideList.style.transform = "translate3d(0px, -" + (mainVisual_slideHeight * mainVisual_1_slide_curIndex) + "%, 0px)";
            }if(mainVisual_1_slide_curIndex === 0){
                setTimeout(function(){ //셋 타임아웃으로 함수 실행
                    mainVisual_1_slideList.style.transition = "0ms";
                    mainVisual_2_slideList.style.transition = "0ms";
                    mainVisual_3_slideList.style.transition = "0ms";
    
                    mainVisual_1_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * mainVisual_slideLen) + "vw, 0px, 0px)";
                    mainVisual_2_slideList.style.transform = "translate3d(-" + (mainVisual_slideWidth * mainVisual_slideLen) + "vw, 0px, 0px)";
                    mainVisual_3_slideList.style.transform = "translate3d(0px, -" + (mainVisual_slideHeight * mainVisual_slideLen) + "%, 0px)";
                }, mainVisual_slideSpeed); //3번 위치로 이동
                mainVisual_1_slide_curIndex = mainVisual_slideLen;
                mainVisual_2_slide_curIndex = mainVisual_slideLen;
                mainVisual_3_slide_curIndex = mainVisual_slideLen;
            }
            mainVisual_1_curSlide.classList.remove('mainVisual_1_slide_active');
            mainVisual_2_curSlide.classList.remove('mainVisual_2_slide_active');
            mainVisual_3_curSlide.classList.remove('mainVisual_3_slide_active');
            mainVisual_1_curSlide = mainVisual_1_slideContents[--mainVisual_1_slide_curIndex];
            mainVisual_2_curSlide = mainVisual_2_slideContents[--mainVisual_2_slide_curIndex];
            mainVisual_3_curSlide = mainVisual_3_slideContents[--mainVisual_3_slide_curIndex];
            mainVisual_1_curSlide.classList.add('mainVisual_1_slide_active');
            mainVisual_2_curSlide.classList.add('mainVisual_2_slide_active');
            mainVisual_3_curSlide.classList.add('mainVisual_3_slide_active');
        });
    
        // 클릭 이벤트 설정
        
    
        // ---------------------- main_visual
    
        // ---------------------- main_brandstory
        const brandStory_slideList = document.querySelector('.brandstory_slidelist');
        const brandStory_slideContents = document.querySelectorAll('.brandstory_slidecontent');
        const brandStory_slide_btnPrev = document.querySelector('.brandstory_slide_btn_prev');
        const brandStory_slide_btnNext = document.querySelector('.brandstory_slide_btn_next');
        const brandStory_slideLen = brandStory_slideContents.length;
        const brandStory_slideWidth = 100;
        const brandStory_slideSpeed = 1000;
        const brandStory_slide_startNum = 0;
    
    
        brandStory_slideList.style.width = brandStory_slideWidth * (5) + "vw"; //ul 전체 크기를 원본 li*3 + 복사본 li*2 > li*5개의 크기
        
        if(!main_brandStoryClone){
        // 복사본 만들기
        let brandStory_slide_firstChild = brandStory_slideList.firstElementChild; //첫번째 꺼 복사본을 변수에 담고
        let brandStory_slide_lastChild = brandStory_slideList.lastElementChild; //마지막 꺼 복사본을 변수에 담고
        let brandStory_slide_clonedFirst = brandStory_slide_firstChild.cloneNode(true); //.cloneNode(true); 인자로 true를 담으면 자식까지 복사
        let brandStory_slide_clonedLast = brandStory_slide_lastChild.cloneNode(true);
    
        // 리스트에 복사본 껴 넣기
        brandStory_slideList.appendChild(brandStory_slide_clonedFirst); //첫번째 li 복사본을 li 리스트 마지막에 껴넣기 > appendChild는 마지막에 넣는다.(괄호 안은 넣고 싶은 선택자)
        brandStory_slideList.insertBefore(brandStory_slide_clonedLast, brandStory_slideList.firstElementChild); //마지막꺼를 리스트 맨 앞에 넣는다. > insertBefore(넣고싶은 선택자, 기준점) > 기준점 앞에다가 넣는다.
            main_brandStoryClone = true;
        }
        // 초기화면 위치 시키기
        brandStory_slideList.style.transform = "translate3d(-" + (brandStory_slideWidth * (brandStory_slide_startNum + 1)) + "vw, 0px, 0px)"; // 3, 1, 2, 3, 1순서니까 첫번째로 보여야 하는 곳이 1번 즉 2번째가 되어야 한다.
        
        // 인덱스 변수 설정하기
        let brandStory_slide_curIndex = brandStory_slide_startNum; //위에서 첫번째 슬라이드는 변수 0임으로  = 0 > 이것을 슬라이드 현재 인덱스라는 변수에 담고
        let brandStory_curSlide = brandStory_slideContents[brandStory_slide_curIndex]; //위에서 설정한 li들 중 [] 인덱스를 넣어 몇번째인지 알수 있도록 변수에 담기
        brandStory_curSlide.classList.add('brandStory_slide_active'); //그렇다면 첫번째로 보여지는 슬라이드에 클래스 명을 준다.
        
    
        // 자동 슬라이드
        // 시간이 되면 이동 / 인덱스 증가
        var brandStory_autoslide = setInterval(function (){
            if(brandStory_slide_curIndex <= brandStory_slideLen - 1){
                brandStory_slideList.style.transition = brandStory_slideSpeed + "ms";
                brandStory_slideList.style.transform = "translate3d(-" + (brandStory_slideWidth * (brandStory_slide_curIndex + 2)) + "vw, 0px, 0px)";
            }if(brandStory_slide_curIndex === brandStory_slideLen -1){
                setTimeout(function(){
                    brandStory_slideList.style.transition = "0ms";
                    brandStory_slideList.style.transform = "translate3d(-" + brandStory_slideWidth + "vw, 0px, 0px)";
                }, brandStory_slideSpeed);
                brandStory_slide_curIndex = -1;
            }
            brandStory_curSlide.classList.remove('brandStory_slide_active');
            brandStory_curSlide = brandStory_slideContents[++brandStory_slide_curIndex];
            brandStory_curSlide.classList.add('brandStory_slide_active');
       }, 5000);
       
        brandStory_slide_btnNext.addEventListener('click',function(){ //다음 버튼을 눌렀을 때 이벤트 효과 발동
            clearInterval(brandStory_autoslide);
    
            if(brandStory_slide_curIndex <= brandStory_slideLen - 1){ //처음 인덱스는 0 / brandStory_slideLen 는 3이고 -1 이니까 2 / 0부터 시작하는 인덱스가 2보다 작거나 같을 때 이동
                brandStory_slideList.style.transition = brandStory_slideSpeed + "ms";
                brandStory_slideList.style.transform = "translate3d(-" + (brandStory_slideWidth * (brandStory_slide_curIndex + 2)) + "vw, 0px, 0px)";
                //리스트는 움직이는데 100vw * 0부터 시작하는 인덱스에 2를 더한 값을 을 곱한 값을 이동한데 / 4,1,2,3,1 5개고 처음이 100vw에서 시작하니까 다음 움직여야하는건 200vw 그래서 2를 더함
            }if(brandStory_slide_curIndex === brandStory_slideLen -1){ //만약에 인덱스가 2랑 같을 때 > 마지막 페이지에서 첫번째 페이지로 이동할 때
                setTimeout(function(){
                    brandStory_slideList.style.transition = "0ms";
                    brandStory_slideList.style.transform = "translate3d(-" + brandStory_slideWidth + "vw, 0px, 0px)";
                }, brandStory_slideSpeed); // 마지막 페이지로 도착하면 0.3초안에 1번 페이지로 이동하기 위해서 처음 기준점인 100vw로 이동해야한다.
                brandStory_slide_curIndex = -1;
                //왜 인덱스를 0이 아닌 -1로하지? > 1에서 2로 이동하는 것이 0이 되어야 하기 때문에
            }
            brandStory_curSlide.classList.remove('brandStory_slide_active'); //현재 페이지의 클래스명을 지운다음
            brandStory_curSlide = brandStory_slideContents[++brandStory_slide_curIndex]; //이벤트 후 인덱스를 추가해야한다.
            brandStory_curSlide.classList.add('brandStory_slide_active'); //해당 인덱스에 클래스 추가
        });
    
        brandStory_slide_btnPrev.addEventListener('click', function(){
            clearInterval(brandStory_autoslide);
            if(brandStory_slide_curIndex >= 0){ //인덱스가 0보다 같더나 작을때 
                brandStory_slideList.style.transition = brandStory_slideSpeed + "ms";
                brandStory_slideList.style.transform = "translate3d(-" + (brandStory_slideWidth * brandStory_slide_curIndex) + "vw, 0px, 0px)";
                //인덱스 위치로 이동
            }
            if(brandStory_slide_curIndex === 0){ // 인덱스가 0이라는 것은 맨 처음 그러니까 3번 li로 왔을 때
                setTimeout(function(){ //셋 타임아웃으로 함수 실행
                    brandStory_slideList.style.transition = "0ms";
                    brandStory_slideList.style.transform = "translate3d(-" + (brandStory_slideWidth * brandStory_slideLen) + "vw, 0px, 0px)";
                }, brandStory_slideSpeed); //3번 위치로 이동
                brandStory_slide_curIndex = brandStory_slideLen; //인덱스를 3으로 변경
            }
            brandStory_curSlide.classList.remove('brandStory_slide_active');
            brandStory_curSlide = brandStory_slideContents[--brandStory_slide_curIndex];
            brandStory_curSlide.classList.add('brandStory_slide_active');
        });
    
        // ---------------------- main_brandstory
    
    
        // ---------------------- main_whatsNew
        // 반응형 가정문
        if(mql_2.matches){
            var reactive_whatsNew = 1;
        }else if(mql_3.matches){
            var reactive_whatsNew = 2;
        }else if(mql_4.matches){
            var reactive_whatsNew = 3;
        }

        // 변수 설정
        const whatsNew_1_slideList = document.querySelector('.main_whatsNew_1_slidelist');
        const whatsNew_2_slideList = document.querySelector('.main_whatsNew_2_slidelist');
        const whatsNew_3_slideList = document.querySelector('.main_whatsNew_3_slidelist');
        const whatsNew_1_slideContents = document.querySelectorAll('.main_whatsNew_1_slidecontent');
        const whatsNew_2_slideContents = document.querySelectorAll('.main_whatsNew_2_slidecontent');
        const whatsNew_3_slideContents = document.querySelectorAll('.main_whatsNew_3_slidecontent');
        const whatsNew_slide_btnPrev = document.querySelector('.main_whatsNew_slide_btn_prev');
        const whatsNew_slide_btnNext = document.querySelector('.main_whatsNew_slide_btn_next');
        const whatsNew_slideLen = whatsNew_1_slideContents.length;
        const whatsNew_1_slideWidth = 100;
        if(reactive_whatsNew === 1){
            var whatsNew_2_slideWidth = 26.3;
            var whatsNew_3_slideWidth = 35.2;
        }else if(reactive_whatsNew === 2){
            var whatsNew_2_slideWidth = 22.3;
            var whatsNew_3_slideWidth = 27.2;
        }else if(reactive_whatsNew === 3){
            var whatsNew_2_slideWidth = 100;
            var whatsNew_3_slideWidth = 0;
        }
        const whatsNew_slideSpeed = 1000;
        const whatsNew_slide_startNum = 0;

        // ul list width 설정
        whatsNew_1_slideList.style.width = whatsNew_1_slideWidth * (5) + "%";
        if(reactive_whatsNew === 3){
            whatsNew_2_slideList.style.width = whatsNew_2_slideWidth * (5) + "vw";
            whatsNew_3_slideList.style.width = whatsNew_3_slideWidth * (5) + "vw";
        }else{
            whatsNew_2_slideList.style.width = whatsNew_2_slideWidth * (5) + "rem";
            whatsNew_3_slideList.style.width = whatsNew_3_slideWidth * (5) + "rem";
        }

        if(!main_whatsNewClone){
        // 복사본 만들기
        let whatsNew_1_slide_firstChild = whatsNew_1_slideList.firstElementChild; //첫번째 꺼 복사본을 변수에 담고
        let whatsNew_1_slide_lastChild = whatsNew_1_slideList.lastElementChild; //마지막 꺼 복사본을 변수에 담고
        let whatsNew_1_slide_clonedFirst = whatsNew_1_slide_firstChild.cloneNode(true); //.cloneNode(true); 인자로 true를 담으면 자식까지 복사
        let whatsNew_1_slide_clonedLast = whatsNew_1_slide_lastChild.cloneNode(true);

        let whatsNew_2_slide_firstChild = whatsNew_2_slideList.firstElementChild;
        let whatsNew_2_slide_lastChild = whatsNew_2_slideList.lastElementChild;
        let whatsNew_2_slide_clonedFirst = whatsNew_2_slide_firstChild.cloneNode(true);
        let whatsNew_2_slide_clonedLast = whatsNew_2_slide_lastChild.cloneNode(true);

        let whatsNew_3_slide_firstChild = whatsNew_3_slideList.firstElementChild;
        let whatsNew_3_slide_lastChild = whatsNew_3_slideList.lastElementChild;
        let whatsNew_3_slide_clonedFirst = whatsNew_3_slide_firstChild.cloneNode(true);
        let whatsNew_3_slide_clonedLast = whatsNew_3_slide_lastChild.cloneNode(true);
    
        // 복사본 껴넣기
        whatsNew_1_slideList.appendChild(whatsNew_1_slide_clonedFirst); //첫번째 li 복사본을 li 리스트 마지막에 껴넣기 > appendChild는 마지막에 넣는다.(괄호 안은 넣고 싶은 선택자)
        whatsNew_1_slideList.insertBefore(whatsNew_1_slide_clonedLast, whatsNew_1_slideList.firstElementChild); //마지막꺼를 리스트 맨 앞에 넣는다. > insertBefore(넣고싶은 선택자, 기준점) > 기준점 앞에다가 넣는다.
        whatsNew_2_slideList.appendChild(whatsNew_2_slide_clonedFirst);
        whatsNew_2_slideList.insertBefore(whatsNew_2_slide_clonedLast, whatsNew_2_slideList.firstElementChild);
        whatsNew_3_slideList.appendChild(whatsNew_3_slide_clonedFirst);
        whatsNew_3_slideList.insertBefore(whatsNew_3_slide_clonedLast, whatsNew_3_slideList.firstElementChild);
            main_whatsNewClone = true;
        }
        // 초기화면 위치시키기
        whatsNew_1_slideList.style.transform = "translate3d(-" + (whatsNew_1_slideWidth * (whatsNew_slide_startNum + 1)) + "vw, 0px, 0px)";
        if(reactive_whatsNew === 3){
            whatsNew_2_slideList.style.transform = "translate3d(-" + (whatsNew_1_slideWidth * (whatsNew_slide_startNum + 1)) + "vw, 0px, 0px)";
        }else{
            whatsNew_2_slideList.style.transform = "translate3d(-" + (whatsNew_2_slideWidth * (whatsNew_slide_startNum + 1)) + "rem, 0px, 0px)";
            whatsNew_3_slideList.style.transform = "translate3d(-" + (whatsNew_3_slideWidth * (whatsNew_slide_startNum + 1)) + "rem, 0px, 0px)";
        }

        // 인덱스 변수 설정하기
        let whatsNew_slide_curIndex = whatsNew_slide_startNum;
        let whatsNew_curSlide = whatsNew_2_slideContents[whatsNew_slide_curIndex];
        whatsNew_curSlide.classList.add('whatsNew_slide_active');

        // 자동 이벤트
        var whatsNew_autoslide = setInterval(function (){
            if(whatsNew_slide_curIndex <= whatsNew_slideLen -1){
                whatsNew_1_slideList.style.transition = whatsNew_slideSpeed + "ms";
                whatsNew_2_slideList.style.transition = whatsNew_slideSpeed + "ms";
                whatsNew_3_slideList.style.transition = whatsNew_slideSpeed + "ms";

                whatsNew_1_slideList.style.transform = "translate3d(-" + (whatsNew_1_slideWidth *(whatsNew_slide_curIndex+2)) + "vw, 0px, 0px)";       
                if(reactive_whatsNew === 3){
                    whatsNew_2_slideList.style.transform = "translate3d(-" + (whatsNew_2_slideWidth *(whatsNew_slide_curIndex+2)) + "vw, 0px, 0px)";
                    whatsNew_3_slideList.style.transform = "translate3d(-" + (whatsNew_3_slideWidth *(whatsNew_slide_curIndex+2)) + "vw, 0px, 0px)";
                }else{
                    whatsNew_2_slideList.style.transform = "translate3d(-" + (whatsNew_2_slideWidth *(whatsNew_slide_curIndex+2)) + "rem, 0px, 0px)";
                    whatsNew_3_slideList.style.transform = "translate3d(-" + (whatsNew_3_slideWidth *(whatsNew_slide_curIndex+2)) + "rem, 0px, 0px)";
                }
            }if(whatsNew_slide_curIndex === whatsNew_slideLen -1){
                setTimeout(function(){
                    whatsNew_1_slideList.style.transition = "0ms";
                    whatsNew_2_slideList.style.transition = "0ms";
                    whatsNew_3_slideList.style.transition = "0ms";

                    whatsNew_1_slideList.style.transform = "translate3d(-"+whatsNew_1_slideWidth+"vw, 0px, 0px)";
                    
                    if(reactive_whatsNew === 3){
                        whatsNew_2_slideList.style.transform = "translate3d(-"+whatsNew_2_slideWidth+"vw, 0px, 0px)";
                        whatsNew_3_slideList.style.transform = "translate3d(-"+whatsNew_3_slideWidth+"vw, 0px, 0px)";
                    }else{
                        whatsNew_2_slideList.style.transform = "translate3d(-"+whatsNew_2_slideWidth+"rem, 0px, 0px)";
                        whatsNew_3_slideList.style.transform = "translate3d(-"+whatsNew_3_slideWidth+"rem, 0px, 0px)";
                    }
                },whatsNew_slideSpeed);
                whatsNew_slide_curIndex = -1;
            }
            whatsNew_curSlide.classList.remove('whatsNew_slide_active');
            whatsNew_curSlide = whatsNew_2_slideContents[++whatsNew_slide_curIndex];
            whatsNew_curSlide.classList.add('whatsNew_slide_active');
        }, 5000);

        // 클릭 이벤트
        whatsNew_slide_btnNext.addEventListener("click",function(){
            clearInterval(whatsNew_autoslide);
            if(whatsNew_slide_curIndex <= whatsNew_slideLen -1){
                whatsNew_1_slideList.style.transition = whatsNew_slideSpeed + "ms";
                whatsNew_2_slideList.style.transition = whatsNew_slideSpeed + "ms";
                whatsNew_3_slideList.style.transition = whatsNew_slideSpeed + "ms";

                whatsNew_1_slideList.style.transform = "translate3d(-" + (whatsNew_1_slideWidth *(whatsNew_slide_curIndex+2)) + "vw, 0px, 0px)";       
                if(reactive_whatsNew === 3){
                    whatsNew_2_slideList.style.transform = "translate3d(-" + (whatsNew_2_slideWidth *(whatsNew_slide_curIndex+2)) + "vw, 0px, 0px)";
                    whatsNew_3_slideList.style.transform = "translate3d(-" + (whatsNew_3_slideWidth *(whatsNew_slide_curIndex+2)) + "vw, 0px, 0px)";
                }else{
                    whatsNew_2_slideList.style.transform = "translate3d(-" + (whatsNew_2_slideWidth *(whatsNew_slide_curIndex+2)) + "rem, 0px, 0px)";
                    whatsNew_3_slideList.style.transform = "translate3d(-" + (whatsNew_3_slideWidth *(whatsNew_slide_curIndex+2)) + "rem, 0px, 0px)";
                }
            }if(whatsNew_slide_curIndex === whatsNew_slideLen -1){
                setTimeout(function(){
                    whatsNew_1_slideList.style.transition = "0ms";
                    whatsNew_2_slideList.style.transition = "0ms";
                    whatsNew_3_slideList.style.transition = "0ms";

                    whatsNew_1_slideList.style.transform = "translate3d(-"+whatsNew_1_slideWidth+"vw, 0px, 0px)";
                    
                    if(reactive_whatsNew === 3){
                        whatsNew_2_slideList.style.transform = "translate3d(-"+whatsNew_2_slideWidth+"vw, 0px, 0px)";
                        whatsNew_3_slideList.style.transform = "translate3d(-"+whatsNew_3_slideWidth+"vw, 0px, 0px)";
                    }else{
                        whatsNew_2_slideList.style.transform = "translate3d(-"+whatsNew_2_slideWidth+"rem, 0px, 0px)";
                        whatsNew_3_slideList.style.transform = "translate3d(-"+whatsNew_3_slideWidth+"rem, 0px, 0px)";
                    }
                },whatsNew_slideSpeed);
                whatsNew_slide_curIndex = -1;
            }
            whatsNew_curSlide.classList.remove('whatsNew_slide_active');
            whatsNew_curSlide = whatsNew_2_slideContents[++whatsNew_slide_curIndex];
            whatsNew_curSlide.classList.add('whatsNew_slide_active');
        });

        whatsNew_slide_btnPrev.addEventListener("click", function(){
            clearInterval(whatsNew_autoslide);
            if(whatsNew_slide_curIndex >= 0){
                whatsNew_1_slideList.style.transition = whatsNew_slideSpeed + "ms";
                whatsNew_2_slideList.style.transition = whatsNew_slideSpeed + "ms";
                whatsNew_3_slideList.style.transition = whatsNew_slideSpeed + "ms";

                whatsNew_1_slideList.style.transform = "translate3d(-" + (whatsNew_1_slideWidth * whatsNew_slide_curIndex) + "vw, 0px, 0px)";
                if(reactive_whatsNew === 3){
                    whatsNew_2_slideList.style.transform = "translate3d(-" + (whatsNew_2_slideWidth * whatsNew_slide_curIndex) + "vw, 0px, 0px)";
                    whatsNew_3_slideList.style.transform = "translate3d(-" + (whatsNew_3_slideWidth * whatsNew_slide_curIndex) + "vw, 0px, 0px)";
                }else{
                    whatsNew_2_slideList.style.transform = "translate3d(-" + (whatsNew_2_slideWidth * whatsNew_slide_curIndex) + "rem, 0px, 0px)";
                    whatsNew_3_slideList.style.transform = "translate3d(-" + (whatsNew_3_slideWidth * whatsNew_slide_curIndex) + "rem, 0px, 0px)";
                }
            }if(whatsNew_slide_curIndex === 0){
                setTimeout(function(){
                    whatsNew_1_slideList.style.transition = "0ms";
                    whatsNew_2_slideList.style.transition = "0ms";
                    whatsNew_3_slideList.style.transition = "0ms";

                    whatsNew_1_slideList.style.transform = "translate3d(-" + (whatsNew_1_slideWidth * whatsNew_slideLen) + "vw, 0px, 0px)";
                    if(reactive_whatsNew === 3){
                        whatsNew_2_slideList.style.transform = "translate3d(-" + (whatsNew_2_slideWidth * whatsNew_slideLen) + "vw, 0px, 0px)";
                        whatsNew_3_slideList.style.transform = "translate3d(-" + (whatsNew_3_slideWidth * whatsNew_slideLen) + "vw, 0px, 0px)";
                    }else{
                        whatsNew_2_slideList.style.transform = "translate3d(-" + (whatsNew_2_slideWidth * whatsNew_slideLen) + "rem, 0px, 0px)";
                        whatsNew_3_slideList.style.transform = "translate3d(-" + (whatsNew_3_slideWidth * whatsNew_slideLen) + "rem, 0px, 0px)";
                    }
                }, whatsNew_slideSpeed); 
                whatsNew_slide_curIndex = whatsNew_slideLen; 
            }
            whatsNew_curSlide.classList.remove('whatsNew_slide_active');
            whatsNew_curSlide = whatsNew_2_slideContents[--whatsNew_slide_curIndex];
            whatsNew_curSlide.classList.add('whatsNew_slide_active');
        });



        // ---------------------- main_whatsNew
    }
    
});