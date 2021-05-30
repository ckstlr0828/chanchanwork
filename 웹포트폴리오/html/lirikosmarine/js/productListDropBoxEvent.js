$(document).ready(function(){
    
    const dropBox1Btn = document.querySelector("#dropBox1");
    const dropBox2Btn = document.querySelector("#dropBox2");
    const dropBox3Btn = document.querySelector("#dropBox3");

    const dropBox1BtnLine = document.querySelector("#dropBox1 span");
    const dropBox2BtnLine = document.querySelector("#dropBox2 span");
    const dropBox3BtnLine = document.querySelector("#dropBox3 span");

    let clickOnOff1 = document.getElementById("dropBox1Contents");
    let clickOnOff2 = document.getElementById("dropBox2Contents");
    let clickOnOff3 = document.getElementById("dropBox3Contents");

    dropBox1Btn.addEventListener("click", function(){
        if (clickOnOff1.style.display === "none"){
            clickOnOff1.style.display = "block";
            dropBox1BtnLine.style.transform = "translate(-50%, -50%) rotate(180deg)"
            clickOnOff2.style.display = "none";
            clickOnOff3.style.display = "none";
        }else{
            clickOnOff1.style.display = "none";
            dropBox1BtnLine.style.transform = "translate(-50%, -50%) rotate(0deg)"
        }
    });

    dropBox2Btn.addEventListener("click", function(){
        if (clickOnOff2.style.display === "none"){
            clickOnOff2.style.display = "block";
            dropBox2BtnLine.style.transform = "translate(-50%, -50%) rotate(180deg)"
            clickOnOff1.style.display = "none";
            clickOnOff3.style.display = "none";
        }else{
            clickOnOff2.style.display = "none";
            dropBox2BtnLine.style.transform = "translate(-50%, -50%) rotate(0deg)"
        }
    });

    dropBox3Btn.addEventListener("click", function(){
        if (clickOnOff3.style.display === "none"){
            clickOnOff3.style.display = "block";
            dropBox3BtnLine.style.transform = "translate(-50%, -50%) rotate(180deg)"
            clickOnOff1.style.display = "none";
            clickOnOff2.style.display = "none";
        }else{
            clickOnOff3.style.display = "none";
            dropBox3BtnLine.style.transform = "translate(-50%, -50%) rotate(0deg)"
        }
    });
});