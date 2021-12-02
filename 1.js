


function changeClass(){
  let element=document.getElementsByClassName("menu")[0] || document.getElementsByClassName("menu_act")[0]
  if(Array.prototype.slice.call(element.classList,0).includes("menu")){
    element.classList.add("menu_act")
    element.classList.remove("menu")
  }
  else if(Array.prototype.slice.call(element.classList,0).includes("menu_act")){
    element.classList.add("menu")
    element.classList.remove("menu_act")
  }
}

new Swiper('.image-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 20,
      stretch: 40,
      slideShadows: true
    },
    breakpoints: {
      300: {
        slidesPerView: 1
      },
      800: {
        slidesPerView: 3
      },
    }
  })

function deleteDiv(){
  let div = document.getElementsByClassName("registration")
  div[0].remove()
}

function registration() {
  let html=
    `<div class="registration">
      <div class="registration__content">
        <h1>Заполните данные<h1>
        <form>
          <label for="pib">Введите ФИО </label>
          <br>
          <input type="text" id="pib">
          <br>
          <label for="phone">Введите номер телефона </label>
          <br>
          <input type="tel" id="phone">
          <br>
          <label for="email">Введите почту </label>
          <br>
          <input type="email" id="email">
        </form>
        <button onclick="deleteDiv()"class='btn btn-success' >Відправити</button>
        <button onclick="deleteDiv()"class='btn btn-outline-danger'>Закрити</button>
      </div>
    <div>`
  let body = document.getElementsByTagName("body")
  body[0].insertAdjacentHTML("afterbegin", html)
}

links = document.getElementsByClassName("menu_link")
for (let i=0; i<links.length; i++){
  links[i].addEventListener("click", changeClass)
}



