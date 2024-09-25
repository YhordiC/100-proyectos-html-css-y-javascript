let numberMinutes = document.getElementById('id-minutos');
let numberSegundos = document.getElementById('id-segundos');
let startButton = document.getElementById('id-iniciar');
let stopButton = document.getElementById('id-parar');

let startTime = 0;
let start = false;
let minutos = 0;
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);


const isHabitable= (Bolea) => {
    if(Bolea){
        stopButton.ariaDisabled = true; 
        stopButton.style.backgroundColor = 'orangered'
    }else{
        stopButton.ariaDisabled = false;
        stopButton.style.backgroundColor = 'gray';
    }
}


const actualizarM = (valorM) => {
    numberMinutes.innerHTML = valorM > 9 ? valorM : '0'+valorM
}
const actualizarS = (valors) => {
 numberSegundos.innerHTML = valors > 9 ? valors : '0'+valors
}
function startTimer(){
      isHabitable(true)
    timeid = setInterval(() =>{
        if(startTime == 59){
             minutos++;
   actualizarM(minutos)
             startTime = 0;
        actualizarS(startTime)   
        return 
        }
        actualizarS(startTime+=1)
    },1000)
    
}

function stopTimer() {
  clearInterval(timeid)
  isHabitable(false) 
}

isHabitable(false)   


