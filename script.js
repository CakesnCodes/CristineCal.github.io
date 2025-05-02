//Iframe shenanigains

let div = document.getElementById("resize");

function resizeframe() {
  div.style.height = div.contentWindow.document.body.scrollHeight + 'px';
        };

// Modal Setup
var modal = document.getElementById('modal');

var modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function() { 
  modal.style.display = "none";
});

// global handler
document.addEventListener('click', function (e) { 
  if (e.target.className.indexOf('modal-target') !== -1) {
      var img = e.target;
      var modalImg = document.getElementById("modal-content");
      var captionText = document.getElementById("modal-caption");
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
   }
});

// animation and stuff

function allberries(){
  document.getElementById("Sorry").innerHTML = "<img src='https://file.garden/Z9GPMGr3xh_Qkwad/sorgy.png'>";
  document.getElementById("Sorry").classList.add("animate");
};

