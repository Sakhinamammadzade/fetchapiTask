// let img = document.getElementsByClassName("img");
// let brands = document.getElementsByClassName("brand");
// let items = document.getElementsByClassName("item");
// let name = document.getElementsByClassName("name");
// let price = document.getElementsByClassName("price");
// let color = document.getElementsByClassName("color");
// let desc = document.getElementsByClassName("desc");

let containerCard=document.getElementsByClassName("container-card")

function getRenponse() {
     fetch("https://shoppingapiacme.herokuapp.com/shopping")
    .then(x => x.json())
    .then(data => {
      console.log(data);
      data.forEach((element, index) => {
        containerCard[index].innerHTML += `
              <img src="${element.image}" alt="">
              <h1>${element.item}</h1>
              <h1 >${element.brand}</h1>
              <span >${element.price}</span>
              <p >${element.description}</p>
             <span>${element.color}</span>`;
      });


    })
}

getRenponse()
