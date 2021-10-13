var randomNumber1 = Math.floor(Math.random()*6 + 1);
var image1 = document.querySelector("#img1");
var randomImage1 = "dice" + randomNumber1 + ".png";
var locationImage1 = "images/" + randomImage1;
image1.setAttribute("src",locationImage1);


var randomNumber2 = Math.floor(Math.random()*6 + 1);
var image2 = document.querySelector("#img2");
var locationImage2 = `images/dice${randomNumber2}.png`;
image2.setAttribute("src",locationImage2);

var bigHeading = document.querySelector("#big-heading");
if(randomNumber1 > randomNumber2){
    bigHeading.innerHTML = "Player 1 Wins!🚩";
}
else if(randomNumber2 > randomNumber1){
    bigHeading.innerHTML = "🚩Player 2 Wins!";
}
else{
    bigHeading.innerHTML = "Draw";
}

