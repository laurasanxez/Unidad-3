function Calcular() {
let a,b, c, d, e, f, g;

a = parseInt(document.getElementById("numero1").value, 10);
b = parseInt(document.getElementById("numero2").value, 10);

c= a * b;
d= a + b;
e= a / b;
f= a - b;
g= a % b;
document.getElementById("texto").innerHTML = "<br> El primer numero es:" + a + "<br> El segundo numero es:" + b + " <br> Los valores son: <br>Multipicación: " + c + "<br>Suma:" + d + "<br>División:" + e + "<br>Resta:" + f + "<br>Resto:" + g;
}


