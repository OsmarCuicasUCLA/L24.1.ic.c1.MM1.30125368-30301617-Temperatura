export default class Cl_ITemperatura{
    leerTemperatura(){
        return prompt("Ingrese la Temperatura Inicial");
    }

    leerUnidadOrigen(){
        return prompt("Ingrese la Unidad de Origen (1)Celsius (2)Fahrenheit")
    }

    reporteTemperatura(tempInicial, tempFinal){
        return `
            Temperatura inicial en grados: ${tempInicial}
            <Br>
            temperatura convertida: ${tempFinal}
        `
    }
}