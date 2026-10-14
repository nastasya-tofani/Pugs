
function translateToLatin() {

    let nameElement = document.getElementById("dogName");
    let breedElement = document.getElementById("dogBreed");
    let colorElement = document.getElementById("dogColor");

    if (nameElement.innerText === "Шарик") {
        nameElement.innerText = "Sharik";
        breedElement.innerText = "Pug";
        colorElement.innerText = "Fawn (Beige)";
    } else {

        nameElement.innerText = "Шарик";
        breedElement.innerText = "Мопс";
        colorElement.innerText = "Бежевый";
    }
}


const button = document.getElementById("translitBtn");
button.addEventListener('click', translateToLatin);