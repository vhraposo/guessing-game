//Variáveis 
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1 


//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
})

//Função callback
function handleTryClick(event){
    event.preventDefault()// não faça o padrão (não irá enviar o formulário)

    const inputNumber = document.querySelector("#inputNumber")
    console.log(inputNumber.value)

    if(Number(inputNumber.value) > 10 ){
        alert(`Número pribido`)
        handleResetClick2()
    }else if (Number(inputNumber.value) <= 0 ){
        alert(`Número pribido`)
        handleResetClick2()

    }

    if(Number(inputNumber.value) == randomNumber){
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document.querySelector(".screen2 h2").innerText = `Você acertou em ${xAttempts} tentativas`
        
    }    
    inputNumber.value = ""
    xAttempts++
}
function handleResetClick(){
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}
function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")

}

function handleResetClick2(){
    xAttempts--   
}

