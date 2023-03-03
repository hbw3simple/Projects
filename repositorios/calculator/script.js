function cliarbotao(valor) {

    document.getElementById("resultado").value += valor;

}

document.getElementById("btn-1").addEventListener("click", function(){
    cliarbotao("1");
});

document.getElementById("btn-2").addEventListener("click", function(){
    cliarbotao("2");
});

document.getElementById("btn-3").addEventListener("click", function(){
    cliarbotao("3");
});

document.getElementById("btn-4").addEventListener("click", function(){
    cliarbotao("4");
});

document.getElementById("btn-5").addEventListener("click", function(){
    cliarbotao("5");
});

document.getElementById("btn-6").addEventListener("click", function(){
    cliarbotao("6");
});

document.getElementById("btn-7").addEventListener("click", function(){
    cliarbotao("7");
});

document.getElementById("btn-8").addEventListener("click", function(){
    cliarbotao("8");
});

document.getElementById("btn-9").addEventListener("click", function(){
    cliarbotao("9");
});

document.getElementById("btn-0").addEventListener("click", function(){
    cliarbotao("0");
});
document.getElementById("btn-soma").addEventListener("click", function(){
    cliarbotao("+");
});
document.getElementById("btn-sub").addEventListener("click", function(){
    cliarbotao("-");
});
document.getElementById("btn-mult").addEventListener("click", function(){
    cliarbotao("*");
});
document.getElementById("btn-div").addEventListener("click", function(){
    cliarbotao("/");
});

function limpar() {

    document.getElementById("resultado").value = "";

}
document.getElementById("btn-limpar").addEventListener("click", limpar);

function calcular() {

    var expressao = document.getElementById("resultado").value;
    var resultado = eval(expressao);

    document.getElementById("resultado").value = resultado;

}
document.getElementById("btn-igual").addEventListener("click", calcular);