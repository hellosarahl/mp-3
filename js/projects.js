let one= document.getElementById("one")
let two= document.getElementById("two")
let output=document.getElementById("output");



function doadd(){
    output.innerHTML=String(Number(one.value)+
    Number(two.value))
    if(Number(output.innerHTML)<0){
        output.style.color="red";
    }else{
         output.style.color="black";
    }
}

function dosubtract(){
    output.innerHTML=String(Number(one.value)-
    Number(two.value))
    if(Number(output.innerHTML)<0){
        output.style.color="red";
    }else{
         output.style.color="black";
    }
}

function domultiply(){
    output.innerHTML=String(Number(one.value)*
    Number(two.value))
    if(Number(output.innerHTML)<0){
        output.style.color="red";
    }else{
         output.style.color="black";
    }
}

function dodivide(){
 output.innerHTML=String(Number(one.value)/
    Number(two.value))
    if(Number(output.innerHTML)<0){
        output.style.color="red";
    }else{
         output.style.color="black";
    }
}
 function dopower(){
    let r=1;
    for(let i=0;i<Number(two.value);i++){
        r=r*Number(one.value);

    }
    output.innerHTML=String(r);
    if(Number(output.innerHTML)<0){
        output.style.color="red";
    }else{
         output.style.color="black";
    }

 }


 function doclear(){
    one.value="";
    two.value= "";
     output.innerHTML="";

 }