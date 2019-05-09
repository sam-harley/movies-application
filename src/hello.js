export default (name) => console.log(`Hello there, ${name}!`);

 const createCard = (Title,Poster,Plot,Ratings,Rated,id) => {
    let tempCard = "";
    tempCard += `<div class="MovieCard">`;
    tempCard += `<div class="titlebox"><h2 class="MovieTitle">${Title}</h2><img alt="trashbin" class="trash" id="${id}" src="./img/002-basket.png"></div>`;
    tempCard += `<ul class="MovieInfo">`;
    tempCard += `<li class="listItem"><span class="infoTitle">Plot</span>${Plot}</li>`;
    tempCard += `<li class="listItem"><span class="infoTitle">IMDB Rating</span>${Ratings}</li>`;
    tempCard += `<li class="listItem"><span class="infoTitle">Rated</span>${Rated}</li>`;
    tempCard += `</ul>`;
    tempCard += `<img class="titleCover" alt="${Title} Cover Image" src="${Poster}">`;
    tempCard += `</div>`;
    return tempCard
};

const cleardiv = () => {
    return "";
};

const deletemovie = () =>{
    console.log($(this).attr("id").val);
    fetch('/api/movies',$(this).attr("id").val)
};

module.exports = {createCard,cleardiv,deletemovie};