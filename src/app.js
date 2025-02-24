import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {


  window.reload = function reload(){
    let number= ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    let suits = ["♣","♦","♥","♠"]
   

    let randomCardNumber=Math.floor(Math.random()*number.length)
    let randomSuitNumber=Math.floor(Math.random()*suits.length)
    let final= document.getElementById("cardcontent")
    final.innerHTML=number[randomCardNumber]
    let final1=document.getElementById("suittopleft")
    final1.innerHTML=suits[randomSuitNumber]
    let final2= document.getElementById("suitbottomright")
    final2.innerHTML=suits[randomSuitNumber] 

  
       if(suits[randomSuitNumber]== "♦"|| suits[randomSuitNumber]=="♥"){
        final.style.color ="red"
       }
       if(suits[randomSuitNumber] == "♣" || suits[randomSuitNumber]== "♠" ){
        final.style.color = "black"
       }

       if(suits[randomSuitNumber]== "♦"|| suits[randomSuitNumber]=="♥"){
        final1.style.color ="red"
       }
       if(suits[randomSuitNumber] == "♣" || suits[randomSuitNumber]== "♠" ){
        final1.style.color = "black"
       }

       if(suits[randomSuitNumber]== "♦"|| suits[randomSuitNumber]=="♥"){
        final2.style.color ="red"
       }
       if(suits[randomSuitNumber] == "♣" || suits[randomSuitNumber]== "♠" ){
        final2.style.color = "black"
       }
       
    //Apartado extra: Modificar las dimensiones de la carta

    let dimWidth = document.querySelector(".changeWidth")
    let dimHeight = document.querySelector(".changeHeight")
    let dimCard = document.getElementById("IDCARD")
    

    dimWidth.addEventListener("change", i=>{
      dimCard.style.width = i.target.value + "px";
    });

    dimHeight.addEventListener("change", i=>{
      dimCard.style.height = i.target.value + "px";
    });
   }

    //Temporizador

    let tempInterval;

  
    window.startTemp = function startTemp(){
      tempInterval=setInterval(() => {
        reload()
      }, 1000)
     }

    window.stopTemp = function stopTemp(){
      clearInterval(tempInterval);
    }
  }
  
