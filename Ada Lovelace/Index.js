var SetaEsquerda = window.document.getElementById("SetaEsquerda");
var img1 = window.document.getElementById("img1");
var img2 = window.document.getElementById("img2");
var img3 = window.document.getElementById("img3");
var SetaDireita = window.document.getElementById("SetaDireita");


function DeslizarParaDireita(){
    img1.style="display:none;"
    img2.style="display:flex;"
    img3.style="display:flex;"
    SetaEsquerda.style="display:flex;"
    SetaDireita.style="display:none;"
}

function DeslizarParaEsquerda(){
    img1.style="display:flex;"
    img2.style="display:flex;"
    img3.style="display:none;"
    SetaEsquerda.style="display:none;"
    SetaDireita.style="display:flex;"
}