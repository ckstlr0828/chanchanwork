$(document).ready(function(){
    topBtnTopEvent();
    alertproduct();

    function topBtnTopEvent(){
        const topBtn = document.querySelector("#footer_topbtn button");

        topBtn.addEventListener("click", function(){
            window.scrollTo(0,0);
        });
    }

    function alertproduct(){
        const menu_product = document.querySelector(".productclick");
        menu_product.addEventListener("click", function(){
            alert("제품페이지는 준비중입니다. 다른 페이지를 이용해주세요.");
        });
    }
});