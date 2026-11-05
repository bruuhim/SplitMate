let groupss = readGroupsFromLS();
const tableuaDafichageDepens = document.getElementById(
  "tableuaDafichagedepens",
);
const AffichageDonnerDepense = document.getElementById(
  "AffichageDonnerdepense",
);
let addExpenseBtnv2 = document.getElementById("addExpenseBtnv2");
let formsSectionDepense = document.getElementById("forms-section-depense");

const expenseGroupList = document.getElementById("expense-group");

expenseGroupList.addEventListener("change", function () {
  groups.forEach((element) => {
    const groupenamelist = document.createElement("option");

    groupenamelist.textContent = element.name;

    expenseGroupList.appendChild(groupenamelist);
  });
});

function findidGroup(groupId) {
  for (let group of groupss) {
    if (group.id === groupId) {
      return group;
    }
  }
  return null;
}

function findMembre(memebreid) {
  for (let member of members) {
    if (member.id === memebreid) {
      return member.name;
    }
  }
}

//  function findmount(memebreid){
//   depenses.forEach(function (dep){
//   })
//   for(let m  of  depenses[0].parts){
//     if(depenses[0].payeurId===m.membreId){
//       return memberMontat= m.montant
//     }
//   }

//  }

function affichageDeDepens() {
  findidGroup(depenses);

  let temp = "";

  let group = findidGroup;

  depenses.forEach(function (depen) {
    let calculMontant = depen.montant / depen.parts.length;
    let nomm;
    let descriptt;
    let group = findidGroup(depen.groupeId);
    if (group !== null) {
      nomm = group.name;
      descriptt = group.description;
    }
    // findmount(depen.membreId)

    let findGroupName = groups.find(function (group) {
      depen.groupeId === group.id;
    });

    let newArray = depen.parts;
    let memersName = null;
    newArray.forEach((element) => {});

    AffichageDonnerDepense.innerHTML = "";

    temp += ` 
                  <tr class="hover:bg-slate-50/50 transition">
                    <td class="py-4 flex items-center gap-3">
                      <div
                        class="w-8 h-8 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center font-bold text-base">
                      </div>
                      <span class="font-semibold text-slate-900">${descriptt}</span>
                    </td>
                    <td class="py-4 text-slate-500"> ${depen.titre}</td>
                    <td class="py-4 font-bold text-slate-900 text-right pr-4">${depen.montant}</td>
                    <td class="py-4">
                      <span
                        class="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">${depen.categorie}</span>
                    </td>
                    <td class="py-4">
                      <div class="flex items-center gap-2">
                        <span
                          class="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold flex items-center justify-center"></span>
                        <span class="text-xs text-slate-500">${findMembre(depen.payeurId)}</span>
                      </div>
                    </td>
                    <td class="py-4 text-xs text-slate-400">${depen.date}</td>
                    <td class="py-4 text-xs text-slate-400 "> ${calculMontant}</td>
                 </tr>

`;
  });

  AffichageDonnerDepense.innerHTML = temp;
}

function formulaireDepens() {
  function FormuleAjouteUneDepenses() {
    const inputexpenseTitre = document.getElementById("expense-description");
    const Payers = document.getElementById("expense-payer");
    const Amount = document.getElementById("expense-amount");
    const dateExpens = document.getElementById("expense-date");
    const Participants = document.getElementById(
      'input[name="Participants"]:checked',
    );
    const expensForm = document.getElementById("form");
    const inputexpenseGroupSelect = document.getElementById("expense-group");

    const groups = readGroupsFromLS();
    groups.forEach((group) => {
      const option = document.createElement("option");
      option.value = group.id;
      option.textContent = group.name;
      inputexpenseGroupSelect.append(option);
    });

    expensForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let objetExprns = {
        id: Date.now(),
        titre: inputexpenseTitre.value.trim(),
        group: inputexpenseGroupSelect.value.trim(),
        paidby: Payers.value.trim(),
        amount: Amount.value.value.trim(),
        date: dateExpens.value.trim(),
        Participants: Participants,
        methodeRepartition: Participants.value.trim(),
      };

      depenses.push(objetExprns);
    });
  }
  FormuleAjouteUneDepenses();
}

function initExpenseScroll() {
  addExpenseBtnv2.addEventListener("click", () => {
    formsSectionDepense.classList.remove("hidden");
    formsSectionDepense.scrollIntoView({ behavior: "smooth" });
  });
}

initExpenseScroll();
affichageDeDepens();
formulaireDepens();
