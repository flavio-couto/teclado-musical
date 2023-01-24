function tocaSom (idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
    }

const listaDeTeclas = document.querySelectorAll('.tecla');

for (contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; //Ele pega as duas classes que tem em cada botão e define: a primeira é a '0 = tecla' e a '1 = tecla_pom (exemplo)'. Usado para auxiliar na criação do 'idAudio'
    const idAudio = `#som_${instrumento}`; // Isso de chama texto dinâmicos, usa-se a crase ao invés da aspas simples'' e usa o ${Aqui vai o texto que será dinâmico}  
        
    tecla.onclick = function () {
        tocaSom(idAudio);
        } 
    
    tecla.onkeydown = function(botao) {
        if(botao.code === "Enter" || botao.code === "Space") {
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }


console.log(contador); // só para mostrar o contador no log

}
