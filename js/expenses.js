const tableuaDafichageDepens =document.getElementById('tableuaDafichagedepens');
const AffichageDonnerDepense = document.getElementById('AffichageDonnerdepense');



function FindGroupDescription (groupId){
    
    let descripgroup = groups.find( (element)=>{
        
        return element.id == groupId ;
    });

          return descripgroup ? descripgroup.description : "Groupe introuvable";


}
function FindGroupName (groupId){

    let Namegroup = groups.find((element)=> {

        return element.id== groupId ;


    })
    return  FindGroupNam ? FindGroupNam.name : 
    "Groupe introuvable";
}

// console.log("GROUPS:", groups);
// console.log("DEPENSES:", depenses);

// console.log("GROUP ID:", groups[0].id);
// console.log("DEPENSE GROUP ID:", depenses[0].groupeId);

// console.log("RESULT:", groups.find(function(element) {
//     return element.id == depenses[0].groupeId;
// }));






let temp =""; 

depenses.forEach(function(depen){
AffichageDonnerDepense.innerHTML = "";

temp +=

` 
                  <tr class="hover:bg-slate-50/50 transition">
                    <td class="py-4 flex items-center gap-3">
                      <div
                        class="w-8 h-8 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center font-bold text-base">
                      </div>
                      <span class="font-semibold text-slate-900">${FindGroupDescription(depen.groupeId)}</span>
                    </td>
                    <td class="py-4 text-slate-500">  ${FindGroupName(depen.groupeId)}  </td>
                    <td class="py-4 font-bold text-slate-900 text-right pr-4">860 DH</td>
                    <td class="py-4">
                      <span
                        class="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">${depen.categorie}</span>
                    </td>
                    <td class="py-4">
                      <div class="flex items-center gap-2">
                        <span
                          class="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold flex items-center justify-center">VO</span>
                        <span class="text-xs text-slate-500">${depen.payeurId}</span>
                      </div>
                    </td>
                    <td class="py-4 text-xs text-slate-400">${depen.date}</td>
                    <td class="py-4 text-xs text-slate-400 "> ${depen.parts}</td>
                 </tr>

`
});

AffichageDonnerDepense.innerHTML  = temp

