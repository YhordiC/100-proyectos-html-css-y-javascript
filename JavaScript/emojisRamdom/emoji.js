const emojis = [
    {
      id: 1,
      emoji: "😊",
      titulo: "Cara sonriente"
    },
    {
      id: 2,
      emoji: "🔥",
      titulo: "Fuego"
    },
    {
      id: 3,
      emoji: "🚀",
      titulo: "Cohete"
    },
    {
      id: 4,
      emoji: "🌟",
      titulo: "Estrella"
    },
    {
      id: 5,
      emoji: "💡",
      titulo: "Bombilla"
    },
    {
      id: 6,
      emoji: "💻",
      titulo: "Computadora"
    },
    {
      id: 7,
      emoji: "🎉",
      titulo: "Confeti"
    },
    {
      id: 8,
      emoji: "📚",
      titulo: "Libros"
    },
    {
      id: 9,
      emoji: "🎨",
      titulo: "Paleta de colores"
    },
    {
      id: 10,
      emoji: "⚽",
      titulo: "Pelota de fútbol"
    },
    {
      id: 11,
      emoji: "🎵",
      titulo: "Nota musical"
    },
    {
      id: 12,
      emoji: "🍕",
      titulo: "Pizza"
    },
    {
      id: 13,
      emoji: "🌍",
      titulo: "Globo terráqueo"
    },
    {
      id: 14,
      emoji: "🚴‍♂️",
      titulo: "Persona en bicicleta"
    },
    {
      id: 15,
      emoji: "✈️",
      titulo: "Avión"
    },
    {
      id: 16,
      emoji: "🏖️",
      titulo: "Playa"
    },
    {
      id: 17,
      emoji: "🐶",
      titulo: "Perro"
    },
    {
      id: 18,
      emoji: "🎂",
      titulo: "Tarta de cumpleaños"
    },
    {
      id: 19,
      emoji: "💪",
      titulo: "Brazo fuerte"
    },
    {
      id: 20,
      emoji: "🏆",
      titulo: "Trofeo"
    }
  ];
  
  const NumberRandom = () => {
    return Math.floor(Math.random() * (20)) + 1;
  }

  const ImprimirEmoji = (emoji, titulo) => {
    let Emoji = document.getElementById('emoji');
    let Titulo = document.getElementById('titulo');

    Emoji.innerHTML = emoji; 
    Titulo.innerText = titulo; 
  }

  let ctnEmoji = document.querySelector('#emoji')
  ctnEmoji.addEventListener('mouseout' , () => {
    let numeroRandom = NumberRandom();
    ImprimirEmoji(emojis[numeroRandom].emoji , emojis[numeroRandom].titulo) 
  })
