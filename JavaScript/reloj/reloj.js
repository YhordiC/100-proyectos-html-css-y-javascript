let fecha = document.getElementById('fecha');
let tiempo = document.getElementById('hora');
let fechatext = new Date()

fecha.textContent =  
`${ fechatext.getDate() }
/${ fechatext.getMonth() < 10 
    ? '0'+fechatext.getMonth() 
    : fechatext.getMonth() }
/${fechatext.getFullYear()} `

function start(){
    let segundo = new Date().getSeconds()
    let minutos = new Date().getMinutes()
    let hora = new Date().getHours()
    
    tiempo.innerHTML = `${hora <= 9 ? '0'+hora  : hora}:
    ${minutos <= 9 ? '0'+minutos : minutos}:
    ${segundo <= 9 ? '0'+segundo : segundo} ` 

}
setInterval( () => {
    start()
}, 1000)
