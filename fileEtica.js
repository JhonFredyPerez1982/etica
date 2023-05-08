let imageBoard="https://media.istockphoto.com/id/1204150323/es/foto/ayudar-al-concepto-de-la-mano.jpg?s=1024x1024&w=is&k=20&c=5SguygHsJtdW3wOgdIesKn9jkpJltheZcrZKSwewgfc=";
var d=document.getElementById("dibujito");
var pincel=d.getContext("2d");

let box=document.querySelector('.check');
    addEventListener("click",funcion);
    let box1=document.getElementById('checkbox1');
    let box2=document.getElementById('checkbox2');
    let box3=document.getElementById('checkbox3');
    let box4=document.getElementById('checkbox4');
    let box5=document.getElementById('checkbox5');
    let box6=document.getElementById('checkbox6');
function funcion(){
    if(box1.checked){
    box.innerText="reforma rural integral";
    }else if(box2.checked){
    box.innerText="participación política";
        }else if(box3.checked){
            box.innerText="fin del conflicto";
                }else if(box4.checked){
                    box.innerText="solución al problema de las drogas ilícitas";
                        }else if(box5.checked){
                            box.innerText="acuerdo sobre las víctimas del conflicto";
                                }else if(box6.checked){
                                    box.innerText="implementación, verificación y refrendación, y también por los contextos, los actores y los tiempos para hacerlos posibles y efectivos";
                                        }
}
imagen.style.margin="10px auto";
imagen=new Image();
imagen.src=imageBoard;

imagen.addEventListener("load",show1);
function show1(){ 
        pincel.drawImage(imagen,0,110);
    }


    let nIntervId;
    nIntervId = setInterval(flashText, 300);
    
    function flashText() {
    const Elem = document.getElementById("h2");
    Elem.className === "checkbox6" ? Elem.className = "checkbox7" :Elem.className = "checkbox6";

    }