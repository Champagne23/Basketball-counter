let contadorOne = document.getElementById("number-uno")
let contadorTwo = document.getElementById("number-dos")
let cronometro = document.getElementById("tiempo-uno")
let contador = 0
let contadorDos = 0




function btnOne (){
console.log("el boton ha sido apretado")
contador += 1
console.log(contador)
contadorOne.textContent = contador

}



function btnTwo(){
    console.log("el boton ha sido apretado")
  contador += 2
  console.log(contador)
  contadorOne.textContent = contador
}

    

function btnThree (){
        console.log("el boton ha sido apretado")
        contador += 3
        console.log(contador)
        contadorOne.textContent = contador
        }
        




function btnFour () {
    contadorDos += 1
 contadorTwo.textContent = contadorDos

}



function btnFive () {
    contadorDos += 2
 contadorTwo.textContent = contadorDos

}




function btnSix () {
    contadorDos += 3
 contadorTwo.textContent = contadorDos

}




function empieza(){

let count= 24;

let counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer(){ 
{
  count=count-1;
  if (count <= 0)
  {
     //counter ended, do something here
     count = 0
     
     return  empieza()
  }
  cronometro.textContent = "00:" + count

  //Do code for showing the number of seconds here
}
}
}

function pause() {
    count =  0
    counter =  0
    contador =  0
    contadorOne.textContent = "0"
    contadorTwo.textContent = "0"
    cronometro.textContent = "00:00"
    
}




//function timer()
//{
 
 //   count=count-1;//
  //if (count <= 0)
  //{
    // clearInterval(counter);
     //counter ended, do something here
     
     //return empieza()
  //}
  //cronometro.textContent = "00:" + count

  //Do code for showing the number of seconds here
//}
//
//}



// I don't see a closing bracket for empieza(), but to your question:
//let stop = false

//stopButton.addEventListener("click", () => stop = true)

//and then check in the for loop if the variable is true and return empieza()