
// fetch("https://rickandmortyapi.com/api/character/")
// .then(response => response.json())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));

(async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await response.json();
    console.log(data);
    createCards(data)
})();

const template = document.querySelector('.card');

const createCards = data =>{
    //limpia el contenido de la tarjeta de bootstrap
    template.innerHTML=''
    data.results.forEach(element => {
        console.log(element)
        //se inserta el Html mediante Template strings
        template.innerHTML +=`
        <div class="card" style="width: 18rem;">
        <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${element.name}</p>
        </div>
      </div>
        `
    })
}





