export default (name) => console.log(`Hello there, ${name}!`);

 const createCard = (Title,Poster,Plot,Ratings,Rated,id,Production,Runtime,Released,Genre,Director) => {
    let tempCard = "";
    tempCard += `<div class="MovieCard">`;
    tempCard += `<div class="titlebox"><h2 class="MovieTitle">${Title}</h2><img alt="favorite" class="star" src="./img/001-star-1.png"><img alt="trashbin" class="trash" id="${id}" src="./img/002-basket.png"></div>`;
    tempCard += `<ul class="MovieInfo">`;
    tempCard += `<li class="listItem"><span class="infoTitle">Plot</span>${Plot}</li>`;
    tempCard += `<li class="listItem"><span class="infoTitle">IMDB Rating</span>${Ratings}</li>`;
    tempCard += `<li class="listItem"><span class="infoTitle">Rated</span>${Rated}</li>`;
    tempCard += `<li class="listItem"><span class="infoTitle">Producer</span>${Production}</li>`;
    tempCard += `<li class="listItem"><span class="infoTitle">Runtime</span>${Runtime}</li>`;
    tempCard += `<li class="listItem"><span class="infoTitle">Released</span>${Released}</li>`;
     tempCard += `<li class="listItem"><span class="infoTitle">Genres</span>${Genre}</li>`;
     tempCard += `<li class="listItem"><span class="infoTitle">Director</span>${Director}</li>`;
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