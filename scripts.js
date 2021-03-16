
// function getRandomImage() {

//    var images = ['img/sprinkle/Cabbage.gif', 'img/sprinkle/Carrot.gif'];
//    var image = images[Math.floor(Math.random() * images.length)];

//    return image;

// }

// function displayRandomImage() {

//    var htmlImage = document.getElementById("randomImage");
//    htmlImage.src = getRandomImage();

// }

// displayRandomImage();


// let totalCount = 1;

// function changeImage() {
//    let num = Math.ceil(Math.random() * totalCount);
//    document.getElementById("little-photo").setAttribute("style", "background-image: url(" img/photo/ + images[randomCount] + .bmp");
// }

// changeImage();

let postcard = document.querySelector('.postcard');
postcard.addEventListener( 'click', function() {
  postcard.classList.toggle('flipped');
});