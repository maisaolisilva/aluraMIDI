//Função que reproduz som
function tocaSom (idElementoAudio) {
   const elemento = document.querySelector(idElementoAudio);

   //verificação para usuários que chamarem a função diretamente no console
   if (elemento && elemento.localName === 'audio') {
    elemento.play();
   }
   else{
    console.log('Elemento inválido')
   }
}

//Lista dos botões
const listaDeTeclas = document.querySelectorAll('.tecla');


//acessa cada botão e o conecta a um som
for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio) ;  
    }

    //adiciona a classe ativa ao ser pressionado a tecla enter ou space
    tecla.onkeydown = function (event){
        
        if (event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    //remove a classe ativa quando a tecla subir
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

}

