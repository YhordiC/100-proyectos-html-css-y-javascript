let ctn_tarjetas = document.querySelectorAll('.cnt-card')
console.log(ctn_tarjetas)
let id_main = document.getElementById('id-main')
console.log(id_main)
const cambiarEstilos = (even = HTMLDivElement)=>{
    even.style.backgroundColor = '#f1f1f1'
    even.style.color = 'black'
}

const eleminar = ( even )=>{
 id_main.removeChild(even)
}

let btn_eliminar = document.querySelectorAll('.btn-eliminar')
btn_eliminar.forEach((element, index) => {
    element.addEventListener('click',() => eleminar(ctn_tarjetas[index]))
})
let btn_stiles = document.querySelectorAll('.btn-estilos')
console.log(btn_stiles)
btn_stiles.forEach((element, index) => {
    element.addEventListener('click', () => 
        {
            cambiarEstilos(ctn_tarjetas[index])
        })
});