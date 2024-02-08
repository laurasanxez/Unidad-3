function comprobar() {
	let numero = parseInt(document.getElementById("numero1").value, 10);
    if (numero%2==0) {
    	// Mensaje si el numero dividido tiene resto 1
      document.getElementById("texto").innerHTML="El número es par";
      console.log("par")
    }
    else {
    //Mensaje si el numero dividido tiene resto 0
    document.getElementById("texto").innerHTML= "El número es impar";
    console.log("impar")
    }
  }
