const $imgcontainer = document.getElementById('imgcontainer')
$imgcontainer.innerHTML = `
        <div class="img"><p>IMAGE 1</p><div class="img1"><a href="#"><img id="image01" src="imgs/arctic1.jpg" alt="Arctic"></a></div></div>
        <div class="img"><p>IMAGE 2</p><div class="img1"><a href="#"><img id="image02" src="imgs/arctic2.jpg" alt="Arctic"></a></div></div>
        <div class="img"><p>IMAGE 3</p><div class="img1"><a href="#"><img id="image03" src="imgs/arctic3.jpg" alt="Arctic"></a></div></div>
        <div class="img"><p>IMAGE 4</p><div class="img1"><a href="#"><img id="image04" src="imgs/arctic4.jpg" alt="Arctic"></a></div></div>
        <div class="img"><p>IMAGE 5</p><div class="img1"><a href="#"><img id="image05" src="imgs/bird1.jpg" alt="Bird"></a></div></div>
        <div class="img"><p>IMAGE 6</p><div class="img1"><a href="#"><img id="image06" src="imgs/bird2.jpg" alt="Bird"></a></div></div>
        <div class="img"><p>IMAGE 7</p><div class="img1"><a href="#"><img id="image07" src="imgs/desert1.jpg" alt="Desert"></a></div></div>
        <div class="img"><p>IMAGE 8</p><div class="img1"><a href="#"><img id="image08" src="imgs/desert2.jpg" alt="Desert"></a></div></div>
        <div class="img"><p>IMAGE 9</p><div class="img1"><a href="#"><img id="image09" src="imgs/desert3.jpg" alt="Desert"></a></div></div>
        <div class="img"><p>IMAGE 10</p><div class="img1"><a href="#"><img id="image10" src="imgs/desert4.jpg" alt="Desert"></a></div></div>
        <div class="img"><p>IMAGE 11</p><div class="img1"><a href="#"><img id="image11" src="imgs/desert5.jpg" alt="Desert"></a></div></div>
        <div class="img"><p>IMAGE 12</p><div class="img1"><a href="#"><img id="image12" src="imgs/lions.jpg" alt="Lions"></div></a></div>
        <div class="img"><p>IMAGE 13</p><div class="img1"><a href="#"><img id="image13" src="imgs/nature1.jpg" alt="Nature"></a></div></div>
        <div class="img"><p>IMAGE 14</p><div class="img1"><a href="#"><img id="image14" src="imgs/nature2.jpg" alt="Nature"></a></div></div>
        <div class="img"><p>IMAGE 15</p><div class="img1"><a href="#"><img id="image15" src="imgs/nature3.jpg" alt="Nature"></a></div></div>
        <div class="img"><p>IMAGE 16</p><div class="img1"><a href="#"><img id="image16" src="imgs/nature4.jpg" alt="Nature"></a></div></div>
        <div class="img"><p>IMAGE 17</p><div class="img1"><a href="#"><img id="image17" src="imgs/nature5.jpg" alt="Nature"></a></div></div>
        <div class="img"><p>IMAGE 18</p><div class="img1"><a href="#"><img id="image18" src="imgs/polarbear.jpg" alt="Polar Bear"></a></div></div>
        <div class="img"><p>IMAGE 19</p><div class="img1"><a href="#"><img id="image19" src="imgs/savannah.jpg" alt="Savannah"></a></div></div>
        <div class="img"><p>IMAGE 20</p><div class="img1"><a href="#"><img id="image20" src="imgs/tree.jpg" alt="Tree"></div></a></div>`

var modal = document.getElementById("myModal");
var img = document.getElementById("image01");
var img1 = document.getElementById("image02");
var img2 = document.getElementById("image03");
var img3 = document.getElementById("image04");
var img4 = document.getElementById("image05");
var img5 = document.getElementById("image06");
var img6 = document.getElementById("image07");
var img7 = document.getElementById("image08");
var img8 = document.getElementById("image09");
var img9 = document.getElementById("image10");
var img10 = document.getElementById("image11");
var img11 = document.getElementById("image12");
var img12 = document.getElementById("image13");
var img13 = document.getElementById("image14");
var img14 = document.getElementById("image15");
var img15 = document.getElementById("image16");
var img16 = document.getElementById("image17");
var img17 = document.getElementById("image18");
var img18 = document.getElementById("image19");
var img19 = document.getElementById("image20");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img9.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img10.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img11.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img12.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img13.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img14.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img15.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img16.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img17.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img18.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img19.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}

window.onkeyup = function (event) {
  if (event.keyCode == 27) {
  modal.style.display = "none";
  }
 }
 
const body = document.getElementById("body")
body.addEventListener('click', outsideClick)
function outsideClick(e){ 
    if(e.target == modal){modal.style.display = 'none' } 
}