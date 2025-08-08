'use strict';

const projects = {
  gatinhos: {
    category: "games",
    title: "Gatinhos do Parque",
    subTitle: "Game",
    description: `
    <h3>Desafios do Projeto</h3> 
    O principal desafio do <a href="https://patada.stomod.com/devlog-1" target="_blank" style="display: inline;">Gatinhos do Parque</a> foi criar sistemas que <b>integrassem artistas ao design do jogo na Unity.</b> <br>
    Como a equipe artística participava ativamente do desenvolvimento, priorizamos configurações visuais e de sistemas <b>expansíveis.</b> <br> 
    Utilizamos uma arquitetura baseada em Scriptable Objects e eventos, que <b>desacoplou as lógicas de comportamentos e dados</b> e permitiu uma <b>colaboração mais eficiente entre arte e programação.</b>
    <h3>Competências</h3>
    <ul>
      <li>Programação de Gameplay</li>
      <li>Programação de UI</li>
      <li>Comportamentos dos NPCs (tomada de decisão)</li>
    </ul>
    `,
    image: "./assets/images/gatinhos.jpg"
  },
  farmYourFriends: {
    category: "games",
    title: "Farm Your Friends",
    subTitle: "Game",
    description: ` 
    <h3>Desafios do Projeto</h3> 
    O principal desafio no desenvolvimento do <a href="https://store.steampowered.com/app/1285270/Farm_Your_Friends/" target="_blank" style="display: inline;">Farm Your Friends</a> foi a criação de um <b>sistema de redes</b> robusto capaz de suportar até 8 jogadores online simultaneamente.<br>
    Para isso, implementei uma arquitetura <b>cliente-servidor</b> utilizando a API do Mirror Networking, com integração completa do <b>SDK da Steam</b>, incluindo recursos de <b>matchmaking e lobbies</b>.
    <h3>Competências</h3>
    <ul>
      <li>Integração Back-end</li>
      <li>Sistema de Multiplayer</li>
      <li>Implementação de SDKs (como Steamworks e Xbox)</li>
      <li>Programação de Gameplay</li>
      <li>Programação de UI</li>
      <li>Sistema de IA (tomada de decisão) dos NPCs</li>
      <li>Implementação e garantia de otimização de assets (modelos FBX, animações, sprites 2D/objetos de interface, sons, músicas e efeitos visuais)</li>
      <li>Ferramentas de Editor</li>
    </ul>
    `,
    image: "./assets/images/farm-your-friends.jpg"
  },
  laserHeart: {
    category: "games",
    title: "Laser Heart",
    subTitle: "Mobile Game",
    description: `
    <h3>Desafios do Projeto</h3> 
    <a href="https://drive.google.com/drive/folders/1V6l_ifoGpejeImi3r-471ahKrECNDzox?usp=sharing" target="_blank" style="display: inline;">Laser Heart</a> é um jogo de <b>ritmo</b> (singleplayer e multiplayer local).<br>
    Um dos maiores desafios foi otimizar a versão mobile. Para isso planejamos uma estratégia de grande <b>reutilização dos materiais.</b> <br>
    Combinado com regras de <b>baixa contagem de polígonos</b> e materiais específicos para mobile, foi possível <b>minimizar os draw calls</b> e <b>otimizar o batching estático e dinâmico</b>, proporcionando uma experiência fluida nos dispositivos móveis.<br>
    Outro desafio foi criar uma ferramenta que sincronizasse automaticamente as notas musicais do jogo com o ritmo da música.
    `,
    image: "./assets/images/laser-heart.png"
  },
  rotten: {
    category: "games",
    title: "Rotten",
    subTitle: "Game",
    description: `
    <h3>Desafios do Projeto</h3> 
    <a href="https://drive.google.com/drive/folders/1bpDnjJDklEkYvN7CAI7LaN27zDlRqdVR?usp=sharing" target="_blank" style="display: inline;">Rotten</a> é um RPG em primeira pessoa. O maior desafio do jogo foi conseguir realizar uma comunicação concisa entre os principais sistemas do jogo, entre eles: inventário, quest, diálogo e save. <br>
    Foi necessária uma aplicação extensiva de princípios de <b>orientação a objetos e padrões de projeto</b> para garantir a integração e expansão desses sistemas.
    `,
    image: "./assets/images/rotten.png"
  },
  pointNFlip: {
    category: "games",
    title: "Point 'n Flip",
    subTitle: "Browser Game",
    description: `
    <h3>Desafios do Projeto</h3> 
    <a href="https://spaguetti.itch.io/pointnflip" target="_blank" style="display: inline;">Point 'n Flip</a> foi um jogo desenvolvido para uma Game Jam, e o maior desafio do projeto foi concluí-lo dentro do prazo do evento. <br>
    No final, conseguimos entregar um jogo com início, meio e fim, exatamente conforme o escopo planejado, o que representou uma grande vitória para a equipe. <br>
    Por ser um jogo de <b>navegador</b>, precisei adotar várias otimizações, como: <b>utilizar sprites 2D e modelos 3D simplificados, focar em códigos altamente otimizados (controlando alocações de memória) e remover efeitos pesados de pós-processamento.</b><br>
    `,
    image: "./assets/images/point-n-flip.png"
  },
  cropTap: {
    category: "games",
    title: "Crop Tap",
    subTitle: "Mobile Game",
    description: `
    <h3>Desafios do Projeto</h3> 
    <a href="https://drive.google.com/drive/u/0/folders/1OcFNh6NafJ-qpHSJ4_iU-lTdp4f_2ZQo" target="_blank" style="display: inline;">Crop Tap</a> é um jogo <b>mobile</b> idle, então priorizei alta otimização para garantir performance estável mesmo em estágios avançados de progresso do jogador.<br>
    Implementei um sistema de ticks eficiente para calcular a geração passiva de recursos de forma precisa, <b>sem sobrecarregar o dispositivo</b>.
    `,
    image: "./assets/images/crop-tap.png"
  },
  configMe: {
    category: "tools",
    title: "ConfigMe",
    subTitle: "Unity Tool",
    description: `
    <h3>Sobre</h3> 
    <a href="https://github.com/andre-gp/ConfigMe" target="_blank" style="display: inline;">ConfigMe</a> é um pacote para Unity que permite adicionar rapidamente um menu de configurações ao seu jogo. <br>
    Ele possibilita o uso de opções prontas e também formas fáceis de definir suas próprias configurações, categorias e layouts conforme as necessidades de cada projeto.
    `,
    image: "./assets/images/config-me.png"
  },
  sceneHop: {
    category: "tools",
    title: "SceneHop",
    subTitle: "Unity Tool",
    description: `
    <h3>Sobre</h3> 
    <a href="https://github.com/andre-gp/SceneHop" target="_blank" style="display: inline;">SceneHop</a> é uma ferramenta do Unity Editor que permite você trocar rapidamente entre cenas usando um overlay dentro do próprio editor. <br>
    Por meio da ferramenta é possível criar grupos personalizados de cenas para acessá-las com mais facilidade.
    `,
    image: "./assets/images/scene-hop.png"
  },
  deTach: {
    category: "tools",
    title: "De-Tach",
    subTitle: "Unity Tool",
    description: `
    <h3>Sobre</h3> 
    <a href="https://github.com/andre-gp/De-Tach" target="_blank" style="display: inline;">De-Tach</a> é um pacote da Unity que ajuda a desacoplar a lógica de um jogo usando variáveis e eventos baseados em ScriptableObject. <br>
    A ferramente possibilita a comunicação entre sistemas enquanto mantém projetos Unity organizados e modulares.<br>
    `,
    image: "./assets/images/de-tach.png"
  }
  // Add more projects...
};

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

