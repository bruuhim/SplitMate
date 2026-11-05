


let nombreTotalG = document.querySelector("#nombreTotalG");

nombreTotalG.textContent = `${groups.length}`


let nombretotalM = document.querySelector('#nombretotalM');
nombretotalM.textContent = `${members.length}`



const Dashboard = document.getElementById("Dashboard")
const Groupes = document.getElementById("Groupes")
const Depenses = document.getElementById("Depenses")


const btnDashboard = document.getElementById("btn-dashboard");
const btnGroups = document.getElementById("btn-groups");
const btnDepenses = document.getElementById("btn-depenses")


btnDashboard.addEventListener('click', function () {

    Dashboard.classList.remove("hidden");
    Groupes.classList.add("hidden");
    Depenses.classList.add("hidden");
})

btnGroups.addEventListener('click', function () {

    Dashboard.classList.add("hidden");
    Groupes.classList.remove("hidden");
    Depenses.classList.add("hidden");

})

btnDepenses.addEventListener('click', function () {


    Dashboard.classList.add("hidden");
    Groupes.classList.add("hidden");
    Depenses.classList.remove("hidden");

})


const TableuaDafichage = document.getElementById("tableuaDafichage");

const AffihageDonner = document.getElementById("AffichageDonner");

// const toutAfficher = document.getElementById("toutAfficher");

let boite = "";

groups.forEach(function (group) {
    AffihageDonner.innerHTML = ""
    boite +=
    `
        <tr id="toutAfficher" class="hover:bg-slate-50/50 transition">
            <td class="py-4 flex items-center gap-3">
                <div
                
                    class="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold">
                    🍽️</div>
                <span class="font-semibold text-slate-900">${group.description}</span>
            </td>
            <td class="py-4 text-slate-500">${group.name}</td>
            <td class="py-4 font-bold text-slate-900">${group.currency}</td>
            <td class="py-4">
                <div class="flex items-center gap-2">
                    <span
                        class="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold flex items-center justify-center">VO</span>
                    <span class="text-xs text-slate-500">${group.closed}</span>
                </div>
            </td>
            <td class="py-4 text-xs text-slate-400">${group.startDate}</td>
        </tr>
        `

});


AffihageDonner.innerHTML = boite





















