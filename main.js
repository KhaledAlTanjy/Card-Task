const text = document.querySelector(".textOnClick");
const popup = document.querySelector(".popup");
const popup1 = document.querySelector(".popup1");


// show popup on click

let selectedElement;
text.addEventListener("click", (e) => {
  selectedElement = e.target;
  popup.style.display = "block";
});

//  hide popup on click
const clsBtn = document.getElementById("closeBtn");
clsBtn.addEventListener("click", () => {
  popup.style.display = "none";
  popup1.style.display = "none";
});

//color the card clicked
const colorInput = document.getElementById("color");
colorInput.addEventListener("click", () => {
  popup1.style.display = "block";
});

const colorPicker = document.getElementById("pColor");
colorPicker.addEventListener("input", (e) => {
  const colorPickerValue = colorPicker.value;

  selectedElement.style.backgroundColor = colorPickerValue;
   popup.style.display = "none";
     popup1.style.display = "none";


});

// Remove Card
const removeCard = document.getElementById("remove");
removeCard.addEventListener("click", (e) => {
  const elementTarget = e.target;
  selectedElement.remove();
 popup.style.display = "none";


});

// ADD NEW DIV CARD (with #NUM)
let count = 1;
document.getElementById("add").addEventListener("click", (e) => {
  const clickedCard = e.target.closest('.textOnClick');

  const newCard = document.createElement("div");
  newCard.style.margin = "0.5rem";
  newCard.className = "textOnClick";
  newCard.textContent = `Wlcome to The Club ${count++}`;
  // text.appendChild(newCard);

  if (text.children.length) {
    const index = Array.from(text.children).indexOf(selectedElement);
    const referenceChild = text.children[index + 1];
    text.insertBefore(newCard, referenceChild);
  } else {
    text.appendChild(newCard);
  }

  

 
  
  popup.style.display = "none";
  
  
  
});
// clickedCard.parentNode.insertBefore(clickedCard, newCard.nextSibling);

// selectedElement.insertBefore(newCard, selectedElement.nextSibling);
// text.parentNode.insertBefore(newCard, newCard.nextSibling);
// text.parentNode.insertBefore( newCard, text )

////////////////////////////////
           /////////EXTRA///////

// const maiDiv = document.querySelector(".mainDiv");
//const colorBtn = document.querySelector("color-card");
// const clBtn = document.querySelector("color");
// const addCard = document.querySelector("add");
// const addCard = document.querySelector("add");


  // const targetElement = e.target;
  // console.log("colorInput",colorPicker);
  // console.log("selectedElement",selectedElement);
  //  const mainContainer = document.getElementById("card-container");


// hide popup on click
// let mDiv = document.getElementById(".mDiv");
// text.addEventListener("click" , () => {
//   popup.style.display = "block";
// });

///////////////////////////////////////////////////////

// Add New Card //

// document.getElementById("add").addEventListener("click" , () => {

//   const newText = text.cloneNode(true);
//   newText.style.margin = "0.5rem";
//   newText.addEventListener("click", () => {
//     popup.style.display = "block";
//   });
// document.body.appendChild(newText);
// });

// for to creat 100 card to click //

// for(i =1 ; i<= 5 ; i++){

//   const clone = text.cloneNode(true);
//   clone.style.margin= "0.5rem";
//   clone.addEventListener("click" , () => {
//   popup.style.display = "block";
// });
//   document.body.appendChild(clone);
// };

////////////////////////////////////////////////////
// function color (){
//   // let selectorColor = document.querySelector("colorInput");
//   // text.style.backgroundColor = selectorColor;
// }
// function add ()
// {
// let addCard = document.querySelector("add");
// addCard.cloneNode(text);
// // addCard.textContent ="";
// text.appendChild(addCard);

// }
// addCard.addEventListener("click" , add());

// function remove (){

// }

// addCard.onclick = ()=>{
//   addCard = text.cloneNode(true);
//   text.appendChild(addCard);}

// ************************************************
// let popup =document.getElementById("popup");
// function openPopup(){
//   popup.classList.add(".open-popup")
// };

// let card = document.querySelector("card-container");

// for (i = 0 ; i<= 100 ; i++){
//   // let mainDiv = document.getElementById("main-card");
// let mainDiv = document.createElement("div");
// mainDiv.className = "card";
// mainDiv.innerText = "Welcome to The Club"
//   mainDiv.style.display = "flex";
// mainDiv.style.backgroundColor = "gray";
// mainDiv.style.justifyContent = "center";
// mainDiv.style.alignItems = "center";
// mainDiv.style.padding = "0.75rem";
// mainDiv.style.margin = "0.5rem";
// mainDiv.style.fontSize =  "1.75rem";;

// document.body.appendChild(mainDiv)
// }

// *************************************************************

// let mainDiv = document.getElementById("main-card");
// mainDiv.style.display = "flex";
// mainDiv.style.backgroundColor = "gray";
// mainDiv.style.justifyContent = "center";
// mainDiv.style.alignItems = "center";
// mainDiv.style.padding = "0.75rem";
// mainDiv.style.margin = "0.5rem";
// mainDiv.style.fontSize =  "1.75rem";

// let maind = document.querySelector("mainDiv");
// for (i = 0 ; i <= 100 ; i++){
//   document.cloneNode(maind);
//   body.appendChild(maind);
// }

// let card = document.querySelector("card-container");
// card.document.style =

// let myCard = document.getElementById('model-container');
// myCard.style.boxSizing = "border-box";
// myCard.style.backgroundColor = "#edeef6";
// myCard.style.display = "flex"; // put it none after end
// myCard.style.position = "fixed";
// myCard.style.top = 0;
// myCard.style.left = 0;
// myCard.style.height = "100vh";
// myCard.style.width = "100vh";

// let btn = document.getElementById("btn"); // بدك تزبط الكبسات حتى يكونو فوق بعض
// btn.style.background = "";
// btn.style.alignItems = "center"

// let titel =document.getElementById("title");
// titel.style.color = "gray";
// titel.style.textDecoration = "underline";

// let myMainewCard = document.getElementById('main-card');
// myMainewCard.style.display = "grid";
// myMainewCard.style.justifyContent = "center";
// myMainewCard.style.margin ="0.75rem";
// myMainewCard.style.padding = "1rem";
// myMainewCard.style.backgroundColor = "gray";
// myMainewCard.style.fontSize = "1.75rem";

// // myMainewCard.onclick = () => {

// //     console.log('OKK');

// // } ;

// let myBoxButton = document.getElementById('selection-button');

// console.log("hi");

// let myButtuon = document.getElementsByClassName('.box-inside');
// myButtuon.style.display ="grid";

// for(i = 0 ; i <=100 ;i++){
//  let myCard = document.createElement('div');

// myCard.innerText = 'Welcome To The Club';
// myCard.className = 'card';
// myCard.style.color = '#000';
// myCard.style.backgroundColor ='gray';
// myCard.style.display = "flex";
// myCard.style.justifyContent = "space-around";
// myCard.style.margin = '1.0rem';
// myCard.style.padding = '0.5rem';
// myCard.style.fontSize = '1.5rem';

// myCard.onclick = () => {};
// document.body.appendChild(myCard);
