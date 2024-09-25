
const containerMain = document.querySelector('.main-multi')
// var de multiplicación

let numeroAmultiplicar = [1,2,3,4,5,6,7,8,9,10]
function calcular(valor = 1, valor2 = 0){
let section = document.createElement('div')
section.classList.add('numbers')
    for(let i = valor2; i <= 10 ; i++) {
        let p = document.createElement('p')
        p.innerHTML = `${valor} x ${i} = ${valor * i}`
    section.appendChild(p)
 }
 return section.outerHTML
}

let tabla = `<div class = 'tabla-multi'>


${numeroAmultiplicar.map( (numero) => (
    `
    <div class= 'tabla'>
    <h6>Tabla del ${numero}</h6>
    ${calcular(numero)}
    </div>`
)).join('')}
</div>`

containerMain.innerHTML = tabla