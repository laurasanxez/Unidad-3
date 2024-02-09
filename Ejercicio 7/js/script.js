function comprobar() {
    let numero1;
    numero1 = parseInt(document.getElementById("numero1").value);
    if(numero1<=10) {
        if(numero1>8){
            document.getElementById("solucion").innerHTML = "Sobresaliente";
    }
    else if (numero1>=8){
        document.getElementById("solución").iinerHTML = "Notable";
    }
    else if (numero1==6){
        document.getElementById("solución").innerHTML = "Bien";
    }
    else if (numero1==5){
        document.getElementById("solución").innerHTML = "Suficiente";
    }
    else{
        document.getElementById("solución").innerHTML = "Suspenso";
    }
}
    else {
        document.getElementById("solución").innerHTML = "La nota que has puesto no es válida";
    }
    }