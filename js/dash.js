


 let  nombreTotalG= document.querySelector("#nombreTotalG");

nombreTotalG.textContent = `${groups.length}`


let nombretotalM = document.querySelector('#nombretotalM');
nombretotalM.textContent = `${members.length}`



const Dashboard = document.getElementById("Dashboard")
const Groupes= document.getElementById("Groupes")
const  Depenses= document.getElementById("Depenses")

  
const  btnDashboard = document.getElementById("btn-dashboard");
const btnGroups =document.getElementById("btn-groups");
const btnDepenses = document.getElementById("btn-depenses")


btnDashboard.addEventListener('clisk' , function(){

    Dashboard.classList.remove("hidden");
    Groupes.classList.add("hidden");
    Depenses.classList.add("hidden");
})

btnGroups.addEventListener('click' , function(){

     Dashboard.classList.add("hidden");
    Groupes.classList.remove("hidden");
    Depenses.classList.add("hidden");

})

btnDepenses.addEventListener('click', function(){


     Dashboard.classList.add("hidden");
    Groupes.classList.add("hidden");
    Depenses.classList.remove("hidden");
})









 
 
 
 
 
 
 
 
 
 
 
 
 