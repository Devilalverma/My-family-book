

  
var image = [
  "Divyansh",
  "Devi lal",
 "Anshupriya", 
 "Pratibha",
  "Sarita"
];
var images = [
  "IMG_20180612_172826.jpg",
  "https://i.postimg.cc/wjMnFtMX/father.jpg",
 "https://i.postimg.cc/5ymDKL83/sister.jpg", 
 "https://i.postimg.cc/5ymDKL83/sister.jpg",
  "https://i.postimg.cc/bw5W5zSK/mother.jpg"
];
var i = 0;
function nextimage() {
  if (i == 5) {
    i = 0;
  }
  document.getElementById("album").src = images[i];
  document.getElementById("ul").innerHTML = (image[i]);
  i++;

}


