
const request = new XMLHttpRequest();

  request.open('GET', 'https://62c7cf638c90491c2ca7c0e9.mockapi.io/art', true);

  request.onload = function () {
  if (request.status >= 200 && request.status < 400) {

    const data = JSON.parse(this.response);
    
    let peliculas = '';
    data.forEach((pelicula) => {

  peliculas += `  
  <div class="pelicula"> 
  <img class="poster" src="${pelicula.avatar}" width="15%" onclick="openFulImg(this.src)" alt=""> 
  <h3 class="titulo">${pelicula.name}</h3>
  </div>
  `;
     
    });
       document.getElementById('contenedor').innerHTML = peliculas;
  } 

  else {

    alert("error");

  }

}

request.send();

const fulImgBox = document.getElementById("fulImgBox"),
fulImg= document.getElementById("fulImg");

function closeImg(){

  fulImgBox.style.display = "none";

}

function openFulImg(reference){

  fulImgBox.style.display = "flex";
  fulImg.src = reference;
  fulImg.style.width = "600px";

}
