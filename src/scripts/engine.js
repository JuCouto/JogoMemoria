const emojis = [
    "🎭",
    "🎭",
    "🎨",
    "🎨",
    "🏀",
    "🏀",
    "🤿",
    "🤿",
    "🎿",
    "🎿",
    "🥋",
    "🥋",
    "🥊",
    "🥊",
    "🎸",
    "🎸",
    
  ];
  let openCards = [];
  
  //cria uma ordenação seguindo uma regra (se o nº aleatório for maior q 0.5 ele recebe 2 ou -1)
  let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
  
  for (let i = 0; i < emojis.length; i++) {
    //vai criar dinâmicamente um elemento com uma tag div 
    let box = document.createElement("div");
//vou adicionar nele a classe item(que está configurada no main.css)
    box.className = "item";
    //indico qual o item que vai estar dentro do elemento.
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    //vou pendurar tudo na minha div principal.
    document.querySelector(".game").appendChild(box);
  }
  
  function handleClick() {
    if (openCards.length < 2) {
      this.classList.add("boxOpen");
      openCards.push(this);
    }
  
    if (openCards.length == 2) {
      setTimeout(checkMatch, 500);
    }
  
    console.log(openCards);
  }
  
  function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add("boxMatch");
      openCards[1].classList.add("boxMatch");
    } else {
      openCards[0].classList.remove("boxOpen");
      openCards[1].classList.remove("boxOpen");
    }
  
    openCards = [];
  
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
      alert("Você venceu !");
    }
  }