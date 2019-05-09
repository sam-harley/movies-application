export default (name) => console.log(`Hello there, ${name}!`);

 const createCard = (Title,Poster,Plot,Ratings,Rated) => {
    let tempCard = "";
    tempCard += `<div class="MovieCard">`;
    tempCard += `<h2>${Title}</h2>`;
    tempCard += `<img class="titleCover" alt="${Title} Cover Image" src="${Poster}">`;
    tempCard += `<p>${Plot}</p>`;
    tempCard += `<p>${Ratings}</p>`;
    tempCard += `<p>${Rated}</p>`;
    tempCard += `</div>`;
    return tempCard
};

const cleardiv = () => {
    return "";
};


module.exports = {createCard,cleardiv};
