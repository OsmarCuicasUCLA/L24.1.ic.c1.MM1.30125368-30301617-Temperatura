/*
4 TEMPERATURA
Desarrolle un programa que permita convertir una temperatura de grados Celsius a grados Fahrenheit o viceversa.
El programa debe solicitar la temperatura que desea convertir y la unidad de origen (1 Celsius 2 Fahrenheit). El
programa debe mostrar la temperatura inicial en grados realizar la conversión y mostrar el resultado
Datos de Prueba
Temperatura en grados: 75
Unidad de origen (1 Celsius 2 Fahrenheit): 1
Salida
Temperatura inicial en grados: 75
temperatura convertida : 167
*/ 

import Cl_ITemperatura from "./Cl_ITemperatura.js";
import Cl_Temperatura from "./Cl_Temperatura.js";

let iTemp = new Cl_ITemperatura();
let tempInicial = iTemp.leerTemperatura();
let unidadOrigen = iTemp.leerUnidadOrigen();

let temp = new Cl_Temperatura(tempInicial, unidadOrigen);

let Salida = document.getElementById("Salida");

Salida.innerHTML = iTemp.reporteTemperatura(temp.temperaturaInicial, temp.Calc_NuevaTemperatura());