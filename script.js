function toggleMode() {
  const body = document.body
  body.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // verificar se o body tem a classe light
  body.classList.contains("light")
    ? // se tiver, adicionar a imagem light
      img.setAttribute("src", "./assets/avatar-light.png") &
      img.setAttribute("alt", "Ativando o avatar light")
    : // se não tiver, manter a imagem normal
      img.setAttribute("src", "./assets/avatar.png") &
      img.setAttribute("alt", "Ativando o avatar dark")
}
