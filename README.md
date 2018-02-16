# CG

//alert("ok");

//Colorindo o fundo da tela
//document.body.style.background = "rgb(255,225,0)";
document.body.style.background = "rgb(255,0,0)";
//Pegando o evento de click do mouse.
window.addEventListener("mousemove",mudarCorHsl);
let status = 0;
let S    = 100;
let L    = 50;
let luz    = 100;

window.addEventListener("click",mudar);
function mudar(){
  if (status == 0){
    status = 1;
  }else{
    status = 0;
  }
}

function mudarCor(evt){
  let h = window.innerHeight;
  let w = window.innerWidth;
  let x   = evt.x;

  let msg = `X: ${x}, Y: ${y}, W: ${w}, H ${h}`;

  //Percorrendo em RGB
  let x_porc = ~~((x/w)*255);
  let y_porc = ~~(((h-y)/h)*255);
  document.body.style.background = `rgb(${x_porc},0,${y_porc})`;

}

function mudarCorHsl(evt){
  let h = window.innerHeight;
  let w = window.innerWidth;
  S   = evt.x;
  if (status == 0){
    L   = evt.y;
  }else {
    luz = evt.y;
  }

  //let msg = `X: ${x}, Y: ${y}, W: ${w}, H ${h}`;

  //Percorrendo em HSL
  let x_porc = ~~((S/w)*360);
  let y_porc = ~~(((h-L)/h)*100) + '%';
  let luz_porc    = ~~(((h-luz)/h)*100) + '%';

  document.body.style.background = `hsl(${x_porc},${luz_porc},${y_porc})`;
}
