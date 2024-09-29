let Post = [
    {
        Titulo: 'Nuevas formas de ganar un debate',
        Subtitulo: 'Quieres aprender como ganar un debate? y no morir en el intento',
        description: 'Para ganar un debate es muy importante sabar los temas a tratar, pero no es lo unico importante, saber como modular la voz, expresar de una manera correcta como saber comunicar tus ideas son fundamentales.'
    },
    {
        Titulo: 'La revolución de la Inteligencia Artificial en la informática',
        Subtitulo: 'Descubre cómo la IA está transformando el mundo de la tecnología',
        description: 'La Inteligencia Artificial ha cambiado radicalmente la forma en que desarrollamos software y gestionamos datos. Desde el aprendizaje automático hasta la automatización de procesos, la IA está marcando un antes y un después en la informática.'
    },
    {
        Titulo: '5 hábitos para mejorar tu salud mental en la era digital',
        Subtitulo: 'Consejos para mantener tu bienestar en un mundo tecnológico',
        description: 'El uso excesivo de dispositivos electrónicos y las redes sociales pueden afectar nuestra salud mental. Aprender a desconectarse, practicar mindfulness y establecer límites tecnológicos son claves para cuidar de nuestra mente en esta era digital.'
    },
    {
        Titulo: 'Nuevos avances en la medicina regenerativa',
        Subtitulo: 'Cómo la biotecnología está revolucionando los tratamientos médicos',
        description: 'La medicina regenerativa está avanzando con rapidez, ofreciendo nuevas soluciones para enfermedades crónicas mediante el uso de células madre, terapias génicas y otros avances en biotecnología. Estas innovaciones podrían cambiar el futuro de la atención médica.'
    },
    {
        Titulo: 'El impacto de la música en la neurociencia',
        Subtitulo: '¿Cómo afecta la música a nuestro cerebro y emociones?',
        description: 'La música tiene un profundo impacto en la neurociencia, afectando nuestras emociones y estimulando diversas áreas del cerebro. Desde mejorar la concentración hasta aliviar el estrés, la música puede ser una herramienta poderosa para nuestro bienestar mental.'
    },
    {
        Titulo: 'El futuro de la ciberseguridad: ¿estamos preparados?',
        Subtitulo: 'Descubre los retos y soluciones para la seguridad digital en el siglo XXI',
        description: 'A medida que las amenazas cibernéticas aumentan, la ciberseguridad se ha vuelto una prioridad. Desde el uso de criptografía avanzada hasta la inteligencia artificial, exploramos las tecnologías que protegerán nuestros datos en un futuro digital incierto.'
    }
]


const addPost = ( post) => {
    posts.appendChild(post);
}

let ctn_post = document.querySelectorAll('ctn-post')
let posts = document.getElementById('posts')
let form = document.getElementById('form-crear')
form.addEventListener('submit', (even) => {
    even.preventDefault()
    const titulo = even.target[0].value;
    const subtitulo = even.target[1].value;
    const descricion = even.target[2].value;
    let newPost = JSON.parse(localStorage.getItem('posts'))
  newPost.push({
    Titulo:titulo,
    Subtitulo:subtitulo,
    description:descricion
  })
  localStorage.setItem('posts', JSON.stringify(newPost))

  while(posts.firstChild){
    console.log(posts.firstChild)
    posts.removeChild(posts.firstChild)
  }
  mostrar()
})

const mostrar = () => {
 let newPost = JSON.parse(localStorage.getItem('posts'))
newPost.map( post => {
    let Div = document.createElement('div')
    Div.classList.add('post')
    Div.innerHTML = 
    `<h1>${post.Titulo}</h1>
    <h5>${post.Subtitulo}</h5>
    <p>${post.description}</p>
    <button>Ver mas</button>
    `
    console.log(Div)
    addPost(Div)
})
}

mostrar()