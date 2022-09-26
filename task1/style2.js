let randomNumber = Math.floor(Math.random()*45) - 5;

console.log(randomNumber);

if (randomNumber <= 10 && randomNumber >= -5) {
document.getElementById("temp").innerHTML = "Weather is cold";
document.getElementById("image").innerHTML = `
<img src="./picture/pexels-cold.jpg" alt="cold"
style="width: 100px; height: 100px">
` ;
} else if (randomNumber >=11 && randomNumber <=31) {
document.getElementById("temp").innerHTML = "Weather is moderate";
document.getElementById("image").innerHTML = `
<img src="./picture/pexels-modarate.jpg" alt="moderate"
style="width: 100px; height: 100px">
`;

} else{
    document.getElementById("temp").innerHTML =  "Weather is hot";
    document.getElementById("image").innerHTML = `
    <img src="./picture/pexels-hot.jpg" alt="hot"
    style="width: 100px; height: 100px">
    `;
    }
