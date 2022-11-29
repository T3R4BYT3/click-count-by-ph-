var contador = 0 
var res = document.querySelector('div.showclick')

var audio  = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3')
var audio2 = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3')

function contar() {
    contador ++
    res.innerHTML = contador
}

function diminuir() {
    contador -- 
    res.innerHTML = contador
}

function zerar() {
    contador = 0
    res.innerHTML = contador
}

function som_1(){
    audio2.load();
    audio2.play();
}

function som_2(){
    audio.load();
    audio.play();
}
