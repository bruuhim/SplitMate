function readMembersFromLS() {
  return JSON.parse(localStorage.getItem("members")) || [];
}

function saveMembersToLS() {
  localStorage.setItem("members", JSON.stringify(members));
}

function readGroupsFromLS() {
  return JSON.parse(localStorage.getItem("groups")) || [];
}

function saveGroupsToLS() {
  localStorage.setItem("groups", JSON.stringify(groups));
}


let members = readMembersFromLS();
let groups = readGroupsFromLS();