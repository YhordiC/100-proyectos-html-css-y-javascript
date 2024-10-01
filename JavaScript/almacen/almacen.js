window.addEventListener('DOMContentLoaded', (Event) => {

    let Ccajas = document.querySelector('.ctn-cajas');
let cajas = document.querySelectorAll('.item');
let Almacen = document.querySelector('.ctn-almacen');
let ItemAlmacen = document.querySelectorAll('.almacen');
console.log(Ccajas,cajas,Almacen,ItemAlmacen,)
  cajas.forEach( ( caja, i) => {
    caja.setAttribute('id', 'caja' + i);

    caja.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('id', e.target.id);
    })
  })

  ItemAlmacen.forEach( (espacio, i) => {

    espacio.addEventListener('dragover', e => {
        e.preventDefault();
    })
    espacio.addEventListener('drop' , e => {
        e.preventDefault();
        let cajaid = e.dataTransfer.getData('id');

        if(cajaid && cajaid != "") {
            
            

            if(ItemAlmacen[i].lastChild == null) {
                let caja = document.querySelector('#' + cajaid)
              
                console.log(caja)
            e.target.appendChild(caja);
            
            }  else {
                alert('No hay espacio para la caja')
            }

            if(Ccajas.innerHTML.trim() == '') {
                Ccajas.style.display = 'block'
                alert('Todas las cajas han sido guardadas')
            }
        }
    })
  })

})
