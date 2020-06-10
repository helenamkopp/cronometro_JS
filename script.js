var display = document.getElementById('display')

var minutos = document.getElementById('minutos')

var segundos = document.getElementById('segundos')

var comecar = document.getElementById('comecar')

var cronometroSeg;

var minutoAtual;
var segundoAtual;

var interval;

for(var i =0; i <= 60; i++) {
    minutos.innerHTML += '<option value="'+i+'">'+i+'</option>'

}

for(var i =1; i <= 60; i++) { // o segundo não pode começar no 0 
    segundos.innerHTML += '<option value="'+i+'">'+i+'</option>'

}

comecar.addEventListener('click', function(){
    minutoAtual = minutos.value; // a partir do momento que eu coloco o .value eu consigo recuperar o que ta selecionado dos minutos e segundos
    segundoAtual = segundos.value; 

    display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual //childNodes vai pegar os elementos filhos, nesse caso é só o h3

    interval = setInterval(function(){

        segundoAtual--;
        if(segundoAtual <= 0){
            if(minutoAtual > 0){
                minutoAtual--;
                segundoAtual = 59;
            } else {
                alert("Acabou!")
                clearInterval(interval);
            }
        } 
        display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual
    },1000);

})