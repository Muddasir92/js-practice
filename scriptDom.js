// let newBTN = document.createElement("button");
// newBTN.innerText="Click me";

// newBTN.style.backgroundColor='red';
// newBTN.style.color='white';
// document.querySelector("body").prepend(newBTN);

// let para= document.querySelector("p");
// para.classList.add('paragraph1');

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//   let newpara = document.querySelector(".paragraph");
//   newpara.innerHTML = " Insan ban Insan";
//   console.log("everything is ok");
//   document.getElementById("btn1").style.backgroundColor = "white";
//   let paraTest = document.getElementById("tester");
//   paraTest.innerHTML = evt.x;
//   console.log(evt);
// };


let mode = document.querySelector("#btn1");
currentMode = "light";
let body = document.querySelector("body");

    mode.addEventListener("click" , ()=>{
        if(currentMode==="light"){
            currentMode="dark";
            console.log("dark");
            body.classList.add("dark");
            body.classList.remove("light");
        }
            
        else{
            currentMode="dark";
            currentMode= "light";
            console.log("light");
            body.classList.add("light")
            body.classList.remove("dark");
        }
    })