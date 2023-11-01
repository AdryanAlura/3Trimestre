// pom-------------------------------------------------------
function TocaSom (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeteclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeteclas.length) {

    const instrumento = listaDeteclas[contador];

    console.log(instrumento);

    listaDeteclas[contador].onclick = function () {
        TocaSom('#som_tecla_pom')
    };

    contador = contador + 1;

    console.log(contador);

    
}