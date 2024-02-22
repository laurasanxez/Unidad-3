function comprobar() {
    let numero1 = parseInt(document.getElementById("numero1").value, 10);
    if(numero1 >= 0 && numero1 <=4) {
            document.getElementById("solucion").innerHTML = "Suspenso";
    }
 if (numero1 <0){
        document.getElementById("solucion").innerHTML = "La respuesta no es válida";
}
 if (numero1>=5 && numero1 <6) {
        document.getElementById("solucion").innerHTML = "Suficiente";
    }
 if (numero1 >=6 && numero1 <7) {
        document.getElementById("solucion").innerHTML = "Bien";
    }
 if (numero1 >=7 && numero1 <9) {
        document.getElementById("solucion").innerHTML = "Notable";
    }
 if (numero1 >=9 && numero1 <=10) {
        document.getElementById("solucion").innerHTML = "Sobresaliente";
}
 if (numero1 >10) {
    document.getElementById("solucion").innerHTML = "La respuesta no es válida";
}
}