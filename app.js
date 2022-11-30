
let color = ['Green', 'Red','Purple','Pink','Orange','Yellow','Blue','Silver','Gray','Lime','Olive','Navy','Aqua','Brown'];


let click = document.getElementById('click');
let color_text = document.getElementById("color");

let body = document.getElementById('body');

let random_Number;

click.addEventListener('click', function(){
    random_Number = Math.floor(Math.random()*14);
    console.log(random_Number);
    color_text.innerHTML = color[random_Number];
})

click.addEventListener('click', function(){
    body.style.background = color[random_Number];
   let x =(color[random_Number]);
    x = color_text.innerHTML
})
