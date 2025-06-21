document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#identificar').addEventListener('keyup', solo_numeros);
});

function solo_numeros(){
    let datos = document.querySelector('#identificar').value.trim();
    if(datos.length == 0){
        document.querySelector('#respuesta').innerHTML = "";
    } else if(numeros(datos)){
        document.querySelector('#respuesta').innerHTML = "<p>Solo numeros</p>"; 
    } else {
        document.querySelector('#respuesta').innerHTML = "<p><strong>No solo numeros</strong>tambien otros caracteres</p>";
    }
}

function numeros(datos){
    for(let i = 0; i < datos.length; i++){
        if(!nums(datos[i])){
            return false;
        }
    }
    return true;
}

function nums(datos){
    if(datos == "0"
        ||datos == "1"
        ||datos == "2"
        ||datos == "3"
        ||datos == "4"
        ||datos == "5"
        ||datos == "6"
        ||datos == "7"
        ||datos == "8"
        ||datos == "9"
        )
        {
        return true;
    }
    return false
};