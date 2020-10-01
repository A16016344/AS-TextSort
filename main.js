botonLeerTxt = document.getElementById("leerTxt")
txtUrl = document.getElementById("txtUrl")
botonOrdenarLista = document.getElementById("ordenarLista")

botonLeerTxt.addEventListener("click", function(e){
    e.preventDefault() //Evitamos que el form recargue la pagina
    leerTxt(txtUrl.value,'resultado'); //Capturamos la URL del input y la pasamos al card
})

botonOrdenarLista.addEventListener("click", function(){
    var aux = divToVar('resultado') //tomamos el valor de la card y lo guardamos en un arreglo
    ordenarLista(aux) // Ordenamos alfabeticamente el arreglo
    for(i = 0; i < aux.length; i++){
        aux[i] = aux[i].split(" ") //Dividimos cada nombre en palabras separadas por espacio en una matriz
        for(j = 0; j < aux[i].length; j++){
            aux[i][j] = capitalizeOnlyFirst(aux[i][j]) //Le ponemos mayuscula a la primera letra
        }
        aux[i] = aux[i].join(" ") //Volvemos a juntar todas las palabras de cada nombre
    }
    arrayToDiv(aux,'resultado') //Imprimimos el arreglo ordenado y capitalizado en la card
})

// Lee la URL de un archivo de texto y la imprime en un elemento del html
async function leerTxt(url,id) {
    try {
      const response = await fetch(url);
      const data = await response.text();
      document.getElementById(id).innerText = data 
    } catch (err) {
      console.error(err);
    }
  }

// Guarda en un arrglo cada linea del texto de un elemento del html
function divToVar(id) {
    return document.getElementById('resultado').innerText.split("\n")
}

// Ordena alfabeticamente un arreglo y lo retorna en una variable
function ordenarLista(lista){
    return lista.sort();
}

// Imprime en un elemente del html el contenido de un arreglo con saltos de linea
function arrayToDiv(array,id){
    document.getElementById(id).innerText = array.join("\n")
}

// Esta funcion retorna una palabra pero con la primera letra en mayuscula y las demas en minuscula
function capitalizeOnlyFirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
