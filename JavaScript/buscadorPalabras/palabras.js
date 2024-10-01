let buscador = document.getElementById('buscador');
let letras = document.getElementById('letras');
let letras2 = letras.textContent
let trasfor = letras.textContent;
console.log(trasfor)
let letracopi = '';

buscador.addEventListener('input', (e) => {
    setTimeout(()=>{
        if( trasfor.indexOf( e.target.value) != ' ' || trasfor.indexOf( e.target.value) === -1){
            letracopi = trasfor.replace(new RegExp( e.target.value, 'g'), '<span class="letra">' + e.target.value + '</span>');
            console.log(letracopi)
            letras.innerHTML = letracopi
        } else{
            letras.innerHTML = letras2;
        }
    }, 1000)
    
});

