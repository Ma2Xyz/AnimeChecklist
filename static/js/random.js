const logos = ["../static/img/onePieceLogo.png", "../static/img/narutoLogo.png", "../static/img/dragonBallLogo.png", "../static/img/pokemonLogo.png", "../static/img/tokyoGhoulLogo.png"]
const imgElement = document.getElementById("logoPag")
imgElement.src = logos[Math.floor(Math.random() * logos.length)]