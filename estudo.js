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
