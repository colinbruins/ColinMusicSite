let myAudio = document.getElementById("ye");

function togglePlay() {
  return ye.paused ? ye.play() : ye.pause();
};

let myAudio1 = document.getElementById("rot");

function newTog() {
  return rot.paused ? rot.play() : rot.pause();
};

let myAudio2 = document.getElementById("cudi");

function Tog2() {
  return cudi.paused ? cudi.play() : cudi.pause();
};
window.onload=function(){
  

let vslider = document.getElementById("myRange");


vslider.addEventListener("change", (e) => {
  ye.volume = (e.target.value) / 100
  cudi.volume = (e.target.value) / 100
  rot.volume = (e.target.value) / 100
})
}