let imghd = document.getElementById('img2')
let img1 = document.getElementById('img1')
let porcentaje = document.getElementById('text-porcentaje')
let btn = document.getElementById('btn-cargar')


let url = 'pajaro2mb.jpg';

const cargarimghd = () => {
    let porcentajevalor = 0
    let cargaok = document.querySelector('.cargaok')
    imghd.src = url;

    imghd.addEventListener('load', (e) => { 
    let interval = setInterval(() => {
        if(porcentajevalor == 99){
            console.log(e)
            clearInterval(interval)
            btn.style.display = 'none'
            cargaok.style.display = 'block'
            img1.style.display = 'none'
            imghd.style.display = 'block'
        } 
    
        console.log(e.timeStamp)
    porcentajevalor = porcentajevalor != 99 ?  porcentajevalor +9 : porcentajevalor + 1;
    porcentaje.innerHTML = porcentajevalor+'%';
    img1.style.filter = `blur(${5 - (5*porcentajevalor*0.01) }px)`;
   }, 450)
    
})
}

btn.addEventListener('click', (e) => {
  cargarimghd(); 
})