document.querySelectorAll(".project-item").forEach(item => {
  const projectId = item.getAttribute("data-project-id");
  const project = projects[projectId];

  // Set initial content
  item.querySelector(".project-title").textContent = project.title;
  item.querySelector(".project-sub-title").textContent = project.subTitle;
  item.querySelector(".project-img img").src = project.image;
  item.querySelector(".project-img img").alt = project.category;
  item.setAttribute("data-category", project.category);
  
});


const popup = document.querySelector(".popup");
const popupTitle = popup.querySelector(".popup-title");
const popupDescription = popup.querySelector(".popup-description");
const popupClose = popup.querySelector(".popup-close");

// Add click event to each project link
document.querySelectorAll(".open-popup").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const item = this.closest(".project-item");
    const projectId = item.getAttribute("data-project-id"); // Get the ID
    const project = projects[projectId]; // Fetch data from the object

    // Set popup content
    popupTitle.textContent = project.title;
    popupDescription.innerHTML = project.description; // Use innerHTML for <br> support
    popup.classList.add("active");
  });
});

// Close popup
popupClose.addEventListener("click", function () {
  popup.classList.remove("active");
});


const popupContent = document.querySelector(".popup-content"); // Add this

// Close popup when clicking outside (on overlay)
popup.addEventListener("click", function(e) {
  if (!popupContent.contains(e.target)) { // If click is NOT inside popup-content
    popup.classList.remove("active");
  }
});

// Stop propagation when clicking inside popup
popupContent.addEventListener("click", function(e) {
  e.stopPropagation(); // Prevent click from reaching popup overlay
});