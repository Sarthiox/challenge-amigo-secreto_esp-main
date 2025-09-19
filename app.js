// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//se inicializa el arreglo
let amigos= [];

//se crea funcion para agregar nombres
function agregarAmigo() {
    let nombre = document.getElementById('amigo');
    let texto= nombre.value.trim()

    //se consulta si esta vacio o no la caja de texto
    if (nombre.value === "") {
        alert("Por favor, inserte un nombre");
        return;
    }
    //se agrega el nombre
    amigos.push(texto);
    //se limpia el texto de la caja de texto
    nombre.value ="";

    listaNombres();
    }


//funcion para la listas de nombres 
function listaNombres() {

    let lista = document.getElementById('listaAmigos');
    //se limpia lista para los nuevos nombres
    lista.innerHTML = "";
    //se recorre arreglo 
    for (let l=0; l <amigos.length; l++ ){
    //se crea li para almacenar los nombres
     let elementosli = document.createElement("li");
     //se almacena nombres
     elementosli.textContent = amigos[l];
     lista.appendChild(elementosli);

    }
}

//funcion de sortear nombre 
function sortearAmigo() {
    let sorteo = document.getElementById('resultado');

    //se consulta si hay nombres en el arreglo para sortear
    if (amigos.length===0) {
        //si no hay datos en el arreglo se alerta
        alert("no hay nombres para sortear");
        return;
    }

        //si hay, se realiza sorteo 
        let seleccion =Math.floor(Math.random()*amigos.length);
        let sorteoSecreto = amigos[seleccion];

        //se entrega resultado en pantalla del nombre seleccionado 
        sorteo.innerHTML= `<li> El amigo secreto seleccionado fue: ${sorteoSecreto} </li>`;
        document.getElementById('listaAmigos').innerHTML = "";


}








