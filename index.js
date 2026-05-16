let nombre = document.getElementById("nombre").value ;
let edad = document.getElementById("edad") .value ;
let tipo_de_documento = document.getElementById("tipo_de_documento").value ;
let numero_de_documento = document.getElementById("numero_de_documento").value ;

if (edad < 18) {
    console.log("No puede entrar, es menor de edad") ;
} else

if (edad >= 18 && edad <= 25) {
    console.log("Usuario beneficiaro por cotizante, no puede entrar") ;
} else

if (edad >= 60) {
    console.log("pensionado") ;
}

if (edad >= 25 && edad < 60){
    console.log(entra) ;    
}


let salario = 0 ;
let comisiones = 0 ;
let Total_de_horas_extras = 0 ;
let calificacion_de_nivel_de_riesgo = "" ;


const SMLV = 1750905 ;
const SMIV = 22761765 ;
const ST = 249095 ;
const UDVT = 52.37 ;

const Riesgo_1 = 0.522 ;
const Riesgo_2 = 1.044 ;
const Riesgo_3 = 2.436 ;
const Riesgo_4 = 4.350 ;
const Riesgo_5 = 6.960 ;
const riesgo = [Riesgo_1, Riesgo_2, Riesgo_3, Riesgo_4, Riesgo_5] ;

const porcentajeIBC = 0.7 ;
const porcentajeSalud = 0.04 ;
const porcentajePension = 0.04 ;

  function Calcularporcentaje (base, porcentaje) {
    return base * porcentaje ;
  }
 
  let salario_Total = salario + comisiones + horas_extras;
  let IBC = salario_Total * porcentajeIBC ;
  let salud = IBC * porsentajeSalud ;
  let pension = IBC * porcentajePension ;

  // aqui se agrega la validacion de datos y el if para mostrar el error y hacer el return de la pagina :3
  function validacionDatos(){ 
  if(!nombre)
    mostrarError("El campo nombre es obligatorio") ;
return;
  if(!edad)
    mostrarError("El campo edad es obligatorio") ;
return;
    if(!tipo_de_documento)  
    mostrarError("El campo tipo de documento es obligatorio") ;
return;
    if(!numero_de_documento)
    mostrarError("El campo numero de documento es obligatorio") ;
return;
}
