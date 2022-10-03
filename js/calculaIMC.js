var titulo = document.querySelector(".titulo");
titulo.textContent = "Maria Nutrição";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdAltura = paciente.querySelector(".info-altura")
    var tdPeso = paciente.querySelector(".info-peso")

    var altura = tdAltura.textContent
    var peso = tdPeso.textContent

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        console.log("Peso invalido")
        tdImc.textContent = "Peso invalido"
        pesoValido = false
        paciente.classList.add("paciente-invalido")
    }

    if (!alturaValida) {
        console.log("Altura invalida")
        tdImc.textContent = "Altura invalida"
        alturaValida = false
        paciente.classList.add("paciente-invalido")
    }

    if (alturaValida && pesoValido) {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc
    }

}


function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if (peso >= 0 && peso < 1000){
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    } else{
        return false;
    }
}