let tabuada = 3;
let nome = "evelyn"

function escreva(){
    document.write("tabuada do " + tabuada + "<br")
    document.write(tabuada + " x 1 = "+(tabuada*1)+"<br");
    document.write(tabuada + " x 2 = "+(tabuada*1)+"<br");
    document.write(tabuada + " x 3 = "+(tabuada*1)+"<br");
    document.write(tabuada + " x 4 = "+(tabuada*1)+"<br");
    document.write(tabuada + " x 5 = "+(tabuada*1)+"<br");
    document.write(tabuada + " x 6 = "+(tabuada*1)+"<br");
    document.write(tabuada + " x 7 = "+(tabuada*1)+"<br");
    document.write(tabuada + " x 8 = "+(tabuada*1)+"<br");
    document.write(tabuada + " x 9 = "+(tabuada*1)+"<br");
    document.write(tabuada + " x 10 = "+(tabuada*1)+"<br");
    document.write("feito por " + nome)
}

function minhaTabuada(){
   for(let i = 1; i < 5; i++){
        for(let j = 1; j <= 10; j++){
           document.write(i + " x " + j + " = "+(j*i)+"<br>");
        }
    }

}
























function calcula(){
    let c = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let r = c * 2;
    document.write("resultado: " + r);
}

let op = " ";
function calcule(){
    op = ope;
}

function calcule(){
    let v1 = document.getElementById("v1").value;
    let v2 = document.getElementById("v2").value;
    let r = 0;

    if(op == "+"){
        r = Number(v1) + Number(v2);
    }

    document.getElementById("resultado").innerHTML = r;

}

function calcula(){
    let c = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    if (!Number(c)){
        alert("o valor do capital deve ser numerico.")
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return
    }
    let r = c * 2;
    document.write("resultado: " + r);
}

