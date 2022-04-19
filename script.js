/*

-DEJAR PASAR SOLO A LOS MAYORES DE EDAD
-EL PRIMERO QUE ENTRE DESPUES DE LAS 2 AM NO PAGA
*/

let hora = 7
let paseGratis = false



let saludo =(nombre,edad)=>{


if(edad < 18){
    alert(`lo siento ${nombre} no tienes edad suficiente para entrar`)
}else if(edad >= 18 && paseGratis==false && hora==2){
    paseGratis = true
    alert(`hola ${nombre} puedes pasar gratis por ser el cliente de las 2 am`)
}else{
    alert(`hola ${nombre} adelante`)
}
}


let entrarDisco = (nombre,edad)=>{

if(hora < 5){
    alert(`son las ${hora}AM`)
}else{
    alert(`son las ${hora}PM`)
}

    nombre = prompt(`hola cual es tu nombre?`)
    edad= parseInt(prompt(`y tu edad`))
    
    saludo(nombre,edad)
    
    }

while(hora !== 3){

        entrarDisco()


if(hora === 12){
    hora = 0
}

hora++


    }