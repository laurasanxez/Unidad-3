function MensajeIf() {
    let hora
        hora=parseInt(document.getElementById("hora").value, 10);

    if (hora>=7 && hora<=11)
        document.getElementById("mensaje").innerHTML = "Buenos dias";     
    if (hora>=11 && hora< 21)
        document.getElementById("mensaje").innerHTML = "Buenas tardes"; 
    if (hora>=21 && hora < 24)
        document.getElementById("mensaje").innerHTML = "Buenas noches";
    if (hora> 24)
        document.getElementById("mensaje").innerHTML = "No existe"; 
    if (hora >= 0 && hora <= 6)
        document.getElementById("mensaje").innerHTML = "buenas noches"; 
 }

 function MensajeSwitch() {
        let hora=parseInt(document.getElementById("hora").value, 10);
    switch (hora) {
        case 21:
        case 22:
        case 23:
        case 24:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            document.getElementById("mensaje").innerHTML="Buenas noches";
        break;
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
             document.getElementById("mensaje").innerHTML="Buenos dias";
        break;

        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
             document.getElementById("mensaje").innerHTML="Buenas tardes";
        break;
        default:
             document.getElementById("mensaje").innerHTML="No es un numero valido";
    }
}




