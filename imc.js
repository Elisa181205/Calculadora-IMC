
let calcular = document.getElementById('calcular')

function imc (){
    let nome = document.getElementById('nome')
    let altura = document.getElementById('altura')
    let peso = document.getElementById('peso')
    let resultado = document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso !== ''){
        let classificacao = ''
        let x = (peso.value/(altura.value*altura.value)).toFixed(1)
        alert(x)
        if(x<18.5){
            classificacao="Abaixo do peso"
        }
        else if(x < 25){
            classificacao="No peso ideal"
        }
        else if(x<30){
            classificacao="Levemente acima do peso"
        }
        else if(x<35){
            classificacao= "Obesidade I"
        }
        else if(x<40){
            classificacao= "Obesidade II"
        }
        else{
            classificacao="Obesidade de nível III"
        }
        resultado.textContent = `${nome.value} seu IMC é ${x} e você está ${classificacao}`
    }
    else{
        alert('Por favor preencha todas as informações')
    }

}

calcular.addEventListener('click',imc)

//create function js

