let button= document.getElementById ('mybutton');
  button.addEventListener ('click', function () {
    alert ('button clicked')
  });

let color= document.getElementById ('changeBgrd');
  button.addEventListener ('click', function () {
    color.style.backgroundColor = 'red-background';
  });

let redbackground= document.getElementsByClassName('background');
button.addEventListener('click', function (){
  redbackground.classList.toggle ('red-background');

});